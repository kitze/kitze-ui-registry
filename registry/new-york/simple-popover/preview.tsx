"use client";

import React from "react";
import { SimplePopover } from ".";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";

const Preview = () => {
  const popoverContent = (
    <div className="p-4">
      <p>Popover / Drawer Content</p>
      <Button size="sm" className="mt-2">
        Action
      </Button>
    </div>
  );

  return (
    // Single container for examples
    <div className="flex flex-wrap items-center justify-center gap-4 p-4">
      {/* Example 1: mobileView="keep" (Default Popover) */}
      <SimplePopover
        trigger={<Button variant="outline">Keep as Popover</Button>}
        content={popoverContent}
        mobileView="keep"
      />

      {/* Example 2: mobileView="bottom-drawer" */}
      <SimplePopover
        trigger={<Button variant="secondary">Drawer on Mobile</Button>}
        content={popoverContent}
        mobileView="bottom-drawer"
        drawerTitle="Popover Content"
      />

      {/* Example with Icon trigger */}
      <SimplePopover
        trigger={
          <Button variant="ghost" size="icon" aria-label="Settings">
            <Settings className="h-4 w-4" />
          </Button>
        }
        content={popoverContent}
        mobileView="bottom-drawer" // Example: Icon also becomes drawer trigger
        drawerTitle="Settings"
        align="end"
      />

      {/* Add a note about the switcher */}
      <p className="w-full text-center text-sm text-muted-foreground mt-4">
        Use the Desktop/Mobile switcher above to see the different mobile
        behaviors.
      </p>
    </div>
  );
};

export default Preview;
