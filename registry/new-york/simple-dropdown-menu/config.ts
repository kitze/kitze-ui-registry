import { ComponentConfig } from "@/lib/component-config-types";

const config: ComponentConfig = {
  name: "simple-dropdown-menu",
  type: "registry:component",
  title: "Simple Dropdown Menu",
  description:
    "A simplified dropdown menu component with click triggering and common components, including a responsive version for mobile",

  dependencies: {
    shad: ["dropdown-menu", "context-menu"],
    hooks: ["useControlledOpen", "useLinkableComponent"],
    linked: [
      "bottom-drawer",
      "kitze-ui-context",
      "menu-context",
      "ui-alert",
      "help-info-circle",
    ],
    npm: ["lucide-react"],
  },

  files: [
    {
      path: "SimpleDropdownMenu.tsx",
      type: "registry:component",
    },
    {
      path: "ResponsiveDropdownMenu.tsx",
      type: "registry:component",
    },
    {
      path: "CommonMenuItem.tsx",
      type: "registry:component",
    },
    {
      path: "CommonMenuItemEdit.tsx",
      type: "registry:component",
    },
    {
      path: "CommonMenuItemDelete.tsx",
      type: "registry:component",
    },
    {
      path: "CommonMenuLabel.tsx",
      type: "registry:component",
    },
    {
      path: "CommonMenuSeparator.tsx",
      type: "registry:component",
    },
    {
      path: "CommonMenuGroup.tsx",
      type: "registry:component",
    },
  ],
};

export default config;
