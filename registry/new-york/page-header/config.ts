import { ComponentConfig } from "@/lib/component-config-types";

const config: ComponentConfig = {
  name: "page-header",
  type: "registry:component",
  title: "Page Header",
  description: "A responsive page header component with mobile drawer support",

  dependencies: {
    linked: ["custom-button", "bottom-drawer"],
    hooks: ["useScrolledPast"],
  },

  files: [
    {
      path: "PageHeader.tsx",
      type: "registry:component",
    },
  ],
};

export default config;
