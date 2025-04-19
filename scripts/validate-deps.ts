import fs from "fs/promises";
import path from "path";
import * as parser from "@babel/parser";
import traverse, { NodePath } from "@babel/traverse";
import * as t from "@babel/types";
import { ComponentConfig } from "../lib/component-config-types"; // Adjusted path assuming script is in scripts/

const registryPath = path.join(process.cwd(), "registry", "new-york");
const shadcnUiPrefix = "@/components/ui/";
const registryPrefix = "@/registry/new-york/";
const hooksRegistryPrefix = "@/registry/hooks/";
const excludedNpmPackages = new Set([
  "react",
  "react-dom",
  "next",
  "tailwindcss",
  "class-variance-authority",
  "clsx",
  "tailwind-merge",
]);

// Removed config parsing regexes and helpers
// const npmDepsRegex = ...
// const shadDepsRegex = ...
// const linkedDepsRegex = ...
// const hooksArrayRegex = ...
// const legacyDepsRegex = ...
// const stringLiteralRegex = ...
// function parseStringArrayFromMatch(...) { ... }

interface ComponentInfo {
  name: string;
  componentFiles: string[];
  configFile: string;
}

// Removed ParsedConfig interface - no longer needed
// interface ParsedConfig { ... }

// New function to load config using dynamic import
async function loadConfigFromPath(
  configFile: string
): Promise<ComponentConfig | null> {
  try {
    const modulePath = path.resolve(configFile);
    // Bun/tsx should handle importing .ts directly
    const module = await import(modulePath);
    if (module.default) {
      return module.default as ComponentConfig;
    } else {
      console.error(
        `❌ Config file ${configFile} is missing a default export.`
      );
      return null;
    }
  } catch (error) {
    console.error(`❌ Error loading config file ${configFile}:`, error);
    return null;
  }
}

async function findComponentFiles(
  componentDir: string
): Promise<ComponentInfo | null> {
  const componentName = path.basename(componentDir);
  try {
    const files = await fs.readdir(componentDir);
    // Find all .tsx files excluding previews
    const componentFiles = files
      .filter((f: string) => f.endsWith(".tsx") && !f.endsWith("preview.tsx"))
      .map((f: string) => path.join(componentDir, f));

    const configFile = files.find((f: string) => f === "config.ts");

    if (componentFiles.length > 0 && configFile) {
      return {
        name: componentName,
        componentFiles: componentFiles,
        configFile: path.join(componentDir, configFile),
      };
    } else if (componentFiles.length === 0) {
      console.warn(
        `Skipping ${componentName}: No component .tsx files found (excluding preview.tsx).`
      );
    } else {
      // configFile is missing
      console.warn(`Skipping ${componentName}: Missing config.ts file.`);
    }
  } catch (error) {
    console.error(`Error reading directory ${componentDir}:`, error);
  }

  return null;
}

function extractImports(content: string): {
  shadcn: Set<string>;
  registry: Set<string>;
  npm: Set<string>;
  hooks: Set<string>;
} {
  const shadcn = new Set<string>();
  const registry = new Set<string>();
  const npm = new Set<string>();
  const hooks = new Set<string>();

  try {
    const ast = parser.parse(content, {
      sourceType: "module",
      plugins: ["jsx", "typescript"],
    });

    traverse(ast, {
      ImportDeclaration(path: NodePath<t.ImportDeclaration>) {
        const importPath = path.node.source.value;

        if (importPath.startsWith(shadcnUiPrefix)) {
          shadcn.add(importPath.substring(shadcnUiPrefix.length));
        } else if (importPath.startsWith(registryPrefix)) {
          const regComp = importPath
            .substring(registryPrefix.length)
            .split("/")[0];
          if (regComp) registry.add(regComp);
        } else if (importPath.startsWith(hooksRegistryPrefix)) {
          // Check for hooks
          // Use string manipulation, not path module
          const parts = importPath.split("/");
          const fileName = parts[parts.length - 1]; // Get the last part
          if (fileName) {
            const hookName = fileName.replace(/\\.ts$/, ""); // Remove .ts extension
            if (hookName) hooks.add(hookName);
          }
        } else if (
          !importPath.startsWith(".") &&
          !importPath.startsWith("@/lib") && // Keep excluding internal lib/hooks
          !importPath.startsWith("@/hooks") &&
          !excludedNpmPackages.has(importPath)
        ) {
          // Add any other non-relative, non-excluded import as an NPM package
          npm.add(importPath);
        }
      },
    });
  } catch (error) {
    console.error(`Error parsing file content with Babel: ${error}`);
    // Return empty sets on error, including hooks
    return {
      shadcn: new Set(),
      registry: new Set(),
      npm: new Set(),
      hooks: new Set(),
    };
  }

  return { shadcn, registry, npm, hooks };
}

async function validateComponent(info: ComponentInfo): Promise<boolean> {
  let hasErrors = false;
  try {
    // Load config directly using dynamic import
    const config = await loadConfigFromPath(info.configFile);

    if (!config) {
      console.error(
        `  SKIPPING validation for ${info.name} due to config load failure.`
      );
      return true; // Treat as error if config fails to load
    }

    // Read and process imports from ALL component files
    const allImports = {
      shadcn: new Set<string>(),
      registry: new Set<string>(),
      npm: new Set<string>(),
      hooks: new Set<string>(),
    };
    for (const componentFile of info.componentFiles) {
      try {
        const content = await fs.readFile(componentFile, "utf-8");
        const fileImports = extractImports(content);
        fileImports.shadcn.forEach((imp) => allImports.shadcn.add(imp));
        fileImports.registry.forEach((imp) => allImports.registry.add(imp));
        fileImports.npm.forEach((imp) => allImports.npm.add(imp));
        fileImports.hooks.forEach((imp) => allImports.hooks.add(imp));
      } catch (readError) {
        console.error(
          `Error reading component file ${componentFile}:`,
          readError
        );
        // Optionally set hasErrors = true here if a file read error should fail validation
      }
    }

    console.log(`\nValidating ${info.name}...`);

    // Get dependencies directly from the loaded config object
    // Use empty sets as fallbacks if dependencies or specific arrays are missing
    const configDeps = config.dependencies;
    const configNpm = new Set<string>(
      typeof configDeps === "object" &&
      !Array.isArray(configDeps) &&
      configDeps.npm
        ? configDeps.npm
        : []
    );
    const configShad = new Set<string>(
      typeof configDeps === "object" &&
      !Array.isArray(configDeps) &&
      configDeps.shad
        ? configDeps.shad
        : []
    );
    const configLinked = new Set<string>(
      typeof configDeps === "object" &&
      !Array.isArray(configDeps) &&
      configDeps.linked
        ? configDeps.linked
        : []
    );
    const configHooks = new Set<string>(
      typeof configDeps === "object" &&
      !Array.isArray(configDeps) &&
      configDeps.hooks
        ? configDeps.hooks
        : []
    );

    // Use combined imports (allImports) for validation

    // 1. Compare Shadcn dependencies
    allImports.shadcn.forEach((imp) => {
      if (!configShad.has(imp)) {
        console.error(
          `  ❌ Missing Shadcn dependency in config.ts (shad:[]): "${imp}"`
        );
        hasErrors = true;
      }
    });
    configShad.forEach((dep) => {
      if (!allImports.shadcn.has(dep)) {
        console.warn(
          `  ⚠️ Unused Shadcn dependency in config.ts (shad:[]): "${dep}"`
        );
      }
    });

    // 2. Compare Registry dependencies
    allImports.registry.forEach((imp) => {
      if (imp !== info.name && !configLinked.has(imp)) {
        console.error(
          `  ❌ Missing registry dependency in config.ts (linked:[]): "${imp}"`
        );
        hasErrors = true;
      }
    });
    configLinked.forEach((dep) => {
      if (!allImports.registry.has(dep)) {
        console.warn(
          `  ⚠️ Unused registry dependency in config.ts (linked:[]): "${dep}"`
        );
      }
    });

    // 3. Compare NPM dependencies
    allImports.npm.forEach((imp) => {
      if (!configNpm.has(imp)) {
        console.error(
          `  ❌ Missing NPM dependency in config.ts (npm:[]): "${imp}"`
        );
        hasErrors = true;
      }
    });
    configNpm.forEach((dep) => {
      if (!allImports.npm.has(dep)) {
        console.warn(
          `  ⚠️ Unused NPM dependency in config.ts (npm:[]): "${dep}"`
        );
      }
    });

    // 4. Compare Hook dependencies
    allImports.hooks.forEach((imp) => {
      if (!configHooks.has(imp)) {
        console.error(
          `  ❌ Missing Hook dependency in config.ts (hooks:[]): "${imp}"`
        );
        hasErrors = true;
      }
    });
    configHooks.forEach((dep) => {
      if (!allImports.hooks.has(dep)) {
        console.warn(
          `  ⚠️ Unused Hook dependency in config.ts (hooks:[]): "${dep}"`
        );
      }
    });

    if (!hasErrors) {
      console.log(`  ✅ Config matches imports for ${info.name}.`);
    }
  } catch (error) {
    console.error(`Error processing ${info.name}:`, error);
    hasErrors = true;
  }
  return hasErrors;
}

async function main() {
  try {
    // Ensure the base registry directory exists if needed for other operations,
    // but finding components doesn't strictly require it.
    // await fs.mkdir(registryPath, { recursive: true });

    const entries = await fs.readdir(registryPath, { withFileTypes: true });
    const componentDirs = entries
      .filter((dirent: fs.Dirent) => dirent.isDirectory())
      .map((dirent: fs.Dirent) => path.join(registryPath, dirent.name));

    console.log(`Found ${componentDirs.length} component directories.`);

    let totalErrors = 0;
    for (const dir of componentDirs) {
      const info = await findComponentFiles(dir);
      if (info) {
        const componentHasErrors = await validateComponent(info);
        if (componentHasErrors) {
          totalErrors++;
        }
      }
    }

    if (totalErrors > 0) {
      console.error(
        `\nValidation finished with ${totalErrors} component(s) having errors.`
      );
      process.exit(1); // Exit with error code
    } else {
      console.log(
        "\nValidation finished successfully. All checked component configs seem consistent with imports."
      );
    }
  } catch (error) {
    console.error("Script failed:", error);
    process.exit(1);
  }
}

main();
