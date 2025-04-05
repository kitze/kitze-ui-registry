import { ComponentConfig } from "@/lib/component-config-types";

const config: ComponentConfig = {
  name: "kbd-shortcuts",
  type: "registry:component",
  title: "Keyboard Shortcuts",
  description:
    "A component for displaying keyboard shortcuts with customizable separators",

  dependencies: {
    npm: [],
    linked: ["kbd"],
  },

  files: [
    {
      path: "KbdShortcuts.tsx",
      type: "registry:component",
    },
  ],
};

export default config;
