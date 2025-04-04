import { ComponentConfig } from "@/lib/component-config-types";

const config: ComponentConfig = {
  name: "full-page-spinner",
  type: "registry:component",
  title: "Full Page Spinner",
  description:
    "A spinner component that takes full page size and centers itself in the viewport",

  dependencies: {
    linked: ["spinner"],
  },

  files: [
    {
      path: "FullPageSpinner.tsx",
      type: "registry:component",
    },
  ],
};

export default config;
