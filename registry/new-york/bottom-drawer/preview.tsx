import React, { useState } from "react";
import { BottomDrawer } from "@/registry/new-york/bottom-drawer/BottomDrawer";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export default function BottomDrawerPreview() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap gap-4">
        <Button onClick={() => setOpen(true)}>Open Default Drawer</Button>
        <BottomDrawer open={open} onOpenChange={setOpen} title="Default Drawer">
          <div className="p-4">
            <p className="text-zinc-600 dark:text-zinc-400">
              This is a simple drawer component built on top of Vaul.
            </p>
          </div>
        </BottomDrawer>
      </div>

      <div className="flex flex-wrap gap-4">
        <BottomDrawer
          trigger={<Button variant="outline">Custom Trigger</Button>}
          title="Drawer with Custom Trigger"
        >
          <div className="p-4">
            <p className="text-zinc-600 dark:text-zinc-400">
              This drawer uses a custom trigger element.
            </p>
          </div>
        </BottomDrawer>
      </div>

      <div className="flex flex-wrap gap-4">
        <BottomDrawer
          trigger={<Button variant="secondary">Custom Header</Button>}
          renderHeader={({ handle, close }) => (
            <div className="flex flex-col">
              {handle}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold">Custom Header</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0"
                  onClick={close}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        >
          <div className="p-4">
            <p className="text-zinc-600 dark:text-zinc-400">
              This drawer has a custom header with a close button.
            </p>
          </div>
        </BottomDrawer>
      </div>

      <div className="flex flex-wrap gap-4">
        <BottomDrawer
          trigger={<Button variant="destructive">No Header</Button>}
          renderHeader={null}
        >
          <div className="p-6">
            <h2 className="text-lg font-semibold mb-4">No Header</h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              This drawer has no header or handle.
            </p>
          </div>
        </BottomDrawer>
      </div>

      <div className="flex flex-wrap gap-4">
        <BottomDrawer
          trigger={<Button variant="outline">Custom Styles</Button>}
          title="Custom Styled Drawer"
          classNames={{
            overlay: "bg-blue-950/40 backdrop-blur-sm",
            content: "bg-blue-50 dark:bg-blue-950 max-w-md",
            handle: "bg-blue-400 dark:bg-blue-600 w-16",
            title: "text-blue-800 dark:text-blue-300 text-xl",
          }}
        >
          <div className="p-4">
            <p className="text-blue-600 dark:text-blue-400">
              This drawer has custom styling applied to various parts.
            </p>
          </div>
        </BottomDrawer>
      </div>
    </div>
  );
}
