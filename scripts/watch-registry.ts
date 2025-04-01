import chokidar from "chokidar";
import * as fs from "fs";
import * as path from "path";
import { glob } from "glob";
import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

// Types for our component configs
interface ComponentConfig {
  name: string;
  type: string;
  title: string;
  description: string;
  dependencies?: string[];
  registryDependencies?: string[];
  files: {
    path: string;
    type: string;
  }[];
}

interface Registry {
  $schema: string;
  name: string;
  homepage: string;
  items: ComponentConfig[];
}

// Function to generate registry.json
async function generateRegistry() {
  try {
    const configFiles = await glob("registry/**/config.json");
    const configs: ComponentConfig[] = [];

    for (const configFile of configFiles) {
      const configContent = fs.readFileSync(configFile, "utf-8");
      const config = JSON.parse(configContent);

      // Update file paths to be relative to the component's directory
      const componentDir = path.dirname(configFile);
      config.files = config.files.map(
        (file: { path: string; type: string }) => ({
          ...file,
          path: path.join(componentDir, file.path),
        })
      );

      configs.push(config);
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

    console.log("✅ registry.json generated");
  } catch (error) {
    console.error("❌ Error generating registry.json:", error);
  }
}

// Function to generate component types
async function generateTypes() {
  try {
    const configFiles = await glob("registry/**/config.json");
    const components: ComponentConfig[] = [];

    for (const configFile of configFiles) {
      const configContent = fs.readFileSync(configFile, "utf-8");
      const config = JSON.parse(configContent);
      components.push(config);
    }

    const componentNames = components.map((c) => `"${c.name}"`).join(" | ");

    const typeContent = `// This file is auto-generated. Do not edit manually.
export type ComponentName = ${componentNames};

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

    console.log("✅ Component types generated");
  } catch (error) {
    console.error("❌ Error generating component types:", error);
  }
}

// Function to run both generators
async function regenerateFiles() {
  console.log("🔄 Regenerating files...");
  await generateRegistry();
  await generateTypes();
  console.log("✨ All files regenerated");
}

// Initialize watcher
const watcher = chokidar.watch("registry", {
  ignored: /(^|[\/\\])\../, // ignore dotfiles
  persistent: true,
  ignoreInitial: false,
});

// Add event listeners
watcher
  .on("add", (path) => {
    if (path.includes("config.json")) {
      console.log(`File ${path} has been added`);
      regenerateFiles();
    }
  })
  .on("change", (path) => {
    if (path.includes("config.json")) {
      console.log(`File ${path} has been changed`);
      regenerateFiles();
    }
  })
  .on("unlink", (path) => {
    if (path.includes("config.json")) {
      console.log(`File ${path} has been removed`);
      regenerateFiles();
    }
  });

console.log("👀 Watching registry folder for changes...");
