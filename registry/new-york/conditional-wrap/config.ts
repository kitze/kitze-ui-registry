import { ComponentConfig } from "@/lib/component-config-types";

const config: ComponentConfig = {
  name: "conditional-wrap",
  type: "registry:component",
  title: "Conditional Wrap",
  description:
    "A utility component that conditionally wraps its children with a wrapper component. Useful for conditional wrappers like tooltips, links, popovers, drag handlers, etc.",

  files: [
    {
      path: "ConditionalWrap.tsx",
      type: "registry:component",
    },
  ],
};

export default config;
