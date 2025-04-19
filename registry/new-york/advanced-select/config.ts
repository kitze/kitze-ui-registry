import { ComponentConfig } from "@/lib/component-config-types";

const config: ComponentConfig = {
  name: "advanced-select",
  type: "registry:component",
  title: "Advanced Select",
  description:
    "A multi-select component with search capabilities, multiple selection as badges, and animations",

  dependencies: {
    npm: ["lucide-react", "framer-motion"],
    shad: ["popover", "command", "separator", "badge", "button"],
  },

  files: [
    {
      path: "AdvancedSelect.tsx",
      type: "registry:component",
    },
  ],
};

export default config;
