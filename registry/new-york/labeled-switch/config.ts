import { ComponentConfig } from "@/lib/component-config-types";

const config: ComponentConfig = {
  name: "labeled-switch",
  type: "registry:component",
  title: "Labeled Switch",
  description: "A switch component with a label.",

  dependencies: {
    npm: [],
  },

  files: [
    {
      path: "LabeledSwitch.tsx",
      type: "registry:component",
    },
  ],
};

export default config;
