import { ComponentConfig } from "@/lib/component-config-types";

const config: ComponentConfig = {
  name: "kitze-ui-context",
  type: "registry:component",
  title: "Kitze UI Context",
  description:
    "Provides UI context like mobile detection for Kitze UI components.",

  dependencies: {},

  files: [
    {
      path: "KitzeUIContext.tsx",
      type: "registry:component",
    },
  ],
};

export default config;
