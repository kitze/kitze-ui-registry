import fs from "fs";
import path from "path";
import { Registry, Registry_item } from "../schemas";
import { z } from "zod";
import { glob } from "glob";

/**
 * Registry validator using Zod schemas
 *
 * This script validates:
 * 1. The registry.json file against the registry schema
 * 2. Each item in registry.json against the registry-item schema
 * 3. Each individual component JSON file in public/r/ against the registry-item schema
 */

async function validateRegistry() {
  try {
    console.log("Starting registry validation...");

    // Get registry.json
    const registryPath = path.resolve("registry.json");
    if (!fs.existsSync(registryPath)) {
      console.error("❌ registry.json not found");
      process.exit(1);
    }

    const registryJson = JSON.parse(fs.readFileSync(registryPath, "utf8"));

    console.log("Validating overall registry structure...");

    // Validate overall registry structure
    const registryResult = Registry.safeParse(registryJson);

    if (!registryResult.success) {
      console.error("❌ registry.json structure validation failed:");
      // Format and display errors
      const formattedErrors = formatZodErrors(registryResult.error);
      formattedErrors.forEach((err) => console.error(`  - ${err}`));
      process.exit(1);
    }

    console.log("✅ Overall registry structure is valid");

    // Validate each registry item
    console.log(`Validating ${registryJson.items.length} registry items...`);
    let validItems = 0;
    let invalidItems = 0;
    const itemErrors: string[] = [];

    for (let i = 0; i < registryJson.items.length; i++) {
      const item = registryJson.items[i];
      const itemResult = Registry_item.safeParse(item);

      if (itemResult.success) {
        validItems++;
      } else {
        invalidItems++;

        // Format and add errors with item context
        const errors = formatZodErrors(itemResult.error);
        errors.forEach((err) => {
          itemErrors.push(`Item ${i} (${item.name}): ${err}`);
        });
      }
    }

    // Report item validation results
    if (invalidItems === 0) {
      console.log(
        `✅ All ${validItems} items in registry.json validated successfully`
      );
    } else {
      console.error(
        `❌ Found ${invalidItems} invalid items in registry.json (${validItems} valid)`
      );
      itemErrors.forEach((err) => console.error(`  - ${err}`));
      process.exit(1);
    }

    // Validate individual component JSON files in public/r directory
    console.log("\nValidating individual component JSON files in public/r/...");
    const componentFiles = await glob("public/r/*.json");
    console.log(`Found ${componentFiles.length} component JSON files`);

    let validComponentFiles = 0;
    let invalidComponentFiles = 0;
    const componentFileErrors: string[] = [];

    for (const filePath of componentFiles) {
      const fileName = path.basename(filePath);
      try {
        const fileContent = JSON.parse(fs.readFileSync(filePath, "utf8"));
        const fileResult = Registry_item.safeParse(fileContent);

        if (fileResult.success) {
          validComponentFiles++;
        } else {
          invalidComponentFiles++;

          // Format and add errors with file context
          const errors = formatZodErrors(fileResult.error);
          errors.forEach((err) => {
            componentFileErrors.push(`File ${fileName}: ${err}`);
          });
        }
      } catch (error) {
        invalidComponentFiles++;
        componentFileErrors.push(
          `File ${fileName}: Invalid JSON - ${
            error instanceof Error ? error.message : String(error)
          }`
        );
      }
    }

    // Report component file validation results
    if (invalidComponentFiles === 0) {
      console.log(
        `✅ All ${validComponentFiles} component files validated successfully`
      );
    } else {
      console.error(
        `❌ Found ${invalidComponentFiles} invalid component files (${validComponentFiles} valid)`
      );
      componentFileErrors.forEach((err) => console.error(`  - ${err}`));
      process.exit(1);
    }

    console.log("\n✅ Registry validation complete");
  } catch (error) {
    console.error("❌ Error validating registry:", error);
    process.exit(1);
  }
}

/**
 * Format Zod validation errors into readable strings
 */
function formatZodErrors(error: z.ZodError): string[] {
  return error.errors.map((err) => {
    const path = err.path.length > 0 ? err.path.join(".") : "root";
    return `At ${path}: ${err.message}`;
  });
}

// Run the validation
validateRegistry();
