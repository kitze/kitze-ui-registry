import { ComponentConfig } from "@/lib/component-config-types";

const config: ComponentConfig = {
  name: "favicon-image",
  type: "registry:component",
  title: "Favicon Image",
  description:
    "A component for generating favicons with gradient backgrounds, rounded corners, and centered icons",

  dependencies: {
    npm: [],
  },

  files: [
    {
      path: "FaviconImage.tsx",
      type: "registry:component",
    },
  ],
};

export default config;
