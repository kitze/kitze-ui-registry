import { ComponentConfig } from "@/lib/component-config-types";
import { ComponentName } from "@/lib/component-types";

const config: ComponentConfig = {
  name: "responsive-tooltip",
  type: "registry:component",
  title: "Responsive Tooltip",
  description:
    "A tooltip component that adapts to desktop (tooltip) and mobile (bottom drawer) views",

  dependencies: {
    linked: [
      "simple-tooltip",
      "conditional-wrap",
      "bottom-drawer",
    ] as ComponentName[],
  },

  files: [
    {
      path: "ResponsiveTooltip.tsx",
      type: "registry:component",
    },
  ],
};

export default config;
