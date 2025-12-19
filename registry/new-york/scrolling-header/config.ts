import { ComponentConfig } from "@/lib/component-config-types";

const config: ComponentConfig = {
  name: "scrolling-header",
  type: "registry:component",
  title: "Scrolling Header",
  description:
    "A sticky header component that appears after scrolling past a threshold, with smooth animations",

  dependencies: {
    npm: ["framer-motion"],
  },

  files: [
    {
      path: "ScrollingHeader.tsx",
      type: "registry:component",
    },
  ],
};

export default config;
