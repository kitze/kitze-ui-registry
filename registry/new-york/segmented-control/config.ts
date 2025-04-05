import { ComponentConfig } from "@/lib/component-config-types";

const config: ComponentConfig = {
  name: "segmented-control",
  type: "registry:component",
  title: "Segmented Control",
  description:
    "A simple, accessible segmented control component with size variants",

  dependencies: {
    npm: ["lucide-react", "tailwind-variants"],
  },

  files: [
    {
      path: "SegmentedControl.tsx",
      type: "registry:component",
    },
  ],
};

export default config;
