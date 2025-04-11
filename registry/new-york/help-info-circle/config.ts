import { ComponentConfig } from "@/lib/component-config-types";
import { ComponentName } from "@/lib/component-types";

const config: ComponentConfig = {
  name: "help-info-circle",
  type: "registry:component",
  title: "Help Info Circle",
  description:
    "A help icon that displays information in a tooltip on desktop and a drawer on mobile",

  dependencies: {
    npm: ["lucide-react"],
    linked: ["simple-tooltip"],
  },

  files: [
    {
      path: "HelpInfoCircle.tsx",
      type: "registry:component",
    },
  ],
};

export default config;
