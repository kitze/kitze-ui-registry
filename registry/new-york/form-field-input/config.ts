import { ComponentConfig } from "@/lib/component-config-types";

const config: ComponentConfig = {
  name: "form-field-input",
  type: "registry:component",
  title: "Form Field Input",
  description:
    "An input component integrated with react-hook-form using FormFieldWrapper.",

  dependencies: {
    npm: ["react-hook-form"],
    linked: ["form-field-wrapper"],
    shad: ["input"],
  },

  files: [
    {
      path: "FormFieldInput.tsx",
      type: "registry:component",
    },
  ],
};

export default config;
