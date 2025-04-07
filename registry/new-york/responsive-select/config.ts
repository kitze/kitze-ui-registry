import { ComponentConfig } from "@/lib/component-config-types";

const config: ComponentConfig = {
  name: "responsive-select",
  type: "registry:component",
  title: "Responsive Select",
  description:
    "A responsive select component that changes its appearance on mobile devices based on the specified mode.",

  dependencies: {
    linked: ["simple-select", "bottom-drawer", "kitze-ui-context"],
  },

  files: [
    {
      path: "ResponsiveSelect.tsx",
      type: "registry:component",
    },
  ],
};

export default config;
