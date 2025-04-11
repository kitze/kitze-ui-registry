import { ComponentConfig } from "@/lib/component-config-types";

const config: ComponentConfig = {
  name: "dialog-manager",
  type: "registry:component",
  title: "Dialog Manager",
  description:
    "A context-based dialog management system that allows for opening, closing, and managing multiple dialogs in your React application.",
  dependencies: {
    linked: ["simple-dialog"],
  },
  files: [
    {
      path: "DialogManager.tsx",
      type: "registry:component",
    },
  ],
};

export default config;
