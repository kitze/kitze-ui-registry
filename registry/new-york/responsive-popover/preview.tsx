import React, { useState } from "react";
import { ResponsivePopover } from "./index";
import { Button } from "@/components/ui/button";

export default function ResponsivePopoverPreview() {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const contentExample = (
    <div className="p-2">
      <h4 className="font-medium mb-2">Popover Content</h4>
      <p className="text-sm text-muted-foreground">
        This shows as a popover on desktop and a drawer on mobile.
      </p>
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center gap-8 p-8">
      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-medium">Basic Responsive Popover</h3>
        <ResponsivePopover
          trigger={<Button variant="outline">Click me</Button>}
          content={contentExample}
          drawerTitle="Responsive Example"
        />
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-medium">Controlled Responsive Popover</h3>
        <div className="flex flex-col items-center gap-4">
          <ResponsivePopover
            open={popoverOpen}
            onOpenChange={setPopoverOpen}
            trigger={
              <Button variant="outline">
                Controlled ({popoverOpen ? "Open" : "Closed"})
              </Button>
            }
            content={contentExample}
            drawerTitle="Controlled Example"
          />
          <Button
            variant="secondary"
            onClick={() => setPopoverOpen(!popoverOpen)}
          >
            Toggle Popover
          </Button>
        </div>
      </div>
    </div>
  );
}
