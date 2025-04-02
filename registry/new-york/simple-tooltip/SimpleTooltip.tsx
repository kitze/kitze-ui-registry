"use client";

import * as React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TooltipPortal } from "@radix-ui/react-tooltip";
import { cn } from "@/lib/utils";

interface SimpleTooltipProps {
  children: React.ReactNode;
  content: string;
  className?: string;
  tooltipClassName?: string;
}

export const SimpleTooltip: React.FC<SimpleTooltipProps> = ({
  children,
  content,
  className,
  tooltipClassName,
}): React.ReactNode => {
  if (!content) {
    return children;
  }

  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild className={className}>
          {children}
        </TooltipTrigger>
        <TooltipPortal>
          <TooltipContent className={cn("max-w-[200px]", tooltipClassName)}>
            {content}
          </TooltipContent>
        </TooltipPortal>
      </Tooltip>
    </TooltipProvider>
  );
};
