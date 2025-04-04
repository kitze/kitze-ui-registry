import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import * as fs from "fs";
import type {
  ComponentConfig,
  ComponentFile,
} from "../lib/component-config-types";

// Mock the fs module
vi.mock("fs", () => ({
  readFileSync: vi.fn(),
  writeFileSync: vi.fn(),
  existsSync: vi.fn().mockImplementation((path) => {
    // Mock all files as existing by default
    return true;
  }),
  mkdirSync: vi.fn(),
}));

// Mock the glob module
vi.mock("glob", () => ({
  glob: vi.fn().mockResolvedValue([]),
}));

// Import the function to be tested
import { generateComponentFiles } from "../scripts/generate-once";

// Mock getOurComponentNames directly
vi.mock("../scripts/generate-once", async () => {
  const originalModule = await vi.importActual("../scripts/generate-once");
  return {
    ...originalModule,
    getOurComponentNames: vi
      .fn()
      .mockResolvedValue(["test-component", "simple-dialog"]),
  };
});

describe("Config to JSON conversion", () => {
  beforeEach(() => {
    vi.clearAllMocks();

    // Mock file content responses with proper type handling
    vi.mocked(fs.readFileSync).mockImplementation(
      (path: any, options?: any) => {
        const filePath = String(path);
        if (filePath === "registry/new-york/test-component/TestComponent.tsx") {
          return "export const TestComponent = () => <div>Test Component</div>";
        }
        if (filePath === "registry/hooks/useTestHook.ts") {
          return 'export const useTestHook = () => ({ data: "test" });';
        }
        if (filePath === "registry/hooks/useControlledOpen.ts") {
          return "export const useControlledOpen = () => ({ isOpen: false, setIsOpen: () => {} });";
        }
        // Return existing JSON if we're checking for an existing file
        if (filePath.endsWith(".json")) {
          return JSON.stringify({
            name: "test-component",
            type: "registry:component",
            files: [],
          });
        }
        return "// Default mock content";
      }
    );
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it("should properly handle the new structured dependencies format", async () => {
    // Create a test component config with the new structured dependencies
    const testConfig: ComponentConfig = {
      name: "test-component",
      title: "Test Component",
      description: "A test component with structured dependencies",
      type: "registry:component",
      dependencies: {
        npm: ["next", "react", "@radix-ui/react-dialog"],
        shad: ["button", "dialog"],
        linked: ["simple-dialog"],
        hooks: ["useControlledOpen"],
      },
      files: [
        {
          path: "registry/new-york/test-component/TestComponent.tsx",
          type: "registry:component",
        },
      ],
    };

    // Call the function with our test config
    await generateComponentFiles([testConfig]);

    // Get the call arguments
    const writeCallArgs = vi
      .mocked(fs.writeFileSync)
      .mock.calls.find((call) =>
        String(call[0]).includes("test-component.json")
      );

    expect(writeCallArgs).toBeDefined();

    if (writeCallArgs) {
      // Parse the JSON string to check its content
      const jsonContent = JSON.parse(writeCallArgs[1] as string);

      // Verify NPM dependencies are properly included
      expect(jsonContent.dependencies).toEqual([
        "next",
        "react",
        "@radix-ui/react-dialog",
      ]);

      // Verify registryDependencies combines shadcn and linked
      expect(jsonContent.registryDependencies).toBeDefined();
      expect(jsonContent.registryDependencies).toContainEqual("button");
      expect(jsonContent.registryDependencies).toContainEqual("dialog");
      expect(
        jsonContent.registryDependencies.some((dep: string) =>
          dep.includes("/r/simple-dialog.json")
        )
      ).toBe(true);

      // Verify hooks are properly included in the files array
      const hookFiles = jsonContent.files.filter(
        (file: ComponentFile) => file.type === "registry:hook"
      );

      expect(hookFiles).toHaveLength(1);
      expect(hookFiles[0].path).toBe("registry/hooks/useControlledOpen.ts");
    }
  });

  it("should maintain backward compatibility with legacy format", async () => {
    // Create a test component config with legacy format
    const testConfig: ComponentConfig = {
      name: "test-legacy-component",
      title: "Test Legacy Component",
      description: "A test component with legacy dependency format",
      type: "registry:component",
      shadcnDependencies: ["button", "dialog"],
      linkedDependencies: ["simple-dialog"],
      dependencies: ["next", "react", "@radix-ui/react-dialog"],
      files: [
        {
          path: "registry/new-york/test-component/TestComponent.tsx",
          type: "registry:component",
        },
      ],
    };

    // Force the existsSync mock to return true for useTestHook.ts
    vi.mocked(fs.existsSync).mockImplementation((path) => {
      const filePath = String(path);
      return (
        filePath.includes("TestComponent.tsx") ||
        filePath.includes("useTestHook.ts") ||
        filePath.includes("public/r") ||
        filePath.includes("registry/hooks/useTestHook.ts")
      );
    });

    // Call the function with our test config
    await generateComponentFiles([testConfig]);

    // Get the call arguments
    const writeCallArgs = vi
      .mocked(fs.writeFileSync)
      .mock.calls.find((call) =>
        String(call[0]).includes("test-legacy-component.json")
      );

    expect(writeCallArgs).toBeDefined();

    if (writeCallArgs) {
      // Parse the JSON string to check its content
      const jsonContent = JSON.parse(writeCallArgs[1] as string);

      // Verify that the legacy dependencies are properly processed
      expect(jsonContent.dependencies).toEqual([
        "next",
        "react",
        "@radix-ui/react-dialog",
      ]);

      expect(jsonContent.registryDependencies).toBeDefined();
      expect(jsonContent.registryDependencies).toContainEqual("button");
      expect(jsonContent.registryDependencies).toContainEqual("dialog");
      expect(
        jsonContent.registryDependencies.some((dep: string) =>
          dep.includes("/r/simple-dialog.json")
        )
      ).toBe(true);

      // Verify hooks are properly included
      const hookFiles = jsonContent.files.filter(
        (file: ComponentFile) => file.type === "registry:hook"
      );

      expect(hookFiles).toHaveLength(1);
      expect(hookFiles[0].path).toBe("registry/hooks/useTestHook.ts");
    }
  });

  it("should prevent hook duplication when hook is included twice", async () => {
    // Create a test config where the hook is included in both hooks array and files array
    const testConfig: ComponentConfig = {
      name: "test-component-duplicated-hook",
      title: "Test Component with Duplicated Hook",
      description: "A test component with duplicated hook references",
      type: "registry:component",
      hooks: ["useControlledOpen"],
      files: [
        {
          path: "registry/new-york/test-component/TestComponent.tsx",
          type: "registry:component",
        },
        {
          path: "registry/hooks/useTestHook.ts",
          type: "registry:hook",
        },
      ],
    };

    // Ensure our mocks always return content for these files
    vi.mocked(fs.existsSync).mockImplementation((path) => {
      const filePath = String(path);
      return (
        filePath.includes("TestComponent.tsx") ||
        filePath.includes("useTestHook.ts") ||
        filePath.includes("public/r")
      );
    });

    // Call the function with our test config
    await generateComponentFiles([testConfig]);

    // Get the call arguments for the duplicated hook test
    const writeCallArgs = vi
      .mocked(fs.writeFileSync)
      .mock.calls.find((call) =>
        String(call[0]).includes("test-component-duplicated-hook.json")
      );

    expect(writeCallArgs).toBeDefined();

    if (writeCallArgs) {
      const jsonContent = JSON.parse(writeCallArgs[1] as string);

      // Verify that hook files appear only once in the files array
      const hookFiles = jsonContent.files.filter(
        (file: ComponentFile) => file.type === "registry:hook"
      );

      // There should only be one hook file in the output (deduplication worked)
      expect(hookFiles).toHaveLength(1);
      expect(hookFiles[0].path).toBe("registry/hooks/useTestHook.ts");
    }
  });
});
