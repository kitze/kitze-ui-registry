import { ComponentConfig } from "@/lib/component-config-types";

const config: ComponentConfig = {
  name: "fill-height-spinner",
  type: "registry:component",
  title: "Fill Height Spinner",
  description:
    "A spinner component that fills and centers in its container height",

  dependencies: {
    linked: ["spinner"],
  },

  files: [
    {
      path: "FillHeightSpinner.tsx",
      type: "registry:component",
    },
  ],
};

export default config;
