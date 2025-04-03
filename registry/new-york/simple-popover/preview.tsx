import React from "react";
import { SimplePopover } from "./index";
import { Button } from "@/components/ui/button";

export default function SimplePopoverPreview() {
  return (
    <div className="flex items-center justify-center p-8">
      <SimplePopover
        trigger={<Button variant="outline">Open Popover</Button>}
        content={
          <div className="p-2">
            <h4 className="font-medium mb-2">Popover Title</h4>
            <p className="text-sm text-muted-foreground">
              This is the popover content.
            </p>
          </div>
        }
      />
    </div>
  );
}
