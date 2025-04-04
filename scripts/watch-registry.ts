import * as chokidar from "chokidar";
import { exec } from "child_process";
import * as path from "path";

console.log("🔍 Watching registry folder for changes...");

// Create a watcher for the registry folder
const watcher = chokidar.watch("registry", {
  ignored: /(^|[\/\\])\../, // ignore dotfiles
  persistent: true,
  ignoreInitial: true, // don't trigger events when first starting up
});

// Define a flag to prevent multiple simultaneous executions
let isGenerating = false;

// Debounce function to prevent multiple rapid executions
let debounceTimer: NodeJS.Timeout | null = null;

// Function to run the generate script
const runGenerate = () => {
  if (isGenerating || debounceTimer) return;

  // Set a debounce timer to wait for more changes
  debounceTimer = setTimeout(() => {
    debounceTimer = null;

    if (isGenerating) return;
    isGenerating = true;

    console.log("🚀 Change detected, running generate script...");

    exec("tsx scripts/generate-once.ts", (error, stdout, stderr) => {
      isGenerating = false;

      if (error) {
        console.error(`❌ Error executing generate script: ${error.message}`);
        return;
      }

      if (stderr) {
        console.error(`⚠️ Generate script warnings: ${stderr}`);
      }

      console.log(stdout);
      console.log(
        "✅ Generate script completed, continuing to watch for changes..."
      );
    });
  }, 500); // Wait 500ms to debounce multiple rapid changes
};

// Clean shutdown function
const shutdown = async () => {
  console.log("\n🛑 Stopping registry watcher...");

  // Clear any pending debounce timer
  if (debounceTimer) {
    clearTimeout(debounceTimer);
    debounceTimer = null;
  }

  // Close the watcher
  await watcher.close();

  console.log("👋 Registry watcher shutdown complete. Goodbye!");
  process.exit(0);
};

// Handle graceful shutdown on SIGINT (Ctrl+C)
process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

// Watch for file changes
watcher
  .on("add", (filePath) => {
    console.log(`➕ File added: ${filePath}`);
    runGenerate();
  })
  .on("change", (filePath) => {
    console.log(`🔄 File changed: ${filePath}`);
    runGenerate();
  })
  .on("unlink", (filePath) => {
    console.log(`➖ File removed: ${filePath}`);
    runGenerate();
  })
  .on("error", (error) => {
    console.error(`❌ Watcher error: ${error}`);
  });

console.log(
  "👀 Watching for changes in registry folder (press Ctrl+C to stop)"
);
