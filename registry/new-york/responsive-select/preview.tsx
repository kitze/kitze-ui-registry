"use client";

import React from "react";
import { ResponsiveSelect } from "./ResponsiveSelect";
import { FileIcon, ImageIcon, MonitorIcon, MouseIcon } from "lucide-react";
import { KitzeUIProvider } from "@/registry/new-york/kitze-ui-context/KitzeUIContext";

export default function ResponsiveSelectPreview() {
  const [value, setValue] = React.useState<string>("");

  const options = [
    {
      value: "desktop",
      label: "Desktop",
      icon: MonitorIcon,
    },
    {
      value: "mobile",
      label: "Mobile",
      icon: MouseIcon,
    },
    {
      value: "image",
      label: "Image",
      icon: ImageIcon,
    },
    {
      value: "document",
      label: "Document",
      icon: FileIcon,
    },
  ];

  return (
    <div className="flex flex-col gap-8 p-4">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Desktop View (Default)</h3>
        <KitzeUIProvider isMobile={false}>
          <ResponsiveSelect
            options={options}
            value={value}
            onValueChange={setValue}
            placeholder="Select a device type"
          />
        </KitzeUIProvider>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Mobile - Native Select</h3>
        <p className="text-sm text-muted-foreground">
          This uses the native select on mobile devices
        </p>
        <KitzeUIProvider isMobile={true}>
          <ResponsiveSelect
            options={options}
            value={value}
            onValueChange={setValue}
            placeholder="Select a device type"
            mobileView="native"
          />
        </KitzeUIProvider>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Mobile - Bottom Drawer</h3>
        <p className="text-sm text-muted-foreground">
          This displays options in a bottom drawer on mobile devices
        </p>
        <KitzeUIProvider isMobile={true}>
          <ResponsiveSelect
            options={options}
            value={value}
            onValueChange={setValue}
            placeholder="Select a device type"
            mobileView="bottom-drawer"
            drawerTitle="Choose Device Type"
          />
        </KitzeUIProvider>
      </div>
    </div>
  );
}
