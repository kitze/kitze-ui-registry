"use client";

import React from "react";
import { Kbd } from "./Kbd";

export function Preview() {
  return (
    <div className="flex flex-col gap-8 max-w-md mx-auto">
      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-medium">Basic Usage</h3>
        <Kbd keys={["Ctrl"]} />
        <Kbd keys={["Cmd", "C"]} />
        <Kbd keys={["Shift", "Alt", "X"]} />
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-medium">Custom Styling</h3>
        <Kbd
          keys={["Ctrl", "S"]}
          classNames={{
            root: "bg-muted/20 p-1 rounded",
            key: "bg-primary text-primary-foreground",
            separator: "text-primary",
          }}
        />
        <div className="dark:bg-slate-800 bg-slate-100 p-4 rounded-md">
          <Kbd
            keys={["Alt", "Tab"]}
            classNames={{
              key: "bg-background border-border",
            }}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-medium">Common Shortcuts</h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm">Copy:</span>
            <Kbd keys={["Ctrl", "C"]} />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Paste:</span>
            <Kbd keys={["Ctrl", "V"]} />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Cut:</span>
            <Kbd keys={["Ctrl", "X"]} />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Save:</span>
            <Kbd keys={["Ctrl", "S"]} />
          </div>
        </div>
      </div>
    </div>
  );
}
