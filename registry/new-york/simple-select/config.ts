import { ComponentConfig } from "@/lib/component-config-types";

const config: ComponentConfig = {
  name: "simple-select",
  type: "registry:component",
  title: "Simple Select",
  description:
    "A simplified select component that accepts an array of options with value, label, emoji, and icon",

  dependencies: {
    shad: ["select"],
    npm: ["lucide-react"],
  },

  files: [
    {
      path: "SimpleSelect.tsx",
      type: "registry:component",
    },
  ],
};

export default config;
