import { ComponentConfig } from "@/lib/component-config-types";

const config: ComponentConfig = {
  name: "hoverable-icon",
  type: "registry:component",
  title: "Hoverable Icon",
  description:
    "A linkable icon component with tooltip support, hover effects, and color customization",
  dependencies: {
    npm: ["lucide-react", "next/link"],
    linked: ["conditional-tooltip"],
    hooks: ["useLinkableComponent"],
  },
  files: [
    {
      path: "HoverableIcon.tsx",
      type: "registry:component",
    },
  ],
};

export default config;
