"use client";

import * as React from "react";
import { ComponentName } from "@/lib/component-types";
import { PreviewComponent } from "./PreviewComponent";
import { LazyPreview } from "./LazyPreview";

interface PreviewComponentsProps {
  names: ComponentName[];
}

export function PreviewComponents({ names }: PreviewComponentsProps) {
  return (
    <div className="flex flex-col gap-8">
      {names.map((name) => (
        <PreviewComponent key={name} name={name}>
          <LazyPreview name={name} />
        </PreviewComponent>
      ))}
    </div>
  );
}
