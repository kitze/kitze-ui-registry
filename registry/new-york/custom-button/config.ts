import { ComponentConfig } from "@/lib/component-config-types";

const config: ComponentConfig = {
  name: "custom-button",
  type: "registry:component",
  title: "Custom Button",
  description:
    "A customizable button component with various styles, sizes, and features like loading state and icon support",

  dependencies: {
    npm: ["class-variance-authority"],
    linked: ["conditional-tooltip", "spinner"],
    hooks: ["useLinkableComponent"],
  },

  files: [
    {
      path: "CustomButton.tsx",
      type: "registry:component",
    },
  ],
};

export default config;
