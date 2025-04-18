import * as fs from "fs";
import * as path from "path";
import { glob } from "glob";
import type {
  ComponentConfig,
  Registry,
  ComponentFile,
  ShadcnComponent,
} from "../lib/component-config-types";
import { ComponentName } from "../lib/component-types";

// Function to ensure directory exists
function ensureDirectoryExists(dirPath: string) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// Helper function to load config from a .ts file
async function loadConfig(configFile: string): Promise<ComponentConfig | null> {
  try {
    // Only loading TypeScript files
    const modulePath = path.resolve(configFile);
    // Remove .ts extension for import (to avoid .ts-import-not-supported error)
    const modulePathForImport = modulePath.replace(/\.ts$/, "");

    console.log(`ℹ️ Loading TS config from: ${modulePath}`);
    try {
      // Dynamic import of the config.ts module
      const module = await import(modulePathForImport);
      if (!module.default) {
        console.error(`❌ No default export found in ${configFile}`);
        return null;
      }
      return module.default as ComponentConfig;
    } catch (importError) {
      console.error(
        `❌ Error importing TS config from ${configFile}:`,
        importError
      );
      return null;
    }
  } catch (error) {
    console.error(`❌ Error loading config from ${configFile}:`, error);
    return null;
  }
}

// Function to get our component names from registry config files
async function getOurComponentNames(): Promise<string[]> {
  try {
    // Only look for TypeScript config files
    const configFiles = await glob("registry/**/config.ts");
    const componentNames: string[] = [];

    for (const configFile of configFiles) {
      const config = await loadConfig(configFile);
      if (config && config.name) {
        componentNames.push(config.name);
      }
    }

    return componentNames;
  } catch (error) {
    console.error("❌ Error reading registry config files:", error);
    return [];
  }
}

// Function to process shadcn dependencies
function processShadcnDependencies(
  dependencies?: ShadcnComponent[]
): string[] | undefined {
  if (!dependencies || dependencies.length === 0) return undefined;

  // Keep the original component names for shadcn components
  return dependencies;
}

// Function to process linked dependencies to components in our registry
function processLinkedDependencies(
  dependencies?: ComponentName[],
  baseUrl: string = process.env.NEXT_PUBLIC_BASE_URL || "https://ui.kitze.io"
): string[] | undefined {
  if (!dependencies || dependencies.length === 0) return undefined;

  // Convert component names to full URLs
  return dependencies.map(
    (componentName) => `${baseUrl}/r/${componentName}.json`
  );
}

// Legacy function to maintain backward compatibility
function processRegistryDependencies(
  dependencies: string[] | undefined,
  ourComponents: string[]
): string[] | undefined {
  if (!dependencies || dependencies.length === 0) return undefined;

  return dependencies.map((dep) => {
    // If it's a URL, keep it as is
    if (dep.startsWith("http")) return dep;
    // If it's one of our components, generate the registry URL
    if (ourComponents.includes(dep)) {
      const url = process.env.NEXT_PUBLIC_BASE_URL || "https://ui.kitze.io";
      return `${url}/r/${dep}.json`;
    }
    // If it's a shadcn/ui component, keep the name
    return dep;
  });
}

/**
 * Determines the target directory based on the file type.
 * @param fileType - The type of the registry file (e.g., "registry:component").
 * @returns The target directory string (e.g., "components") or undefined.
 */
function getTargetDirectory(fileType: string): string | undefined {
  switch (fileType) {
    case "registry:component":
    case "registry:ui": // Assuming UI components also go into 'components'
      return "components";
    case "registry:hook":
      return "hooks";
    case "registry:lib":
      return "lib";
    default:
      return undefined; // No specific target for other types
  }
}

/**
 * Generates JSON files for each component configuration
 *
 * The generated JSON follows the shadcn/ui registry schema format:
 * - Each component gets its own JSON file in the public/r directory
 * - Hook files are included in the files array with type "registry:hook"
 * - registryDependencies can reference shadcn components by name or external registries by URL
 *
 * File types:
 * - registry:block: Complex components with multiple files
 * - registry:component: Simple components
 * - registry:lib: Library and utility files
 * - registry:hook: Hook files
 * - registry:ui: UI components and single-file primitives
 * - registry:page: Page or file-based routes
 * - registry:file: Miscellaneous files
 * - registry:style: Registry styles (e.g., new-york)
 * - registry:theme: Theme files
 *
 * @param configs - Array of component configurations to process
 */
export async function generateComponentFiles(configs: ComponentConfig[]) {
  console.info("ℹ️ Generating individual component JSON files...");

  try {
    // Ensure directory exists
    ensureDirectoryExists("public/r");
    const ourComponents = await getOurComponentNames();
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://ui.kitze.io";

    for (const config of configs) {
      try {
        // Process the hooks for this component
        const processedHooks: ComponentFile[] = [];
        const hookPaths = new Set<string>(); // To track hook paths and avoid duplicates

        // Get hooks from multiple places and merge them (for backward compatibility)
        // Check if dependencies is an object with hooks or an array
        const depsHooks =
          typeof config.dependencies === "object" &&
          !Array.isArray(config.dependencies) &&
          config.dependencies.hooks
            ? config.dependencies.hooks
            : [];

        const allHooks = [...depsHooks, ...(config.hooks || [])];

        if (allHooks.length > 0) {
          console.info(
            `ℹ️ Adding hooks to output for ${config.name}: ${allHooks.join(
              ", "
            )}`
          );

          for (const hook of allHooks) {
            const hookPath = `registry/hooks/${hook}.ts`;

            // Skip if we've already processed this hook
            if (hookPaths.has(hookPath)) {
              console.info(`⚠️ Skipping duplicate hook: ${hookPath}`);
              continue;
            }

            hookPaths.add(hookPath);

            if (fs.existsSync(hookPath)) {
              try {
                const content = fs.readFileSync(hookPath, "utf-8");
                console.info(`✅ Successfully read hook file: ${hookPath}`);

                processedHooks.push({
                  path: hookPath,
                  type: "registry:hook",
                  content,
                });
              } catch (error) {
                console.error(
                  `❌ Error reading hook file ${hookPath}: ${error}`
                );
              }
            } else {
              console.error(`❌ Hook file not found: ${hookPath}`);
            }
          }
        }

        // Process the component files and filter out any hook files that might be duplicated
        const componentFiles: ComponentFile[] = [];

        for (const file of config.files) {
          // Skip hook files that are already in processedHooks
          if (file.type === "registry:hook" && hookPaths.has(file.path)) {
            console.info(
              `⚠️ Skipping duplicate hook file in files array: ${file.path}`
            );
            continue;
          }

          try {
            if (fs.existsSync(file.path)) {
              const content = fs.readFileSync(file.path, "utf-8");
              componentFiles.push({
                ...file,
                content,
              });
            } else {
              console.error(`❌ Component file not found: ${file.path}`);
              componentFiles.push({
                ...file,
                content: `/* File not found: ${file.path} */`,
              });
            }
          } catch (error) {
            console.error(
              `❌ Error reading component file ${file.path}: ${error}`
            );
            componentFiles.push({
              ...file,
              content: `/* Error reading file: ${error} */`,
            });
          }
        }

        // Combine component files and hook files
        const allFiles = [...componentFiles, ...processedHooks];

        console.info(
          `📦 Files for ${config.name}: ${allFiles
            .map((f) => f.path)
            .join(", ")}`
        );

        // Add target field to files based on their type
        const filesWithTarget = allFiles.map((file) => {
          const target = getTargetDirectory(file.type);
          return target ? { ...file, target } : file;
        });

        // Log hooks info for debugging
        const hookFilesInFinalArray = filesWithTarget.filter(
          (file) => file.type === "registry:hook"
        );
        console.info(
          `🪝 Found ${hookFilesInFinalArray.length} hook files in final array:`
        );
        hookFilesInFinalArray.forEach((hook) =>
          console.info(`  - ${hook.path}`)
        );

        // Process dependencies according to shadcn schema
        // Dependencies should be a simple array of npm packages
        let npmDependencies: string[] | undefined = undefined;
        let registryDeps: string[] | undefined = undefined;

        // Extract dependencies from our object structure or legacy arrays
        if (
          typeof config.dependencies === "object" &&
          !Array.isArray(config.dependencies)
        ) {
          // New structured format
          npmDependencies = config.dependencies.npm;

          // Process shad components to registryDependencies
          const shadDeps = config.dependencies.shad || [];

          // Process linked components to registryDependencies (as URLs)
          const linkedDeps = config.dependencies.linked
            ? processLinkedDependencies(config.dependencies.linked, baseUrl)
            : [];

          // Combine shad and linked into registryDependencies
          if (shadDeps.length > 0 || (linkedDeps && linkedDeps.length > 0)) {
            registryDeps = [...shadDeps, ...(linkedDeps || [])];
          }
        } else if (Array.isArray(config.dependencies)) {
          // Legacy format: dependencies as direct array of npm packages
          npmDependencies = config.dependencies;
        }

        // Process legacy shadcnDependencies and linkedDependencies if present
        if (!registryDeps) {
          const shadDeps = config.shadcnDependencies || [];
          const linkedDeps =
            processLinkedDependencies(config.linkedDependencies, baseUrl) || [];

          if (shadDeps.length > 0 || linkedDeps.length > 0) {
            registryDeps = [...shadDeps, ...linkedDeps];
          } else if (config.registryDependencies) {
            // Use legacy registryDependencies as fallback
            registryDeps = processRegistryDependencies(
              config.registryDependencies,
              ourComponents
            );
          }
        }

        // Create output JSON object following the shadcn schema
        const outputJson = {
          $schema: "https://ui.shadcn.com/schema/registry-item.json",
          name: config.name,
          type: config.type,
          title: config.title,
          description: config.description,
          ...(registryDeps && { registryDependencies: registryDeps }),
          ...(npmDependencies && { dependencies: npmDependencies }),
          files: filesWithTarget,
        };

        // Write the JSON file, overwriting any existing file
        const outputPath = `public/r/${config.name}.json`;
        fs.writeFileSync(
          outputPath,
          JSON.stringify(outputJson, null, 2),
          "utf-8"
        );

        console.info(`✅ Generated JSON for ${config.name}`);
      } catch (error) {
        console.error(`❌ Error generating JSON for ${config.name}: ${error}`);
      }
    }

    console.info(
      `✅ Individual component JSON files generated (or attempted).`
    );
  } catch (error) {
    console.error(`❌ Error in generateComponentFiles: ${error}`);
  }
}

// Function to generate registry.json
async function generateRegistry() {
  console.log("ℹ️ Generating registry.json...");
  try {
    // Only look for TypeScript config files
    const configFiles = await glob("registry/**/config.ts");
    const configs: ComponentConfig[] = [];
    const ourComponents = await getOurComponentNames();

    for (const configFile of configFiles) {
      try {
        const config = await loadConfig(configFile);
        if (!config) {
          console.error(`❌ Failed to load config from ${configFile}`);
          continue;
        }

        // Ensure config.files is an array before mapping
        if (!Array.isArray(config.files)) {
          console.error(`❌ Invalid 'files' array in ${configFile}`);
          config.files = []; // Treat as empty if invalid
        }

        // Process hooks array if present and add them to files
        const processedHookFiles: ComponentFile[] = [];
        if (
          config.hooks &&
          Array.isArray(config.hooks) &&
          config.hooks.length > 0
        ) {
          console.log(
            `ℹ️ Processing hooks for ${config.name}: ${config.hooks.join(", ")}`
          );

          // Add each hook as a file entry
          config.hooks.forEach((hookName) => {
            processedHookFiles.push({
              path: `registry/hooks/${hookName}.ts`,
              type: "registry:hook",
            });
          });
        }

        const componentDir = path.dirname(configFile);
        const processedComponentFiles: ComponentFile[] = config.files.map(
          (file) => {
            // Defensive check: ensure file.path is a string before calling startsWith
            const filePath =
              typeof file.path === "string" &&
              // If it already has registry/ prefix or it's a hook reference, keep it as is
              file.path.startsWith("registry/")
                ? file.path
                : path.join(
                    componentDir,
                    typeof file.path === "string" ? file.path : ""
                  ); // Handle non-string path safely

            if (typeof file.path !== "string") {
              console.error(
                `❌ Invalid file path encountered in ${configFile}:`,
                file
              );
            }

            return {
              ...file,
              path: filePath,
            };
          }
        );

        // Combine processed component files and hook files, removing duplicates based on path
        const combinedFiles = [
          ...processedComponentFiles,
          ...processedHookFiles,
        ];
        const uniqueFilesMap = new Map<string, ComponentFile>();
        combinedFiles.forEach((file) => {
          if (!uniqueFilesMap.has(file.path)) {
            uniqueFilesMap.set(file.path, file);
          } else {
            console.warn(
              `⚠️ Duplicate file path detected and ignored: ${file.path} in ${config.name}`
            );
          }
        });
        const allFilesForRegistry = Array.from(uniqueFilesMap.values());

        // Add target field to files based on their type
        const filesWithTarget = allFilesForRegistry.map((file) => {
          const target = getTargetDirectory(file.type);
          return target ? { ...file, target } : file;
        });

        // Process dependencies to match shadcn schema format
        // Dependencies should be a simple array of npm packages
        let npmDependencies: string[] | undefined = undefined;
        let registryDeps: string[] | undefined = undefined;

        // Extract dependencies from our object structure or legacy arrays
        if (
          typeof config.dependencies === "object" &&
          !Array.isArray(config.dependencies)
        ) {
          // New structured format
          npmDependencies = config.dependencies.npm;

          // Process shad components to registryDependencies
          const shadDeps = config.dependencies.shad || [];

          // Process linked components to registryDependencies (as URLs)
          const linkedDeps = config.dependencies.linked
            ? processLinkedDependencies(config.dependencies.linked)
            : [];

          // Combine shad and linked into registryDependencies
          if (shadDeps.length > 0 || (linkedDeps && linkedDeps.length > 0)) {
            registryDeps = [...shadDeps, ...(linkedDeps || [])];
          }
        } else if (Array.isArray(config.dependencies)) {
          // Legacy format: dependencies as direct array of npm packages
          npmDependencies = config.dependencies;
        }

        // Process legacy shadcnDependencies and linkedDependencies if present
        if (!registryDeps) {
          const shadDeps = config.shadcnDependencies || [];
          const linkedDeps =
            processLinkedDependencies(config.linkedDependencies) || [];

          if (shadDeps.length > 0 || linkedDeps.length > 0) {
            registryDeps = [...shadDeps, ...linkedDeps];
          } else if (config.registryDependencies) {
            // Use legacy registryDependencies as fallback
            registryDeps = processRegistryDependencies(
              config.registryDependencies,
              ourComponents
            );
          }
        }

        // Create a new config object that matches the shadcn schema format
        const schemaCompliantConfig = {
          name: config.name,
          type: config.type,
          title: config.title,
          description: config.description,
          dependencies: npmDependencies,
          registryDependencies: registryDeps,
          files: filesWithTarget,
        };

        configs.push(schemaCompliantConfig);
      } catch (error) {
        console.error(`❌ Error processing config file ${configFile}:`, error);
        continue;
      }
    }

    const registry: Registry = {
      $schema: "https://ui.shadcn.com/schema/registry.json",
      name: "kitze-ui",
      homepage: "https://ui.kitze.io",
      items: configs,
    };

    fs.writeFileSync(
      "registry.json",
      JSON.stringify(registry, null, 2),
      "utf-8"
    );

    await generateComponentFiles(configs);

    console.log("✅ registry.json generated.");
  } catch (error) {
    console.error("❌ Error generating registry.json:", error);
  }
}

// Function to generate component types
async function generateTypes() {
  console.log("ℹ️ Generating component types...");
  try {
    // Only look for TypeScript config files
    const configFiles = await glob("registry/**/config.ts");
    const components: ComponentConfig[] = [];

    for (const configFile of configFiles) {
      try {
        const config = await loadConfig(configFile);
        // Basic validation: check if essential properties exist
        if (config && config.name && config.title && config.description) {
          components.push(config);
        } else {
          console.error(
            `❌ Skipping invalid config for types generation: ${configFile}`
          );
        }
      } catch (error) {
        console.error(
          `❌ Error processing config file ${configFile} for types:`,
          error
        );
      }
    }

    // Get all hook files from registry/hooks directory
    const hookFiles = await glob("registry/hooks/*.ts");
    const hookNames = hookFiles.map((file) => {
      // Extract just the filename without extension
      const filename = path.basename(file, ".ts");
      return `"${filename}"`;
    });

    const componentNames = components.map((c) => `"${c.name}"`).join(" | ");
    const availableHooks =
      hookNames.length > 0 ? hookNames.join(" | ") : "string";

    const typeContent = `// This file is auto-generated. Do not edit manually.
export type ComponentName = ${componentNames || "never"}; // Handle empty case

export type AvailableHook = ${availableHooks}; // Auto-generated from registry/hooks

// Shadcn UI component types
export type ShadcnComponent = string; // List of available shadcn/ui components

export interface ComponentMeta {
  name: ComponentName;
  title: string;
  description: string;
}

export const componentMeta: Record<ComponentName, ComponentMeta> = {
${components
  .map(
    (c) => `  "${c.name}": {
    name: "${c.name}",
    title: "${c.title}",
    description: "${c.description}"
  }`
  )
  .join(",\n")}
} as const;
`;

    fs.writeFileSync("lib/component-types.ts", typeContent, "utf-8");

    console.log("✅ Component types generated.");
  } catch (error) {
    console.error("❌ Error generating component types:", error);
  }
}

// Main execution block
async function main() {
  console.log("🚀 Starting generation process...");
  await generateRegistry();
  await generateTypes();
  console.log("🏁 Generation process finished.");
}

main().catch((error) => {
  console.error("💥 Unhandled error during generation:", error);
  process.exit(1); // Exit with error code if something goes wrong
});
