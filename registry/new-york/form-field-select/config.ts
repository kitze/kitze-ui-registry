import { ComponentConfig } from "@/lib/component-config-types";

const config: ComponentConfig = {
  name: "form-field-select",
  type: "registry:component",
  title: "Form Field Select",
  description:
    "A form field component that combines FormFieldWrapper with SimpleSelect for easy form integration",

  dependencies: {
    npm: ["react-hook-form"],
    linked: ["form-field-wrapper", "simple-select"],
  },

  files: [
    {
      path: "FormFieldSelect.tsx",
      type: "registry:component",
    },
  ],
};

export default config;
