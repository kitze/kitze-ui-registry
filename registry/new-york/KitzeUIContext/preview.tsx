import React from "react";
import { ResponsiveTooltip } from "./ResponsiveTooltip";
import { HelpInfoCircle } from "./HelpInfoCircle";
import { Button } from "@/components/ui/button";
import { InfoIcon } from "lucide-react";

export default function KitzeUIContextPreview() {
  return (
    <div className="flex flex-col gap-8">
      <div className="border rounded-lg p-6">
        <h3 className="text-lg font-medium mb-4">Desktop View (Tooltips)</h3>
        <div className="flex flex-col gap-6">
          <div className="flex gap-4 items-center">
            <h4 className="font-medium">ResponsiveTooltip:</h4>
            <ResponsiveTooltip
              content="This is a responsive tooltip. On desktop it shows as a tooltip, on mobile it opens a drawer."
              isMobile={false}
            >
              <Button variant="outline" size="sm">
                Hover me
              </Button>
            </ResponsiveTooltip>
          </div>

          <div className="flex gap-4 items-center">
            <h4 className="font-medium">HelpInfoCircle:</h4>
            <span className="text-sm text-muted-foreground">
              Payment Method
            </span>
            <HelpInfoCircle
              content="We accept Visa, Mastercard, and American Express. Your payment information is securely stored and processed."
              isMobile={false}
            />
          </div>

          <div className="flex gap-4 items-center">
            <h4 className="font-medium">Custom Icon with Tooltip:</h4>
            <ResponsiveTooltip
              content="View detailed information about your account"
              isMobile={false}
            >
              <InfoIcon className="h-5 w-5 text-blue-500 cursor-pointer" />
            </ResponsiveTooltip>
          </div>
        </div>
      </div>

      <div className="border rounded-lg p-6 bg-zinc-50 dark:bg-zinc-900">
        <h3 className="text-lg font-medium mb-4">
          Mobile View (Bottom Drawers)
        </h3>
        <div className="flex flex-col gap-6">
          <div className="flex gap-4 items-center">
            <h4 className="font-medium">ResponsiveTooltip:</h4>
            <ResponsiveTooltip
              content="This is a responsive tooltip. On desktop it shows as a tooltip, on mobile it opens a drawer."
              drawerTitle="Information"
              isMobile={true}
            >
              <Button variant="outline" size="sm">
                Tap me
              </Button>
            </ResponsiveTooltip>
          </div>

          <div className="flex gap-4 items-center">
            <h4 className="font-medium">HelpInfoCircle:</h4>
            <span className="text-sm text-muted-foreground">
              Payment Method
            </span>
            <HelpInfoCircle
              content="We accept Visa, Mastercard, and American Express. Your payment information is securely stored and processed."
              drawerTitle="Payment Information"
              isMobile={true}
            />
          </div>

          <div className="flex gap-4 items-center">
            <h4 className="font-medium">Custom Icon with Tooltip:</h4>
            <ResponsiveTooltip
              content="View detailed information about your account"
              drawerTitle="Account Information"
              isMobile={true}
            >
              <InfoIcon className="h-5 w-5 text-blue-500 cursor-pointer" />
            </ResponsiveTooltip>
          </div>
        </div>
      </div>
    </div>
  );
}
