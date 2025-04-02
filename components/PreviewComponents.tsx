"use client";

import * as React from "react";
import { PreviewComponent } from "./PreviewComponent";
import { ComponentName } from "@/lib/component-types";
import { LazyPreview } from "./LazyPreview";
import Link from "next/link";

interface PreviewComponentsProps {
  title: string;
  description: string;
  names: ComponentName[];
}

export function PreviewComponents({
  title,
  description,
  names,
}: PreviewComponentsProps) {
  return (
    <div className="grid grid-cols-1 gap-6">
      <div className="flex flex-col gap-2 mb-4">
        <h2
          className="text-2xl font-bold tracking-tight"
          id={title.toLowerCase().replace(/\s+/g, "-")}
        >
          {title}
        </h2>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {names.map((name) => (
          <Link
            key={name}
            href={`/component/${name}`}
            className="block transition-opacity hover:opacity-90"
          >
            <PreviewComponent name={name}>
              <LazyPreview name={name} />
            </PreviewComponent>
          </Link>
        ))}
      </div>
    </div>
  );
}
