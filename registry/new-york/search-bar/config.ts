import { ComponentConfig } from "@/lib/component-config-types";

const config: ComponentConfig = {
  name: "search-bar",
  type: "registry:component",
  title: "Search Bar",
  description: "A reusable search input component with clear functionality",

  dependencies: {
    npm: ["lucide-react"],
  },

  files: [
    {
      path: "SearchBar.tsx",
      type: "registry:component",
    },
  ],
};

export default config;
