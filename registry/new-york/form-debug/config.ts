import { ComponentConfig } from "@/lib/component-config-types";

const config: ComponentConfig = {
  name: "form-debug",
  title: "Form Debug",
  description:
    "A component to display react-hook-form state for debugging purposes.",
  type: "registry:component",
  dependencies: {
    npm: ["react-hook-form"],
  },
  files: [
    {
      path: "registry/new-york/form-debug/FormDebug.tsx",
      type: "registry:component",
    },
  ],
};

export default config;
