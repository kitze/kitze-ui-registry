import { ComponentConfig } from "@/lib/component-config-types";

const config: ComponentConfig = {
  name: "custom-badge",
  title: "Custom Badge",
  description: "A customizable badge component with color and style options.",
  type: "registry:component",
  dependencies: {
    npm: ["tailwind-variants"],
  },
  files: [
    {
      path: "registry/new-york/custom-badge/CustomBadge.tsx",
      type: "registry:component",
    },
  ],
};

export default config;
