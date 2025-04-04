import { ComponentConfig } from "@/lib/component-config-types";

const config: ComponentConfig = {
  name: "simple-dialog",
  title: "Simple Dialog",
  description: "A simple dialog component using Radix UI.",
  type: "registry:component",

  // NPM dependencies
  dependencies: {
    npm: [
      "next",
      "react",
      "react-dom",
      "tailwindcss",
      "clsx",
      "tailwind-merge",
      "@radix-ui/react-dialog",
    ],
    shad: ["dialog"],
    hooks: ["useControlledOpen"],
  },
  files: [
    {
      path: "SimpleDialog.tsx",
      type: "registry:component",
    },
  ],
};

export default config;
