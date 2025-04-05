"use client";

import React from "react";
import { KbdShortcutsList } from "./KbdShortcutsList";

export function Preview() {
  const editorShortcuts = [
    {
      label: "Save",
      shortcuts: ["Ctrl", "S"],
    },
    {
      label: "Save As",
      shortcuts: ["Ctrl", "Shift", "S"],
    },
    {
      label: "Find",
      shortcuts: ["Ctrl", "F"],
    },
    {
      label: "Replace",
      shortcuts: ["Ctrl", "H"],
    },
    {
      label: "Format Document",
      shortcuts: ["Shift", "Alt", "F"],
    },
  ];

  const gitShortcuts = [
    {
      label: "Stage Changes",
      shortcuts: ["Ctrl", "Alt", "S"],
      separator: "→",
    },
    {
      label: "Commit",
      shortcuts: ["Ctrl", "Enter"],
      separator: "+",
    },
    {
      label: "Pull",
      shortcuts: ["Ctrl", "Shift", "P"],
      separator: "→",
    },
    {
      label: "Push",
      shortcuts: ["Ctrl", "Shift", "Up"],
      separator: "→",
    },
  ];

  const gameShortcuts = [
    {
      label: "Move Forward",
      shortcuts: ["W"],
      separator: null,
    },
    {
      label: "Move Backward",
      shortcuts: ["S"],
      separator: null,
    },
    {
      label: "Move Left",
      shortcuts: ["A"],
      separator: null,
    },
    {
      label: "Move Right",
      shortcuts: ["D"],
      separator: null,
    },
    {
      label: "Jump",
      shortcuts: ["Space"],
      separator: null,
    },
  ];

  return (
    <div className="flex flex-col gap-8 max-w-xl mx-auto">
      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-medium">Editor Shortcuts</h3>
        <div className="border rounded-md overflow-hidden">
          <KbdShortcutsList shortcuts={editorShortcuts} />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-medium">
          Git Commands with Arrow Separators
        </h3>
        <div className="bg-muted/10 rounded-md p-2">
          <KbdShortcutsList
            shortcuts={gitShortcuts}
            classNames={{
              key: "bg-primary/10 text-primary border-primary/20",
              separator: "text-primary/70",
            }}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-medium">Game Controls (No Separators)</h3>
        <div className="bg-muted/30 p-2 rounded-md">
          <KbdShortcutsList
            shortcuts={gameShortcuts}
            classNames={{
              item: "hover:bg-accent/20 dark:hover:bg-accent/10",
              label: "font-medium",
            }}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-medium">Custom Styling Example</h3>
        <KbdShortcutsList
          shortcuts={[
            {
              label: "Toggle Theme",
              shortcuts: ["Ctrl", "T"],
            },
            {
              label: "Toggle Sidebar",
              shortcuts: ["Ctrl", "B"],
            },
            {
              label: "Toggle Panel",
              shortcuts: ["Ctrl", "J"],
            },
          ]}
          classNames={{
            list: "border rounded-md p-2 bg-muted/10",
            item: "py-2 border-b last:border-b-0 hover:bg-accent/10",
            label: "font-medium text-primary",
            key: "bg-accent text-accent-foreground",
          }}
        />
      </div>
    </div>
  );
}
