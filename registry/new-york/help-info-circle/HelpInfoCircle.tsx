import React from "react";
import { HelpCircle } from "lucide-react";
import { ResponsiveTooltip } from "@/registry/new-york/responsive-tooltip/ResponsiveTooltip";
import { ReactFC } from "@/lib/utils";
import { cn } from "@/lib/utils";

export interface HelpInfoCircleProps {
  content: React.ReactNode;
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
  drawerTitle?: string;
  isMobile?: boolean;
}

export const HelpInfoCircle: ReactFC<HelpInfoCircleProps> = ({
  content,
  className,
  iconClassName,
  tooltipClassName,
  drawerTitle = "Help Information",
  isMobile = false,
}) => {
  return (
    <ResponsiveTooltip
      content={content}
      tooltipClassName={tooltipClassName}
      drawerTitle={drawerTitle}
      className={className}
      isMobile={isMobile}
    >
      <span className={cn("inline-flex cursor-pointer", className)}>
        <HelpCircle
          className={cn(
            "h-4 w-4 text-muted-foreground hover:text-foreground transition-colors",
            iconClassName
          )}
        />
      </span>
    </ResponsiveTooltip>
  );
};
