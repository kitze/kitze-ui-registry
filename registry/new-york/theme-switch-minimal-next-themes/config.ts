import { ComponentConfig } from "@/lib/component-config-types";

const config: ComponentConfig = {
  name: "theme-switch-minimal-next-themes",
  type: "registry:component",
  title: "Theme Switch Minimal with Next-Themes",
  description:
    "A minimal theme switcher that integrates with the next-themes library for persistent theme management",

  dependencies: {
    npm: ["next-themes"],
    linked: ["theme-switch-minimal"],
  },

  files: [
    {
      path: "ThemeSwitchMinimalNextThemes.tsx",
      type: "registry:component",
    },
  ],
};

export default config;
