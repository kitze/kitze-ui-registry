"use client";

import * as React from "react";
import { SimpleTooltip } from "./SimpleTooltip";
import { Button } from "@/components/ui/button";

export function Preview() {
  const [showConditional, setShowConditional] = React.useState(false);

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-medium">Simple Tooltip</h3>
        <div className="flex gap-4">
          <SimpleTooltip content="This is a default tooltip">
            <Button variant="outline">Hover me</Button>
          </SimpleTooltip>

          <SimpleTooltip
            content="This tooltip has custom styles"
            tooltipClassName="bg-blue-500 text-white"
          >
            <Button variant="outline">Custom styled tooltip</Button>
          </SimpleTooltip>
        </div>
      </div>
    </div>
  );
}
