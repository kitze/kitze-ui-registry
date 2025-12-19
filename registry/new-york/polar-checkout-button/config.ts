import { ComponentConfig } from "@/lib/component-config-types";

const config: ComponentConfig = {
  name: "polar-checkout-button",
  type: "registry:component",
  title: "Polar Checkout Button",
  description:
    "A checkout button component for Polar/payment redirects with loading state, Apple logo, and multiple variants",

  dependencies: {
    npm: ["lucide-react"],
    linked: ["apple-logo"],
  },

  files: [
    {
      path: "PolarCheckoutButton.tsx",
      type: "registry:component",
    },
  ],
};

export default config;
