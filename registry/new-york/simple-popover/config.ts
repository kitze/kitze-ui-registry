import { ComponentConfig } from "@/lib/component-config-types";

const config: ComponentConfig = {
  name: "simple-popover",
  title: "Simple Popover",
  description:
    "A simple popover component that displays content when triggered.",
  type: "registry:component",

  dependencies: {
    shad: ["popover"],
    linked: ["kitze-ui-context", "bottom-drawer"],
    hooks: ["useControlledOpen"],
  },

  files: [
    {
      path: "index.tsx",
      type: "registry:component",
    },
  ],
};

export default config;
