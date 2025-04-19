import fs from "fs/promises";
import path from "path";

const registryPath = path.join(process.cwd(), "registry", "new-york");
const shadcnUiPrefix = "@/components/ui/";
const registryPrefix = "@/registry/new-york/";
const excludedNpmPackages = new Set([
  "react",
  "react-dom",
  "next",
  "tailwindcss",
  "lucide-react",
  "class-variance-authority",
  "clsx",
  "tailwind-merge",
]);

// Basic regex, might need refinement for complex cases
const importRegex =
  /import(?:["'\\s]*(?:\\w+|\\{[^}]*\\})\\s*from\\s*)?["']([^"']+)["']/g;
// Regex to find the array content for dependencies and registryDependencies
const depsArrayRegex = /dependencies\s*:\s*(\[[\s\S]*?\])/; // Match any char including newline
const registryDepsArrayRegex = /registryDependencies\s*:\s*(\[[\s\S]*?\])/; // Match any char including newline
const stringLiteralRegex = /"([^"]*)"/g;

interface ComponentInfo {
  name: string;
  mainFile: string;
  configFile: string;
}

interface ParsedConfig {
  dependencies: Set<string>;
  registryDependencies: Set<string>;
}

async function findComponentFiles(
  componentDir: string
): Promise<ComponentInfo | null> {
  const componentName = path.basename(componentDir);
  const files = await fs.readdir(componentDir);
  const mainFile = files.find(
    (f) => f.endsWith(".tsx") && !f.endsWith("preview.tsx")
  );
  const configFile = files.find((f) => f === "config.ts");

  if (mainFile && configFile) {
    return {
      name: componentName,
      mainFile: path.join(componentDir, mainFile),
      configFile: path.join(componentDir, configFile),
    };
  }
  console.warn(
    `Skipping ${componentName}: Missing main .tsx or config.ts file.`
  );
  return null;
}

function extractImports(content: string): {
  shadcn: Set<string>;
  registry: Set<string>;
  npm: Set<string>;
} {
  const shadcn = new Set<string>();
  const registry = new Set<string>();
  const npm = new Set<string>();
  let match;

  while ((match = importRegex.exec(content)) !== null) {
    const importPath = match[1];
    if (importPath.startsWith(shadcnUiPrefix)) {
      shadcn.add(importPath.substring(shadcnUiPrefix.length));
    } else if (importPath.startsWith(registryPrefix)) {
      const regComp = importPath.substring(registryPrefix.length).split("/")[0]; // Get component name
      if (regComp) registry.add(regComp);
    } else if (
      !importPath.startsWith(".") &&
      !importPath.startsWith("@/lib") &&
      !importPath.startsWith("@/hooks") &&
      !excludedNpmPackages.has(importPath)
    ) {
      // Basic check for NPM packages (not relative, not @/lib, not excluded)
      npm.add(importPath);
    }
  }
  return { shadcn, registry, npm };
}

function parseConfig(content: string): ParsedConfig {
  const depsMatch = content.match(depsArrayRegex);
  const registryDepsMatch = content.match(registryDepsArrayRegex);

  const parseStringArray = (arrayContent: string | null): Set<string> => {
    const result = new Set<string>();
    if (arrayContent) {
      let stringMatch;
      // Reset regex lastIndex before using exec in a loop
      stringLiteralRegex.lastIndex = 0;
      while ((stringMatch = stringLiteralRegex.exec(arrayContent)) !== null) {
        result.add(stringMatch[1]);
      }
    }
    return result;
  };

  return {
    dependencies: parseStringArray(depsMatch ? depsMatch[1] : null),
    registryDependencies: parseStringArray(
      registryDepsMatch ? registryDepsMatch[1] : null
    ),
  };
}

async function validateComponent(info: ComponentInfo): Promise<boolean> {
  let hasErrors = false;
  try {
    const [mainContent, configContent] = await Promise.all([
      fs.readFile(info.mainFile, "utf-8"),
      fs.readFile(info.configFile, "utf-8"),
    ]);

    const imports = extractImports(mainContent);
    const config = parseConfig(configContent);

    console.log(`\nValidating ${info.name}...`);

    // Compare Shadcn dependencies
    imports.shadcn.forEach((imp) => {
      if (!config.dependencies.has(imp)) {
        console.error(
          `  ❌ Missing Shadcn dependency in config.ts: "${imp}" (imported in ${path.basename(
            info.mainFile
          )})`
        );
        hasErrors = true;
      }
    });
    config.dependencies.forEach((dep) => {
      if (!imports.shadcn.has(dep)) {
        console.warn(`  ⚠️ Unused Shadcn dependency in config.ts: "${dep}"`);
      }
    });

    // Compare Registry dependencies
    imports.registry.forEach((imp) => {
      if (imp !== info.name && !config.registryDependencies.has(imp)) {
        // Don't check self-import
        console.error(
          `  ❌ Missing registry dependency in config.ts: "${imp}" (imported in ${path.basename(
            info.mainFile
          )})`
        );
        hasErrors = true;
      }
    });
    config.registryDependencies.forEach((dep) => {
      if (!imports.registry.has(dep)) {
        console.warn(`  ⚠️ Unused registry dependency in config.ts: "${dep}"`);
      }
    });

    // Check for unexpected NPM imports (basic check)
    if (imports.npm.size > 0) {
      console.warn(
        `  ⚠️ Found potential NPM imports in ${path.basename(
          info.mainFile
        )} not declared in config (manual check recommended): ${[
          ...imports.npm,
        ].join(", ")}`
      );
      // Note: config.ts doesn't standardizedly list NPM packages other than Shadcn deps, so we just warn.
    }

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
    await fs.mkdir(path.dirname(registryPath), { recursive: true }); // Ensure scripts dir exists

    const entries = await fs.readdir(registryPath, { withFileTypes: true });
    const componentDirs = entries
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => path.join(registryPath, dirent.name));

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
