import React from "react";
import { ReactFC } from "@/lib/utils";
import { SimpleContextMenu, SimpleContextMenuProps } from "./SimpleContextMenu";
import { BottomDrawer } from "@/registry/new-york/bottom-drawer/BottomDrawer";
import { MenuProvider } from "@/registry/new-york/menu-context/MenuContext";
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
  const { isOpen, setIsOpen, close } = useControlledOpen({
    open,
    onOpenChange,
  });

  // Function to close the menu when clicking on menu items
  const closeMenu = () => {
    if (closeOnClick) {
      close();
    }
  };

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

      <BottomDrawer
        open={isOpen}
        onOpenChange={setIsOpen}
        title={drawerTitle}
        trigger={null}
      >
        <MenuProvider menuType="bottom-drawer" closeMenu={closeMenu}>
          <div className="flex flex-col">{content}</div>
        </MenuProvider>
      </BottomDrawer>
    </>
  );
};
