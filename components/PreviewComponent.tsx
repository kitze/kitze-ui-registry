"use client";

import * as React from "react";
import { useState } from "react";
import { OpenInV0Button } from "@/components/open-in-v0-button";
import { SimpleTooltip } from "@/registry/new-york/simple-tooltip/SimpleTooltip";
import { ComponentName, componentMeta } from "@/lib/component-types";
import { Copy, Monitor, Smartphone } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { getRegistryUrl } from "@/lib/lib-utils";
import { CustomButton } from "@/registry/new-york/custom-button/CustomButton";
import {
  SegmentedControl,
  SegmentedControlOption,
} from "@/registry/new-york/segmented-control/SegmentedControl";
import { KitzeUIProvider } from "@/registry/new-york/kitze-ui-context/KitzeUIContext";

interface PreviewComponentProps {
  name: ComponentName;
  children: React.ReactNode;
  titleWrapper?: (children: React.ReactNode) => React.ReactNode;
}

const viewOptions: SegmentedControlOption[] = [
  { value: "desktop", label: "Desktop", leftIcon: Monitor },
  { value: "mobile", label: "Mobile", leftIcon: Smartphone },
];

export function PreviewComponent({
  name,
  children,
  titleWrapper,
}: PreviewComponentProps) {
  const [viewMode, setViewMode] = useState<"desktop" | "mobile">("desktop");
  const meta = componentMeta[name];
  const installCommand = `npx shadcn@latest add ${getRegistryUrl(name)}`;

  const handleCopy = React.useCallback(() => {
    navigator.clipboard.writeText(installCommand);
    toast.success("Copied to clipboard!");
  }, [installCommand]);

  if (!meta) {
    console.error(`Component ${name} not found`);
    return null;
  }

  const title = <h2 className="text-lg font-semibold">{meta.title}</h2>;
  const isMobileView = viewMode === "mobile";

  return (
    <div
      className={cn("flex flex-col gap-4 border rounded-lg p-4", "relative")}
    >
      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap items-center gap-2">
          {titleWrapper ? titleWrapper(title) : title}
          <SimpleTooltip content={installCommand}>
            <CustomButton
              tooltip={installCommand}
              icon={Copy}
              variant="ghost"
              className="h-8 w-8"
              onClick={handleCopy}
            />
          </SimpleTooltip>
          <OpenInV0Button name={name} className="w-fit shrink-0" />
          <div className="ml-auto">
            <SegmentedControl
              options={viewOptions}
              value={viewMode}
              onChange={(value) => setViewMode(value as "desktop" | "mobile")}
              size="sm"
            />
          </div>
        </div>
        <p className="text-sm text-muted-foreground">{meta.description}</p>
      </div>
      <div
        className={cn(
          "flex flex-1 relative justify-center",
          isMobileView && "max-w-xs mx-auto w-full"
        )}
      >
        <KitzeUIProvider isMobile={isMobileView}>{children}</KitzeUIProvider>
      </div>
    </div>
  );
}
