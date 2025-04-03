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
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2 mb-4">
        <h2
          className="text-2xl font-bold tracking-tight"
          id={title.toLowerCase().replace(/\s+/g, "-")}
        >
          {title}
        </h2>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <div className="flex flex-col gap-4">
        {names.map((name) => (
          <div key={name}>
            <PreviewComponent
              name={name}
              titleWrapper={(children: React.ReactNode) => (
                <Link href={`/component/${name}`} className="hover:underline">
                  {children}
                </Link>
              )}
            >
              <LazyPreview name={name} />
            </PreviewComponent>
          </div>
        ))}
      </div>
    </div>
  );
}
