import { ComponentConfig } from "@/lib/component-config-types";

const config: ComponentConfig = {
  name: "suspensed",
  type: "registry:component",
  title: "Suspensed",
  description: "A wrapper component for React Suspense with force option",

  files: [
    {
      path: "Suspensed.tsx",
      type: "registry:component",
    },
  ],
};

export default config;
