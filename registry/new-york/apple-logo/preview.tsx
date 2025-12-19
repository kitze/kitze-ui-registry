"use client";

import { AppleLogo } from "@/registry/new-york/apple-logo/AppleLogo";

export function Preview() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-medium">Sizes</h3>
        <div className="flex gap-8 items-center">
          <div className="flex flex-col items-center gap-2">
            <AppleLogo className="h-4 w-4" />
            <span className="text-xs text-muted-foreground">sm</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <AppleLogo className="h-5 w-5" />
            <span className="text-xs text-muted-foreground">md</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <AppleLogo className="h-6 w-6" />
            <span className="text-xs text-muted-foreground">lg</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <AppleLogo className="h-8 w-8" />
            <span className="text-xs text-muted-foreground">xl</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-medium">In a button</h3>
        <button className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2 font-medium text-black">
          <AppleLogo className="h-4 w-4" />
          <span>Download for macOS</span>
        </button>
      </div>
    </div>
  );
}
