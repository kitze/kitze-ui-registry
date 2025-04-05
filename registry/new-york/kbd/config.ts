import { ComponentConfig } from "@/lib/component-config-types";

const config: ComponentConfig = {
  name: "kbd",
  type: "registry:component",
  title: "Keyboard Shortcut",
  description:
    "A keyboard shortcut display component for showing key combinations",

  dependencies: {
    npm: [],
  },

  files: [
    {
      path: "Kbd.tsx",
      type: "registry:component",
    },
  ],
};

export default config;
