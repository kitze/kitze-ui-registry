import fs from "fs";
import path from "path";
import fetch from "node-fetch";
import compile from "json-schema-to-zod";

/**
 * This script fetches the JSON schemas from shadcn's website and
 * converts them to Zod schemas, saving them to the schemas directory.
 *
 * Run this script to update the schemas when needed.
 */

const SCHEMAS_DIR = path.resolve("schemas");

// Ensure schemas directory exists
if (!fs.existsSync(SCHEMAS_DIR)) {
  fs.mkdirSync(SCHEMAS_DIR, { recursive: true });
}

async function fetchSchema(url: string): Promise<any> {
  console.log(`Fetching schema from ${url}...`);
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch schema: ${response.statusText}`);
  }
  return response.json();
}

async function generateZodSchema(schemaName: string, url: string) {
  try {
    // Fetch the JSON schema
    const schema = await fetchSchema(url);

    // Save the original JSON schema for reference
    const jsonPath = path.join(SCHEMAS_DIR, `${schemaName}.json`);
    fs.writeFileSync(jsonPath, JSON.stringify(schema, null, 2));
    console.log(`✅ Saved JSON schema to ${jsonPath}`);

    // Generate the Zod schema
    const zodSchema = compile(schema, {
      module: "esm",
      name: schemaName.replace(/-/g, "_").replace(/^./, (c) => c.toUpperCase()),
    });

    // Save the Zod schema
    const zodPath = path.join(SCHEMAS_DIR, `${schemaName}.zod.ts`);
    fs.writeFileSync(zodPath, zodSchema);
    console.log(`✅ Generated Zod schema at ${zodPath}`);
  } catch (error) {
    console.error(`❌ Error generating schema for ${schemaName}:`, error);
  }
}

async function main() {
  console.log("Generating Zod schemas from shadcn JSON schemas...");

  // Generate registry schema
  await generateZodSchema(
    "registry",
    "https://ui.shadcn.com/schema/registry.json"
  );

  // Generate registry-item schema
  await generateZodSchema(
    "registry-item",
    "https://ui.shadcn.com/schema/registry-item.json"
  );

  // Generate index file to re-export all schemas
  const indexPath = path.join(SCHEMAS_DIR, "index.ts");
  fs.writeFileSync(
    indexPath,
    `// Auto-generated index file for schemas
export * from './registry.zod';
export * from './registry-item.zod';
`
  );

  console.log(`✅ Generated index file at ${indexPath}`);
  console.log("✅ Done generating schemas");
}

main().catch((error) => {
  console.error("❌ Error generating schemas:", error);
  process.exit(1);
});
