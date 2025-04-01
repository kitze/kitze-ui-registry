"use client";

import * as React from "react";
import { ConditionalTooltip } from "./ConditionalTooltip";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function Preview() {
  const [showTooltip, setShowTooltip] = React.useState(false);

  return (
    <div className="flex flex-col items-center gap-4">
      <Button variant="outline" onClick={() => setShowTooltip((s) => !s)}>
        Toggle Tooltip: {showTooltip ? "On" : "Off"}
      </Button>

      <Card className="p-4">
        <ConditionalTooltip
          condition={showTooltip}
          content="This tooltip only shows when the condition is true"
          classNames={{
            tooltip: "bg-green-500 text-white",
          }}
        >
          <Button variant="outline">
            {showTooltip ? "Now I have a tooltip" : "No tooltip here"}
          </Button>
        </ConditionalTooltip>
      </Card>
    </div>
  );
}
