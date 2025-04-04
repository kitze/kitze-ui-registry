import { ComponentConfig } from "@/lib/component-config-types";

const config: ComponentConfig = {
  name: "simple-tooltip",
  type: "registry:component",
  title: "Simple Tooltip",
  description:
    "A simplified tooltip component built on top of Radix UI tooltip",

  dependencies: {
    shad: ["tooltip"],
  },

  files: [
    {
      path: "SimpleTooltip.tsx",
      type: "registry:component",
    },
  ],
};

export default config;
