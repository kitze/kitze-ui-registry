"use client";

import * as React from "react";
import { Spinner } from "@/registry/custom/Spinner";

export function SpinnerExample() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-medium">Variants</h3>
        <div className="flex gap-8 items-center">
          <div className="flex flex-col items-center gap-2">
            <Spinner variant="default" size="lg" />
            <span className="text-xs text-muted-foreground">default</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner variant="circle" size="lg" />
            <span className="text-xs text-muted-foreground">circle</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner variant="pinwheel" size="lg" />
            <span className="text-xs text-muted-foreground">pinwheel</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-medium">Sizes</h3>
        <div className="flex gap-8 items-center">
          <div className="flex flex-col items-center gap-2">
            <Spinner size="xs" />
            <span className="text-xs text-muted-foreground">xs</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner size="sm" />
            <span className="text-xs text-muted-foreground">sm</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner size="md" />
            <span className="text-xs text-muted-foreground">md</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner size="lg" />
            <span className="text-xs text-muted-foreground">lg</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner size="xl" />
            <span className="text-xs text-muted-foreground">xl</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-medium">Full Page Spinner</h3>
        <div className="flex items-center justify-center p-4 border rounded-md bg-muted/50">
          Cannot preview this component because it takes up the entire screen
        </div>
      </div>
    </div>
  );
}
