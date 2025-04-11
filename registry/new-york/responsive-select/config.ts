import { ComponentConfig } from "@/lib/component-config-types";

const config: ComponentConfig = {
  name: "responsive-select",
  type: "registry:component",
  title: "Responsive Select",
  description:
    "A responsive select component that changes its appearance on mobile devices and supports search functionality.",

  registryDependencies: [
    "bottom-drawer",
    "bottom-drawer-menu",
    "bottom-drawer-menu-item",
    "simple-select",
    "search-bar",
    "kitze-ui-context",
  ],

  dependencies: {
    shad: ["button", "command", "popover"],
    npm: ["lucide-react"],
  },

  files: [
    {
      path: "ResponsiveSelect.tsx",
      type: "registry:component",
    },
    {
      path: "ResponsiveSelectBottomDrawerMenu.tsx",
      type: "registry:component",
    },
  ],
};

export default config;
