"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ReactFC } from "@/lib/types";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useKitzeUI } from "@/registry/new-york/kitze-ui-context/KitzeUIContext";
import { useControlledOpen } from "@/registry/hooks/useControlledOpen";
import {
  BottomDrawer,
  BottomDrawerProps,
} from "@/registry/new-york/bottom-drawer/BottomDrawer";

// Define MobileViewType for Popover
export type PopoverMobileViewType = "keep" | "bottom-drawer";

export interface SimplePopoverClassNames {
  content?: string;
  drawer?: string; // Class for drawer content
}

export interface SimplePopoverProps {
  trigger?: React.ReactNode;
  content: React.ReactNode;
  classNames?: SimplePopoverClassNames;
  align?: "start" | "center" | "end";
  sideOffset?: number;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  // Mobile specific props
  mobileView?: PopoverMobileViewType;
  drawerTitle?: string;
  drawerProps?: Partial<
    Omit<
      BottomDrawerProps,
      "children" | "trigger" | "title" | "open" | "onOpenChange"
    >
  >;
}

export const SimplePopover: ReactFC<SimplePopoverProps> = ({
  trigger,
  content,
  classNames = {},
  align = "center",
  sideOffset = 4,
  open,
  onOpenChange,
  mobileView = "keep",
  drawerTitle,
  drawerProps = {},
}) => {
  const { isMobile } = useKitzeUI();
  const { isOpen, setIsOpen } = useControlledOpen({
    open,
    onOpenChange,
  });

  // --- Mobile Rendering (Bottom Drawer) ---
  if (isMobile && mobileView === "bottom-drawer") {
    return (
      <BottomDrawer
        open={isOpen}
        onOpenChange={setIsOpen}
        trigger={trigger}
        title={drawerTitle}
        classNames={{
          content: cn(classNames.drawer, drawerProps.classNames?.content), // Combine classes
          ...drawerProps.classNames,
        }}
        {...drawerProps}
      >
        {/* Apply padding or specific styling if needed */}
        <div className="py-2">{content}</div>
      </BottomDrawer>
    );
  }

  // --- Default Popover Rendering (Desktop or mobileView='keep') ---
  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      {trigger && <PopoverTrigger asChild>{trigger}</PopoverTrigger>}
      <PopoverContent
        className={classNames.content}
        align={align}
        sideOffset={sideOffset}
      >
        {content}
      </PopoverContent>
    </Popover>
  );
};
