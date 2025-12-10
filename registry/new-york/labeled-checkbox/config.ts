import { ComponentConfig } from "@/lib/component-config-types";

const config: ComponentConfig = {
  name: "labeled-checkbox",
  type: "registry:component",
  title: "Labeled Checkbox",
  description: "A checkbox component with a label.",

  dependencies: {
    npm: [],
  },

  files: [
    {
      path: "LabeledCheckbox.tsx",
      type: "registry:component",
    },
  ],
};

export default config;
