import { ComponentConfig } from "@/lib/component-config-types";

const config: ComponentConfig = {
  name: "simple-accordion",
  type: "registry:component",
  title: "Simple Accordion",
  description: "A simple accordion component",

  dependencies: {
    shad: ["accordion"],
  },

  files: [
    {
      path: "SimpleAccordion.tsx",
      type: "registry:component",
    },
  ],
};

export default config;
