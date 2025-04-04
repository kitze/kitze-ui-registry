"use client";

import * as React from "react";
import { ResponsiveTooltip } from "./ResponsiveTooltip";
import { Button } from "@/components/ui/button";

export function Preview() {
  const [isMobile, setIsMobile] = React.useState(false);

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-medium">Responsive Tooltip</h3>

        <div className="mb-4">
          <Button variant="outline" onClick={() => setIsMobile(!isMobile)}>
            Toggle Mode: {isMobile ? "Mobile" : "Desktop"}
          </Button>
        </div>

        <div className="flex gap-4">
          <ResponsiveTooltip
            content="This is a responsive tooltip that shows as a tooltip on desktop and a drawer on mobile"
            isMobile={isMobile}
          >
            <Button variant="outline">Hover/Click me</Button>
          </ResponsiveTooltip>

          <ResponsiveTooltip
            content={
              <div>
                This tooltip can contain <strong>rich content</strong> too!
              </div>
            }
            tooltipClassName="bg-blue-500 text-white"
            drawerTitle="Custom Title"
            isMobile={isMobile}
          >
            <Button variant="outline">With custom styling</Button>
          </ResponsiveTooltip>
        </div>
      </div>
    </div>
  );
}
