import * as React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export interface SimplePopoverProps {
  trigger: React.ReactNode;
  content: React.ReactNode;
  classNames?: {
    content?: string;
    trigger?: string;
  };
  align?: "start" | "center" | "end";
  sideOffset?: number;
}

export const SimplePopover = ({
  trigger,
  content,
  classNames = {},
  align = "center",
  sideOffset = 4,
}: SimplePopoverProps) => {
  return (
    <Popover>
      <PopoverTrigger className={classNames.trigger}>{trigger}</PopoverTrigger>
      <PopoverContent
        className={cn("w-auto min-w-[200px]", classNames.content)}
        align={align}
        sideOffset={sideOffset}
      >
        {content}
      </PopoverContent>
    </Popover>
  );
};
