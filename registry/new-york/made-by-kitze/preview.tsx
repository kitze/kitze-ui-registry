"use client";

import { MadeByKitze } from "@/registry/new-york/made-by-kitze/MadeByKitze";

export function Preview() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-medium">Default (All Apps)</h3>
        <div className="rounded-xl overflow-hidden">
          <MadeByKitze />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-medium">Excluding an App (e.g., on DMX landing page)</h3>
        <div className="rounded-xl overflow-hidden">
          <MadeByKitze excludeApp="DMX" />
        </div>
      </div>
    </div>
  );
}
