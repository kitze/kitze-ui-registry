"use client";

import React from "react";
import { SimpleTooltip } from "./SimpleTooltip";
import { Button } from "@/components/ui/button";
import { Info, HelpCircle, Popcorn, Monitor } from "lucide-react";

const Preview = () => {
  return (
    // Single container for examples
    <div className="flex flex-wrap items-center justify-center gap-4 p-4">
      {/* Example 1: mobileView="keep" (Default Tooltip) */}
      <SimpleTooltip
        content="Stays a tooltip on mobile (mobileView='keep')"
        mobileView="keep" // Default behavior, technically optional
      >
        <Button variant="outline" size="icon">
          <Monitor className="h-4 w-4" />
        </Button>
      </SimpleTooltip>

      {/* Example 2: mobileView="popover" */}
      <SimpleTooltip
        content="Becomes popover on mobile (mobileView='popover')"
        mobileView="popover"
      >
        <Button variant="secondary">
          <Popcorn className="mr-2 h-4 w-4" /> Popover on Mobile
        </Button>
      </SimpleTooltip>

      {/* Example 3: mobileView="bottom-drawer" */}
      <SimpleTooltip
        content={
          <div>
            <HelpCircle className="inline mr-2 h-5 w-5" />
            <span>Rich content in a drawer (mobileView='bottom-drawer')</span>
          </div>
        }
        mobileView="bottom-drawer"
        drawerTitle="Details"
      >
        <Button variant="ghost">
          <HelpCircle className="mr-2 h-4 w-4" /> Drawer on Mobile
        </Button>
      </SimpleTooltip>

      {/* Add a note about the switcher */}
      <p className="w-full text-center text-sm text-muted-foreground mt-4">
        Use the Desktop/Mobile switcher above to see the different mobile
        behaviors.
      </p>
    </div>
  );
};

export default Preview;
