import { ComponentConfig } from "@/lib/component-config-types";

const config: ComponentConfig = {
  name: "responsive-dialog",
  type: "registry:component",
  title: "Responsive Dialog",
  description:
    "This dialog will display as a drawer on mobile devices and a regular dialog on desktop. Try resizing your browser to see the different appearances.",

  dependencies: {
    npm: [
      "next",
      "react",
      "react-dom",
      "tailwindcss",
      "clsx",
      "tailwind-merge",
      "@radix-ui/react-dialog",
      "vaul",
    ],
    shad: ["dialog"],
    linked: ["bottom-drawer", "simple-dialog", "kitze-ui-context"],
  },

  files: [
    {
      path: "ResponsiveDialog.tsx",
      type: "registry:component",
    },
  ],
};

export default config;
