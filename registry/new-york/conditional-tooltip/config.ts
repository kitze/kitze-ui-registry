import { ComponentConfig } from "@/lib/component-config-types";

const config: ComponentConfig = {
  name: "conditional-tooltip",
  type: "registry:component",
  title: "Conditional Tooltip",
  description:
    "A tooltip component that conditionally renders based on a condition",

  dependencies: {
    linked: ["simple-tooltip"],
  },

  files: [
    {
      path: "ConditionalTooltip.tsx",
      type: "registry:component",
    },
  ],
};

export default config;
