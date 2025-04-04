import { ComponentConfig } from "@/lib/component-config-types";

const config: ComponentConfig = {
  name: "theme-switch-slider",
  type: "registry:component",
  title: "Theme Switch Slider",
  description:
    "A beautiful animated theme switcher with a sliding control and animated stars",

  dependencies: {
    npm: ["framer-motion", "lucide-react"],
  },

  files: [
    {
      path: "ThemeSwitchSlider.tsx",
      type: "registry:component",
    },
  ],
};

export default config;
