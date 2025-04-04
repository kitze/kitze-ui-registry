import { ComponentConfig } from "@/lib/component-config-types";

const config: ComponentConfig = {
  name: "spinner",
  type: "registry:component",
  title: "Spinner",
  description:
    "A customizable loading spinner component with different variants and sizes",

  dependencies: {
    npm: ["lucide-react"],
  },

  files: [
    {
      path: "Spinner.tsx",
      type: "registry:component",
    },
  ],
};

export default config;
