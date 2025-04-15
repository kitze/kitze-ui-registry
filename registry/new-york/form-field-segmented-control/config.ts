import { ComponentConfig } from "@/lib/component-config-types";

const config: ComponentConfig = {
  name: "form-field-segmented-control",
  type: "registry:component",
  title: "Form Field Segmented Control",
  description:
    "A form field component that combines FormFieldWrapper with SegmentedControl for easy form integration",

  dependencies: {
    npm: ["react-hook-form"],
    linked: ["form-field-wrapper", "segmented-control"],
  },

  files: [
    {
      path: "FormFieldSegmentedControl.tsx",
      type: "registry:component",
    },
  ],
};

export default config;
