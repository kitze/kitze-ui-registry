import { ComponentConfig } from "@/lib/component-config-types";

const config: ComponentConfig = {
  name: "form-field-checkbox",
  type: "registry:component",
  title: "Form Field Checkbox",
  description:
    "A checkbox component integrated with react-hook-form using FormFieldWrapper.",

  dependencies: {
    npm: ["react-hook-form"],
    linked: ["form-field-wrapper"],
    shad: ["checkbox"],
  },

  files: [
    {
      path: "FormFieldCheckbox.tsx",
      type: "registry:component",
    },
  ],
};

export default config;
