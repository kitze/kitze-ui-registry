import { ComponentConfig } from "@/lib/component-config-types";

const config: ComponentConfig = {
  name: "theme-switch-minimal",
  type: "registry:component",
  title: "Theme Switch Minimal",
  description:
    "A minimal theme switch button with smooth icon transitions for light, dark, and system theme modes",

  dependencies: {
    npm: ["framer-motion", "lucide-react"],
    linked: ["custom-button"],
    hooks: ["useMounted"],
  },

  files: [
    {
      path: "ThemeSwitchMinimal.tsx",
      type: "registry:component",
    },
  ],
};

export default config;
