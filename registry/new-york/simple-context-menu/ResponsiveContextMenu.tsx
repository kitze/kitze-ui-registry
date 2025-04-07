import React from "react";
import { ReactFC } from "@/lib/utils";
import { SimpleContextMenu, SimpleContextMenuProps } from "./SimpleContextMenu";
import { BottomDrawerMenu } from "@/registry/new-york/bottom-drawer/BottomDrawerMenu";
import { useKitzeUI } from "@/registry/new-york/kitze-ui-context/KitzeUIContext";
import { useLongPress } from "use-long-press";
import { useControlledOpen } from "@/registry/hooks/useControlledOpen";

export interface ResponsiveContextMenuProps extends SimpleContextMenuProps {
  drawerTitle?: string;
  closeOnClick?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export const ResponsiveContextMenu: ReactFC<ResponsiveContextMenuProps> = ({
  children,
  content,
  drawerTitle,
  closeOnClick = true,
  open,
  onOpenChange,
  classNames = {},
}) => {
  const { isMobile } = useKitzeUI();
  const { isOpen, setIsOpen } = useControlledOpen({
    open,
    onOpenChange,
  });

  // Only use long press detection on mobile
  const bind = useLongPress(
    () => {
      if (isMobile) {
        setIsOpen(true);
      }
    },
    {
      onCancel: () => {
        // No operation needed on cancel
      },
      // Only detect long press on mobile
      filterEvents: () => isMobile,
      // Prevent context menu from showing on mobile
      cancelOnMovement: false,
      // Standard duration for mobile long press
      threshold: 500,
      // Prevent any default browser behavior
      captureEvent: true,
    }
  );

  // Only include context menu on desktop
  if (!isMobile) {
    return (
      <SimpleContextMenu content={content} classNames={classNames}>
        {children}
      </SimpleContextMenu>
    );
  }

  // On mobile, use long press to trigger bottom drawer
  return (
    <>
      <div className="select-none" {...bind()}>
        {children}
      </div>

      <BottomDrawerMenu
        open={isOpen}
        onOpenChange={setIsOpen}
        title={drawerTitle}
        closeOnClick={closeOnClick}
        content={content}
      >
        {null}
      </BottomDrawerMenu>
    </>
  );
};
