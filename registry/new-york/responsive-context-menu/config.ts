import { ComponentConfig } from "@/lib/component-config-types";

const config: ComponentConfig = {
  name: "responsive-context-menu",
  title: "Responsive Context Menu",
  description:
    "A responsive context menu component that adapts to mobile devices with long press and bottom drawer",
  type: "registry:component",

  // Dependencies are handled by linked components plus use-long-press for mobile
  dependencies: {
    npm: ["use-long-press"],
    shad: [],
    hooks: ["useControlledOpen"],
    linked: ["simple-context-menu", "bottom-drawer", "kitze-ui-context"],
  },
  files: [
    {
      path: "ResponsiveContextMenu.tsx",
      type: "registry:component",
    },
  ],
};

export default config;
