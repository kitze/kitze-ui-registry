import { ComponentConfig } from "@/lib/component-config-types";

const config: ComponentConfig = {
  name: "responsive-dialog",
  title: "Responsive Dialog",
  description:
    "A responsive dialog component that adapts to mobile devices with bottom drawer fallback",
  type: "registry:component",

  // Dependencies are handled by linked components
  dependencies: {
    npm: [],
    shad: [],
    hooks: [],
    linked: [
      "simple-dialog",
      "bottom-drawer",
      "custom-button",
      "kitze-ui-context",
    ],
  },
  files: [
    {
      path: "ResponsiveDialog.tsx",
      type: "registry:component",
    },
  ],
};

export default config;
