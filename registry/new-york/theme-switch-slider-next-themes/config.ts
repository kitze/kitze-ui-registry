import { ComponentConfig } from "@/lib/component-config-types";

const config: ComponentConfig = {
  name: "theme-switch-slider-next-themes",
  type: "registry:component",
  title: "Theme Switch Slider with Next-Themes",
  description:
    "A theme switcher slider that integrates with the next-themes library for persistent theme management",

  dependencies: {
    npm: ["next-themes"],
    linked: ["theme-switch-slider"],
    hooks: ["useMounted"],
  },

  files: [
    {
      path: "ThemeSwitchNextThemes.tsx",
      type: "registry:component",
    },
  ],
};

export default config;
