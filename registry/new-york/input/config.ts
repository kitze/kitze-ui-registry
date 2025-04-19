import { ComponentConfig } from "@/lib/component-config-types";

const config: ComponentConfig = {
  name: "input",
  type: "registry:component",
  title: "Input",
  description:
    "A customizable input component with support for left/right icons, loading state, and custom styling",

  dependencies: {
    linked: ["spinner"],
  },

  files: [
    {
      path: "Input.tsx",
      type: "registry:component",
    },
  ],
};

export default config;
