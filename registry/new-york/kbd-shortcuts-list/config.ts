import { ComponentConfig } from "@/lib/component-config-types";

const config: ComponentConfig = {
  name: "kbd-shortcuts-list",
  type: "registry:component",
  title: "Keyboard Shortcuts List",
  description:
    "A component for displaying a list of keyboard shortcuts with labels",

  dependencies: {
    npm: [],
    linked: ["kbd-shortcuts", "kbd"],
  },

  files: [
    {
      path: "KbdShortcutsList.tsx",
      type: "registry:component",
    },
  ],
};

export default config;
