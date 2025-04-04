import { ComponentConfig } from "@/lib/component-config-types";

const config: ComponentConfig = {
  name: "bottom-drawer",
  type: "registry:component",
  title: "Bottom Drawer",
  description:
    "A mobile-friendly bottom drawer component built on top of Vaul, including a menu variant.",

  dependencies: {
    npm: ["vaul", "framer-motion"],
    linked: ["simple-dropdown-menu", "kitze-ui-context"],
    hooks: ["useControlledOpen"],
  },

  files: [
    {
      path: "BottomDrawer.tsx",
      type: "registry:component",
    },
    {
      path: "BottomDrawerMenu.tsx",
      type: "registry:component",
    },
    {
      path: "DrawerContext.tsx",
      type: "registry:component",
    },
    {
      path: "BottomDrawerMenuItem.tsx",
      type: "registry:component",
    },
    {
      path: "BottomDrawerMenuComponents.tsx",
      type: "registry:component",
    },
    {
      path: "preview.tsx",
      type: "registry:component",
    },
    {
      path: "menu-preview.tsx",
      type: "registry:component",
    },
  ],
};

export default config;
