import { ComponentConfig } from "@/lib/component-config-types";

const config: ComponentConfig = {
  name: "form-field-wrapper",
  type: "registry:component",
  title: "Form Field Wrapper",
  description:
    "A wrapper component for react-hook-form fields providing consistent label, description, and error message handling.",

  dependencies: {
    npm: ["react-hook-form"],
    shad: ["form"],
  },

  files: [
    {
      path: "FormFieldWrapper.tsx",
      type: "registry:component",
    },
    {
      path: "preview.tsx",
      type: "registry:component",
    },
  ],
};

export default config;
