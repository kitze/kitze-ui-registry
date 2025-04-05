"use client";

import React from "react";
import { KbdShortcuts } from "./KbdShortcuts";

export function Preview() {
  return (
    <div className="flex flex-col gap-8 max-w-md mx-auto">
      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-medium">Basic Usage (Default Separator)</h3>
        <KbdShortcuts shortcuts={["Ctrl", "S"]} />
        <KbdShortcuts shortcuts={["Cmd", "Shift", "P"]} />
        <KbdShortcuts shortcuts={["Alt", "F4"]} />
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-medium">Custom Separators</h3>
        <div className="space-y-2">
          <div className="flex items-center gap-4">
            <span className="text-sm w-20">Arrow:</span>
            <KbdShortcuts shortcuts={["Ctrl", "A"]} separator="→" />
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm w-20">Then:</span>
            <KbdShortcuts shortcuts={["Ctrl", "X"]} separator="then" />
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm w-20">No separator:</span>
            <KbdShortcuts shortcuts={["Ctrl", "C"]} separator={null} />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-medium">Custom Styling</h3>
        <KbdShortcuts
          shortcuts={["Ctrl", "Alt", "Del"]}
          classNames={{
            key: "bg-primary text-primary-foreground",
            separator: "text-primary font-bold",
          }}
        />

        <div className="dark:bg-slate-800 bg-slate-100 p-4 rounded-md">
          <KbdShortcuts
            shortcuts={["Win", "R"]}
            separator="+"
            classNames={{
              key: "bg-background border-accent",
              separator: "text-accent",
            }}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-medium">Usage Examples</h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm">Save:</span>
            <KbdShortcuts shortcuts={["Ctrl", "S"]} />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Search:</span>
            <KbdShortcuts shortcuts={["Ctrl", "F"]} />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Toggle sidebar:</span>
            <KbdShortcuts shortcuts={["Ctrl", "B"]} />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Close window:</span>
            <KbdShortcuts shortcuts={["Alt", "F4"]} />
          </div>
        </div>
      </div>
    </div>
  );
}
