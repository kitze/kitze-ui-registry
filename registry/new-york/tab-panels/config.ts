import { ComponentConfig } from "@/lib/component-config-types";

const config: ComponentConfig = {
  name: "tab-panels",
  title: "Tab Panels",
  description:
    "A component to display content in tabs using a segmented control.",
  type: "registry:component",
  files: [
    {
      path: "TabPanels.tsx",
      type: "registry:component",
    },
  ],
  dependencies: {
    npm: ["framer-motion", "lucide-react"],
    linked: ["segmented-control"],
  },
};

export default config;
