import { ComponentConfig } from "@/lib/component-config-types";

const config: ComponentConfig = {
  name: "apple-logo",
  type: "registry:component",
  title: "Apple Logo",
  description: "Apple logo SVG icon component for macOS app buttons and branding",

  dependencies: {
    npm: [],
  },

  files: [
    {
      path: "AppleLogo.tsx",
      type: "registry:component",
    },
  ],
};

export default config;
