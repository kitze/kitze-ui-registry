import { ComponentConfig } from "@/lib/component-config-types";

const config: ComponentConfig = {
  name: "meta-image",
  type: "registry:component",
  title: "Meta Image",
  description:
    "A reusable component for generating OpenGraph/Twitter meta images at 1200x630 dimensions",

  dependencies: {
    npm: [],
  },

  files: [
    {
      path: "MetaImage.tsx",
      type: "registry:component",
    },
  ],
};

export default config;
