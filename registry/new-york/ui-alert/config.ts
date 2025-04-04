import { ComponentConfig } from "@/lib/component-config-types";

const config: ComponentConfig = {
  name: "ui-alert",
  type: "registry:component",
  title: "UI Alert",
  description:
    "A collection of alert components with confirm and delete variations",

  dependencies: {
    shad: ["alert-dialog"],
  },

  files: [
    {
      path: "Alert.tsx",
      type: "registry:component",
    },
    {
      path: "ConfirmAlert.tsx",
      type: "registry:component",
    },
    {
      path: "ConfirmAlertDelete.tsx",
      type: "registry:component",
    },
    {
      path: "AlertContext.tsx",
      type: "registry:component",
    },
  ],
};

export default config;
