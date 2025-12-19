import { ComponentConfig } from "@/lib/component-config-types";

const config: ComponentConfig = {
  name: "mac-window",
  type: "registry:component",
  title: "Mac Window",
  description:
    "A macOS-style window component with traffic light buttons and optional title bar",

  dependencies: {
    npm: [],
  },

  files: [
    {
      path: "MacWindow.tsx",
      type: "registry:component",
    },
  ],
};

export default config;
