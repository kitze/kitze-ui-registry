import { ComponentConfig } from "@/lib/component-config-types";

const config: ComponentConfig = {
  name: "form-field-advanced-select",
  type: "registry:component",
  title: "Form Field Advanced Select",
  description:
    "A form field component that integrates the AdvancedSelect with form handling capabilities",

  dependencies: {
    npm: ["react-hook-form"],
    linked: ["form-field-wrapper", "advanced-select"],
  },

  files: [
    {
      path: "FormFieldAdvancedSelect.tsx",
      type: "registry:component",
    },
  ],
};

export default config;
