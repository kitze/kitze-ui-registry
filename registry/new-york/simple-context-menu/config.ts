import { ComponentConfig } from "@/lib/component-config-types";

const config: ComponentConfig = {
  name: "simple-context-menu",
  type: "registry:component",
  title: "Simple Context Menu",
  description:
    "A simple context menu component that wraps content with right-click menu functionality",

  dependencies: {
    npm: ["use-long-press", "lucide-react"],
    shad: ["context-menu", "dropdown-menu", "tooltip"],
    hooks: ["useControlledOpen", "useLinkableComponent"],
    linked: ["bottom-drawer", "menu-context", "kitze-ui-context"],
  },

  files: [
    {
      path: "SimpleContextMenu.tsx",
      type: "registry:component",
    },
    {
      path: "ResponsiveContextMenu.tsx",
      type: "registry:component",
    },
  ],
};

export default config;
