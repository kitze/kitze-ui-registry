import * as React from "react";
import { OpenInV0Button } from "@/components/open-in-v0-button";
import { CopyInstallCommand } from "@/components/copy-install-command";

interface PreviewComponentProps {
  name: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}

export function PreviewComponent({
  name,
  title,
  description,
  children,
}: PreviewComponentProps) {
  return (
    <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
      <div className="flex flex-col gap-2">
        <h2 className="text-sm text-muted-foreground sm:pl-3">
          {description || title}
        </h2>
        <div className="flex items-center gap-2 sm:pl-3">
          <CopyInstallCommand name={name} className="max-w-[500px]" />
          <OpenInV0Button name={name} className="w-fit shrink-0" />
        </div>
      </div>
      <div className="flex items-center justify-center min-h-[400px] relative">
        {children}
      </div>
    </div>
  );
}
