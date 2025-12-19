"use client";

import { MacWindow } from "@/registry/new-york/mac-window/MacWindow";

export function Preview() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-medium">Dark Theme (Default)</h3>
        <MacWindow title="My App">
          <div className="p-6 text-white">
            <p>Window content goes here</p>
          </div>
        </MacWindow>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-medium">Light Theme</h3>
        <MacWindow dark={false} title="My App">
          <div className="p-6 text-black">
            <p>Window content goes here</p>
          </div>
        </MacWindow>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-medium">Without Title</h3>
        <MacWindow>
          <div className="p-6 text-white">
            <p>No title in the title bar</p>
          </div>
        </MacWindow>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-medium">With Complex Content</h3>
        <MacWindow title="Terminal">
          <div className="p-4 font-mono text-sm text-green-400 bg-black min-h-[150px]">
            <p>$ npm install kitze-ui</p>
            <p className="text-zinc-500">Installing dependencies...</p>
            <p className="text-green-400">Done!</p>
          </div>
        </MacWindow>
      </div>
    </div>
  );
}
