import { ComponentConfig } from "@/lib/component-config-types";

const config: ComponentConfig = {
  name: "footer-column-kitze-apps",
  type: "registry:component",
  title: "Footer Column Kitze Apps",
  description:
    "A footer column component listing Kitze's apps with external links and optional ref parameter",

  dependencies: {
    npm: ["lucide-react"],
  },

  files: [
    {
      path: "FooterColumnKitzeApps.tsx",
      type: "registry:component",
    },
  ],
};

export default config;
