import { ComponentConfig } from "@/lib/component-config-types";

const config: ComponentConfig = {
  name: "form-field-textarea",
  type: "registry:component",
  title: "Form Field Textarea",
  description:
    "A textarea component integrated with react-hook-form using FormFieldWrapper.",

  dependencies: {
    npm: ["react-hook-form"],
    linked: ["form-field-wrapper"],
    shad: ["textarea"],
  },

  files: [
    {
      path: "FormFieldTextarea.tsx",
      type: "registry:component",
    },
  ],
};

export default config;
