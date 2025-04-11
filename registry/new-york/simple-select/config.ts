import { ComponentConfig } from "@/lib/component-config-types";

const config: ComponentConfig = {
  name: "simple-select",
  type: "registry:component",
  title: "Simple Select",
  description:
    "A simplified select component that accepts an array of options with value, label, and search functionality",

  dependencies: {
    shad: ["button", "command", "popover"],
    npm: ["lucide-react"],
  },

  files: [
    {
      path: "SimpleSelect.tsx",
      type: "registry:component",
    },
    {
      path: "SimpleSelectBottomDrawerMenu.tsx",
      type: "registry:component",
    },
  ],
};

export default config;
