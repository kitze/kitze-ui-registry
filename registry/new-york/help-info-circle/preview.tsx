"use client";

import * as React from "react";
import { HelpInfoCircle } from "./HelpInfoCircle";
import { Button } from "@/components/ui/button";

export function Preview() {
  const [isMobile, setIsMobile] = React.useState(false);

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-medium">Help Info Circle</h3>

        <div className="mb-4">
          <Button variant="outline" onClick={() => setIsMobile(!isMobile)}>
            Toggle Mode: {isMobile ? "Mobile" : "Desktop"}
          </Button>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <span>Field Label</span>
            <HelpInfoCircle content="This help icon provides additional information about the field" />
          </div>

          <div className="flex items-center gap-2">
            <span>Advanced Settings</span>
            <HelpInfoCircle
              content={
                <div className="space-y-2">
                  <p>
                    <strong>Advanced settings</strong> allow you to:
                  </p>
                  <ul className="list-disc pl-5">
                    <li>Configure caching</li>
                    <li>Set up monitoring</li>
                    <li>Define custom fallbacks</li>
                  </ul>
                </div>
              }
              iconClassName="h-5 w-5 text-blue-500"
              tooltipClassName="max-w-xs"
              drawerTitle="Advanced Settings Help"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
