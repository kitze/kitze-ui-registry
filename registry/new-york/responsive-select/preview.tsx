"use client";

import * as React from "react";
import {
  Bot,
  Mail,
  MessageSquare,
  Phone,
  Plus,
  Settings,
  User,
} from "lucide-react";
import { ResponsiveSelect } from "./ResponsiveSelect";
import { KitzeUIProvider } from "@/registry/new-york/kitze-ui-context/KitzeUIContext";

const options = [
  {
    value: "user",
    label: "User",
    icon: User,
  },
  {
    value: "message",
    label: "Message",
    icon: MessageSquare,
  },
  {
    value: "settings",
    label: "Settings",
    icon: Settings,
  },
  {
    value: "phone",
    label: "Phone",
    icon: Phone,
  },
  {
    value: "mail",
    label: "Mail",
    icon: Mail,
  },
  {
    value: "plus",
    label: "Plus",
    icon: Plus,
  },
  {
    value: "bot",
    label: "Bot",
    icon: Bot,
  },
];

export default function ResponsiveSelectPreview() {
  const [value1, setValue1] = React.useState("");
  const [value2, setValue2] = React.useState("");
  const [value3, setValue3] = React.useState("");
  const [value4, setValue4] = React.useState("");

  return (
    <div className="flex flex-col space-y-10 p-6 max-w-2xl mx-auto">
      <div className="space-y-3">
        <h2 className="text-xl font-semibold">Responsive Select Examples</h2>
        <p className="text-muted-foreground">
          A select component that adapts to different device sizes and supports
          search functionality.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-medium">Desktop - Standard Select</h3>
          <p className="text-sm text-muted-foreground mb-2">
            The default select appearance for desktop devices.
          </p>
          <div className="space-y-1">
            <KitzeUIProvider isMobile={false}>
              <ResponsiveSelect
                options={options}
                value={value1}
                onValueChange={setValue1}
                placeholder="Select an option"
              />
            </KitzeUIProvider>
            <p className="text-sm text-muted-foreground">
              Selected: {value1 || "none"}
            </p>
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-medium">Desktop - Select with Search</h3>
          <p className="text-sm text-muted-foreground mb-2">
            Desktop select with search functionality.
          </p>
          <div className="space-y-1">
            <KitzeUIProvider isMobile={false}>
              <ResponsiveSelect
                options={options}
                value={value2}
                onValueChange={setValue2}
                placeholder="Select an option"
                withSearch
                searchPlaceholder="Search options..."
              />
            </KitzeUIProvider>
            <p className="text-sm text-muted-foreground">
              Selected: {value2 || "none"}
            </p>
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-medium">Mobile - Bottom Drawer</h3>
          <p className="text-sm text-muted-foreground mb-2">
            On mobile, this displays options in a bottom drawer.
          </p>
          <div className="space-y-1">
            <KitzeUIProvider isMobile={true}>
              <ResponsiveSelect
                options={options}
                value={value3}
                onValueChange={setValue3}
                placeholder="Select an option"
                drawerTitle="Select an option"
              />
            </KitzeUIProvider>
            <p className="text-sm text-muted-foreground">
              Selected: {value3 || "none"}
            </p>
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-medium">
            Mobile - Bottom Drawer with Search
          </h3>
          <p className="text-sm text-muted-foreground mb-2">
            Bottom drawer with search functionality for mobile devices.
          </p>
          <div className="space-y-1">
            <KitzeUIProvider isMobile={true}>
              <ResponsiveSelect
                options={options}
                value={value4}
                onValueChange={setValue4}
                placeholder="Select an option"
                withSearch
                searchPlaceholder="Search options..."
                drawerTitle="Select with search"
              />
            </KitzeUIProvider>
            <p className="text-sm text-muted-foreground">
              Selected: {value4 || "none"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
