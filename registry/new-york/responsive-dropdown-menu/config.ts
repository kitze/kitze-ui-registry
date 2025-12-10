import { ComponentConfig } from "@/lib/component-config-types";

const config: ComponentConfig = {
  name: "responsive-dropdown-menu",
  title: "Responsive Dropdown Menu",
  description:
    "A responsive dropdown menu component that adapts to mobile devices with bottom drawer fallback",
  type: "registry:component",

  // Dependencies are handled by linked components
  dependencies: {
    npm: [],
    shad: [],
    hooks: [],
    linked: ["simple-dropdown-menu", "bottom-drawer", "kitze-ui-context"],
  },
  files: [
    {
      path: "ResponsiveDropdownMenu.tsx",
      type: "registry:component",
    },
  ],
};

export default config;
