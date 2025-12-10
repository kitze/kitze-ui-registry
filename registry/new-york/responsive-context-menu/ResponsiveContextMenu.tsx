import React from "react";
import { ReactFC } from "@/lib/types";
import { useKitzeUI } from "@/registry/new-york/kitze-ui-context/KitzeUIContext";
import { BottomDrawerMenu } from "@/registry/new-york/bottom-drawer/BottomDrawerMenu";
import {
  SimpleContextMenu,
  SimpleContextMenuProps,
} from "@/registry/new-york/simple-context-menu/SimpleContextMenu";
import { useControlledOpen } from "@/registry/hooks/useControlledOpen";
import { useLongPress } from "use-long-press";

export type ContextMenuMobileViewType = "keep" | "bottom-drawer";

export interface ResponsiveContextMenuProps
  extends Omit<SimpleContextMenuProps, "classNames"> {
  mobileView?: ContextMenuMobileViewType;
  drawerTitle?: string;
  open?: boolean;
  classNames?: SimpleContextMenuProps["classNames"] & {
    drawerContent?: string;
  };
}

export const ResponsiveContextMenu: ReactFC<ResponsiveContextMenuProps> = ({
  mobileView = "keep",
  drawerTitle,
  classNames = {},
  children,
  content,
  closeOnClick = true,
  open,
  onOpenChange,
  ...props
}) => {
  const { isMobile } = useKitzeUI();
  const { isOpen, setIsOpen, close } = useControlledOpen({
    open,
    onOpenChange,
  });

  // Extract drawer-specific classNames
  const { drawerContent, ...simpleContextClassNames } = classNames;

  // Function to close the menu when clicking on menu items
  const closeMenu = () => {
    if (closeOnClick) {
      close();
    }
  };

  // Long press binding for mobile drawer trigger
  const bind = useLongPress(
    () => {
      // Only open drawer if mobileView is set and we're on mobile
      if (isMobile && mobileView === "bottom-drawer") {
        setIsOpen(true);
      }
    },
    {
      // Only detect long press on mobile when drawer is the intended view
      filterEvents: () => isMobile && mobileView === "bottom-drawer",
      cancelOnMovement: false,
      threshold: 500,
      captureEvent: true, // Prevent default context menu on mobile long press
    }
  );

  // If mobile and using bottom-drawer, render long press + BottomDrawerMenu
  if (isMobile && mobileView === "bottom-drawer") {
    return (
      <>
        {/* Bind long press to the children wrapper */}
        <div className="select-none" {...bind()}>
          {children}
        </div>
        {/* Drawer renders separately and is controlled by isOpen state */}
        <BottomDrawerMenu
          open={isOpen}
          onOpenChange={setIsOpen}
          title={drawerTitle}
          closeOnClick={closeOnClick}
          content={content}
        >
          {/* Trigger is handled by the long press bind, no visual trigger needed here */}
          {null}
        </BottomDrawerMenu>
      </>
    );
  }

  // Otherwise, render SimpleContextMenu
  return (
    <SimpleContextMenu
      onOpenChange={onOpenChange}
      content={content}
      closeOnClick={closeOnClick}
      classNames={simpleContextClassNames}
      {...props}
    >
      {/* We need a div wrapper for long press prevention even if not using drawer */}
      <div className="select-none" {...bind()}>
        {children}
      </div>
    </SimpleContextMenu>
  );
};
