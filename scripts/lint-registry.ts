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

// Set a timeout to ensure the script doesn't hang
const TIMEOUT_MS = 30000; // 30 seconds
const timeout = setTimeout(() => {
  console.error("❌ Validation timed out after 30 seconds");
  process.exit(1);
}, TIMEOUT_MS);

// Ensure timeout is cleared if process exits normally
process.on("exit", () => {
  clearTimeout(timeout);
});

// Handle file path from command line if provided
const customFilePath = process.argv[2];

async function validateRegistry() {
  try {
    console.log("Starting registry validation...");

    // Get registry.json or use custom path if provided
    const registryPath = customFilePath || path.resolve("registry.json");
    if (!fs.existsSync(registryPath)) {
      console.error(`❌ File not found: ${registryPath}`);
      process.exit(1);
    }

    const registryJson = JSON.parse(fs.readFileSync(registryPath, "utf8"));

    console.log("Validating overall registry structure...");

    // Validate overall registry structure
    const registryResult = Registry.safeParse(registryJson);

    if (!registryResult.success) {
      console.error("❌ Registry structure validation failed:");
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

        // For missing required fields, create a simple error message
        const errors = formatZodErrors(itemResult.error);
        errors.forEach((err) => {
          itemErrors.push(`Item ${i} (${item.name || "unnamed"}): ${err}`);
        });

        // Early exit on first error if running in pre-commit hook
        if (process.env.FORCE_EXIT_ON_ERROR) {
          console.error(`❌ Invalid item: ${item.name || "unnamed"}`);
          console.error(itemErrors[0]);
          process.exit(1);
        }
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

    // Skip component file validation if we're just validating a specific file
    if (!customFilePath) {
      // Validate individual component JSON files in public/r directory
      console.log(
        "\nValidating individual component JSON files in public/r/..."
      );
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
    }

    console.log("\n✅ Registry validation complete");
    // Clear the timeout explicitly
    clearTimeout(timeout);
  } catch (error) {
    console.error("❌ Error validating registry:", error);
    // Clear the timeout on error too
    clearTimeout(timeout);
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
