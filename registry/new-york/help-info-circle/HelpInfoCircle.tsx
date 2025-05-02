import React from "react";
import { HelpCircle } from "lucide-react";
import {
  SimpleTooltip,
  TooltipMobileViewType,
} from "@/registry/new-york/simple-tooltip/SimpleTooltip";
import { ReactFC } from "@/lib/types";
import { cn } from "@/lib/utils";

export interface HelpInfoCircleProps {
  content: React.ReactNode;
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
  drawerTitle?: string;
  mobileView?: TooltipMobileViewType;
}

export const HelpInfoCircle: ReactFC<HelpInfoCircleProps> = ({
  content,
  className,
  iconClassName,
  tooltipClassName,
  drawerTitle = "Help Information",
  mobileView = "bottom-drawer",
}) => {
  return (
    <SimpleTooltip
      content={content}
      tooltipClassName={tooltipClassName}
      drawerTitle={drawerTitle}
      className={className}
      mobileView={mobileView}
    >
      <span className={cn("inline-flex cursor-pointer")}>
        <HelpCircle
          className={cn(
            "h-4 w-4 text-muted-foreground hover:text-foreground transition-colors",
            iconClassName
          )}
        />
      </span>
    </SimpleTooltip>
  );
};
