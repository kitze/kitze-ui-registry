import * as React from "react";
import { useKitzeUI } from "@/registry/new-york/KitzeUIContext/KitzeUIContext";
import { useControlledOpen } from "@/registry/hooks/useControlledOpen";
import { SimplePopover } from "@/registry/new-york/simple-popover";
import {
  BottomDrawer,
  BottomDrawerProps,
} from "@/registry/new-york/bottom-drawer/BottomDrawer";
import { cn } from "@/lib/utils";

export interface ResponsivePopoverProps {
  trigger: React.ReactNode;
  content: React.ReactNode;
  classNames?: {
    content?: string;
    trigger?: string;
    drawer?: string;
  };
  align?: "start" | "center" | "end";
  sideOffset?: number;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  drawerTitle?: string;
  drawerProps?: Partial<BottomDrawerProps>;
}

export const ResponsivePopover = ({
  trigger,
  content,
  classNames = {},
  align = "center",
  sideOffset = 4,
  open,
  onOpenChange,
  drawerTitle,
  drawerProps = {},
}: ResponsivePopoverProps) => {
  const { isMobile } = useKitzeUI();
  const { isOpen, setIsOpen } = useControlledOpen({
    open,
    onOpenChange,
  });

  if (isMobile) {
    return (
      <BottomDrawer
        open={isOpen}
        onOpenChange={setIsOpen}
        trigger={trigger}
        title={drawerTitle}
        classNames={{
          content: cn(classNames.drawer),
          ...drawerProps.classNames,
        }}
        {...drawerProps}
      >
        <div className="py-2">{content}</div>
      </BottomDrawer>
    );
  }

  return (
    <SimplePopover
      trigger={trigger}
      content={content}
      classNames={classNames}
      align={align}
      sideOffset={sideOffset}
    />
  );
};
