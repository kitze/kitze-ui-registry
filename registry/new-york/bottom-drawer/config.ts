import { ComponentConfig } from "@/lib/component-config-types";

const config: ComponentConfig = {
  name: "bottom-drawer",
  type: "registry:component",
  title: "Bottom Drawer",
  description:
    "A mobile-friendly bottom drawer component built on top of Vaul, including a menu variant.",

  dependencies: {
    npm: ["vaul", "framer-motion", "lucide-react"],
    linked: ["help-info-circle", "menu-context"],
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
  ],
};

export default config;
