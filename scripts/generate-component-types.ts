import * as fs from "fs";
import * as path from "path";
import { glob } from "glob";

interface ComponentConfig {
  name: string;
  type: string;
  title: string;
  description: string;
}

async function generateTypes() {
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

  console.log("✅ Component types generated successfully");
}

generateTypes().catch(console.error);
