import { ComponentConfig } from "@/lib/component-config-types";

const config: ComponentConfig = {
  name: "with-search-bar",
  type: "registry:component",
  title: "With Search Bar",
  description:
    "A component that provides a searchable interface with animated transitions",

  dependencies: {
    npm: ["framer-motion", "lucide-react"],
    linked: ["search-bar"],
  },

  files: [
    {
      path: "WithSearchBar.tsx",
      type: "registry:component",
    },
  ],
};

export default config;
