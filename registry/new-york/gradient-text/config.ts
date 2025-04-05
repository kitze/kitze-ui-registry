import { ComponentConfig } from "@/lib/component-config-types";

const config: ComponentConfig = {
  name: "gradient-text",
  type: "registry:component",
  title: "Gradient Text",
  description: "A text component with animated gradient effects",

  dependencies: {
    npm: [],
  },

  files: [
    {
      path: "GradientText.tsx",
      type: "registry:component",
    },
  ],
};

export default config;
