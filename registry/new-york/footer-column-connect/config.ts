import { ComponentConfig } from "@/lib/component-config-types";

const config: ComponentConfig = {
  name: "footer-column-connect",
  type: "registry:component",
  title: "Footer Column Connect",
  description:
    "A footer column component with connect/social links for Twitter, email support, and website",

  dependencies: {
    npm: [],
  },

  files: [
    {
      path: "FooterColumnConnect.tsx",
      type: "registry:component",
    },
  ],
};

export default config;
