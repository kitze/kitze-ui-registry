import { ComponentConfig } from "@/lib/component-config-types";

const config: ComponentConfig = {
  name: "menu-context",
  type: "registry:component",
  title: "Menu Context",
  description:
    "Context provider to determine the type of menu (dropdown, context, bottom-drawer) and provide a close function.",

  files: [
    {
      path: "MenuContext.tsx",
      type: "registry:component",
    },
  ],
};

export default config;
