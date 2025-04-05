import { ComponentConfig } from "@/lib/component-config-types";

const config: ComponentConfig = {
  name: "twemoji-react",
  type: "registry:component",
  title: "Twemoji React",
  description:
    "A React component for displaying Twitter Emoji (Twemoji) in your React application",

  dependencies: {
    npm: ["@twemoji/api", "lodash.isequal"],
  },

  files: [
    {
      path: "TwemojiReact.tsx",
      type: "registry:component",
    },
  ],
};

export default config;
