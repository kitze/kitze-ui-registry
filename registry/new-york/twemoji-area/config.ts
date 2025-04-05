import { ComponentConfig } from "@/lib/component-config-types";

const config: ComponentConfig = {
  name: "twemoji-area",
  type: "registry:component",
  title: "Twemoji Area",
  description:
    "A component for processing and displaying emojis using Twemoji within a container",

  dependencies: {
    npm: ["@twemoji/api", "react-error-boundary"],
  },

  files: [
    {
      path: "TwemojiArea.tsx",
      type: "registry:component",
    },
  ],
};

export default config;
