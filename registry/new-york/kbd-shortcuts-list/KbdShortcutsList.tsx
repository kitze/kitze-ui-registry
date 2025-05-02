import * as React from "react";
import { cn } from "@/lib/utils";
import { ReactFC } from "@/lib/types";
import { KbdShortcuts } from "@/registry/new-york/kbd-shortcuts/KbdShortcuts";
import { KbdClassNames } from "@/registry/new-york/kbd/Kbd";

export interface ShortcutItem {
  label: string;
  shortcuts: string[];
  separator?: string | null;
}

export interface KbdShortcutsListClassNames extends KbdClassNames {
  list?: string;
  item?: string;
  label?: string;
}

export interface KbdShortcutsListProps {
  shortcuts: ShortcutItem[];
  classNames?: KbdShortcutsListClassNames;
}

export const KbdShortcutsList: ReactFC<KbdShortcutsListProps> = ({
  shortcuts,
  classNames = {},
}) => {
  return (
    <div className={cn("space-y-3", classNames.list)}>
      {shortcuts.map((item, index) => (
        <div
          key={`${item.label}-${index}`}
          className={cn(
            "flex items-center justify-between px-3 py-1.5 rounded-md transition-colors hover:bg-muted/60 dark:hover:bg-muted/25",
            classNames.item
          )}
        >
          <span className={cn("text-sm", classNames.label)}>{item.label}</span>
          <KbdShortcuts
            shortcuts={item.shortcuts}
            separator={item.separator}
            classNames={{
              root: classNames.root,
              key: classNames.key,
              separator: classNames.separator,
            }}
          />
        </div>
      ))}
    </div>
  );
};
