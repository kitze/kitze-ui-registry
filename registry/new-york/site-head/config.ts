import { ComponentConfig } from "@/lib/component-config-types";

const config: ComponentConfig = {
  name: "site-head",
  type: "registry:component",
  title: "Site Head",
  description:
    "Reusable Head component with favicons, meta tags, OG/Twitter cards, and optional analytics",

  dependencies: {
    npm: [],
  },

  files: [
    {
      path: "SiteHead.tsx",
      type: "registry:component",
    },
  ],
};

export default config;
