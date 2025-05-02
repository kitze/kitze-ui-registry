import { ComponentConfig } from "@/lib/component-config-types";

const config: ComponentConfig = {
  name: "responsive-select-bottom-drawer-menu",
  title: "Responsive Select Bottom Drawer Menu",
  description:
    "A responsive select menu displayed in a bottom drawer, with search functionality.",
  type: "registry:component",
  dependencies: {
    npm: [], // No direct external npm dependencies identified
  },
  files: [
    {
      path: "registry/new-york/responsive-select-bottom-drawer-menu/ResponsiveSelectBottomDrawerMenu.tsx",
      type: "registry:component",
    },
  ],
};

export default config;
