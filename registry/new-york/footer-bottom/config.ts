import { ComponentConfig } from "@/lib/component-config";

const config: ComponentConfig = {
  name: "footer-bottom",
  type: "registry:ui",
  title: "Footer Bottom",
  description:
    "A reusable footer bottom section with copyright and 'built by' attribution.",
  dependencies: [],
  files: [
    {
      path: "registry/new-york/footer-bottom/FooterBottom.tsx",
      type: "registry:ui",
      target: "components/FooterBottom.tsx",
    },
  ],
  categories: ["landing-page"],
};

export default config;
