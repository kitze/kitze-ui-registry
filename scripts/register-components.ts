import * as fs from "fs";
import * as path from "path";
import { glob } from "glob";

interface ComponentConfig {
  name: string;
  title: string;
  description: string;
  type: string;
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

async function findComponentConfigs(): Promise<ComponentConfig[]> {
  const configFiles = await glob("registry/**/config.json");
  const configs: ComponentConfig[] = [];

  for (const configFile of configFiles) {
    const configContent = fs.readFileSync(configFile, "utf-8");
    const config = JSON.parse(configContent);

    // Update file paths to be relative to the component's directory
    const componentDir = path.dirname(configFile);
    config.files = config.files.map((file: { path: string; type: string }) => ({
      ...file,
      path: path.join(componentDir, file.path),
    }));

    configs.push(config);
  }

  return configs;
}

async function generateRegistry() {
  const configs = await findComponentConfigs();

  const registry: Registry = {
    $schema: "https://ui.shadcn.com/schema/registry.json",
    name: "kitze-ui",
    homepage: "https://ui.kitze.io",
    items: configs,
  };

  fs.writeFileSync("registry.json", JSON.stringify(registry, null, 2), "utf-8");

  console.log("✅ registry.json generated successfully");
}

generateRegistry().catch(console.error);
