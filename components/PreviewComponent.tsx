"use client";

import * as React from "react";
import { OpenInV0Button } from "@/components/open-in-v0-button";
import { SimpleTooltip } from "@/registry/new-york/simple-tooltip/SimpleTooltip";
import { ComponentName, componentMeta } from "@/lib/component-types";
import { Copy } from "lucide-react";
import { toast } from "sonner";
import { cn, getRegistryUrl } from "@/lib/utils";
import { CustomButton } from "@/registry/new-york/custom-button/CustomButton";

interface PreviewComponentProps {
  name: ComponentName;
  children: React.ReactNode;
}

export function PreviewComponent({ name, children }: PreviewComponentProps) {
  const meta = componentMeta[name];
  if (!meta) {
    return console.error(`Component ${name} not found`);
  }
  const installCommand = `npx shadcn@latest add ${getRegistryUrl(name)}`;

  const handleCopy = React.useCallback(() => {
    navigator.clipboard.writeText(installCommand);
    toast.success("Copied to clipboard!");
  }, [installCommand]);

  return (
    <div
      className={cn("flex flex-col gap-4 border rounded-lg p-4", "relative")}
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold">{meta.title}</h2>
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
        </div>
        <p className="text-sm text-muted-foreground">{meta.description}</p>
      </div>
      <div className="flex flex-1 relative">{children}</div>
    </div>
  );
}
