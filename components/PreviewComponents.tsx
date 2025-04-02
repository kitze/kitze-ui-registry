"use client";

import * as React from "react";
import { ComponentName } from "@/lib/component-types";
import { PreviewComponent } from "./PreviewComponent";
import { LazyPreview } from "./LazyPreview";
import { SectionTitle } from "./SectionTitle";
import { SectionDescription } from "./SectionDescription";

interface PreviewComponentsProps {
  title?: string;
  description?: string;
  names: ComponentName[];
}

export function PreviewComponents({
  title,
  description,
  names,
}: PreviewComponentsProps) {
  return (
    <div className="flex flex-col">
      {title && <SectionTitle>{title}</SectionTitle>}
      {description && <SectionDescription>{description}</SectionDescription>}
      <div className="flex flex-col gap-8">
        {names.map((name) => (
          <PreviewComponent key={name} name={name}>
            <LazyPreview name={name} />
          </PreviewComponent>
        ))}
      </div>
    </div>
  );
}
