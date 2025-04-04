import { ComponentConfig } from "@/lib/component-config-types";

const config: ComponentConfig = {
  name: "responsive-popover",
  title: "Responsive Popover",
  description:
    "A responsive popover component that displays as a popover on desktop and a bottom drawer on mobile.",
  type: "registry:component",

  dependencies: {
    hooks: ["useControlledOpen"],
    linked: ["simple-popover", "bottom-drawer", "kitze-ui-context"],
  },

  files: [
    {
      path: "index.tsx",
      type: "registry:component",
    },
    {
      path: "preview.tsx",
      type: "registry:component",
    },
  ],
};

export default config;
