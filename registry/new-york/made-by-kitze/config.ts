import { ComponentConfig } from "@/lib/component-config-types";

const config: ComponentConfig = {
  name: "made-by-kitze",
  type: "registry:component",
  title: "Made By Kitze",
  description:
    "A section component showcasing apps made by Kitze with animated cards and social links",

  dependencies: {
    npm: ["framer-motion", "lucide-react"],
  },

  files: [
    {
      path: "MadeByKitze.tsx",
      type: "registry:component",
    },
  ],
};

export default config;
