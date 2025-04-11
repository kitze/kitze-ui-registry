import React from "react";
import { cn, ReactFC } from "@/lib/utils";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { MenuProvider } from "@/registry/new-york/menu-context/MenuContext";
import { useControlledOpen } from "@/registry/hooks/useControlledOpen";
import { useKitzeUI } from "@/registry/new-york/kitze-ui-context/KitzeUIContext";
import { useLongPress } from "use-long-press";
import { BottomDrawerMenu } from "@/registry/new-york/bottom-drawer/BottomDrawerMenu";

// Define MobileViewType for ContextMenu
export type ContextMenuMobileViewType = "keep" | "bottom-drawer";

export interface SimpleContextMenuClassNames {
  content?: string;
  drawerContent?: string; // Optional class for drawer content wrapper
}

export interface SimpleContextMenuProps {
  children: React.ReactNode; // The element that triggers the menu
  content: React.ReactNode; // The menu content
  classNames?: SimpleContextMenuClassNames;
  closeOnClick?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  // Mobile specific props
  mobileView?: ContextMenuMobileViewType;
  drawerTitle?: string;
}

export const SimpleContextMenu: ReactFC<SimpleContextMenuProps> = ({
  children,
  content,
  classNames = {},
  closeOnClick = true,
  open,
  onOpenChange,
  mobileView = "keep",
  drawerTitle,
}) => {
  const { isMobile } = useKitzeUI();
  const { isOpen, setIsOpen, close } = useControlledOpen({
    open,
    onOpenChange,
  });

  // Function to close the menu when clicking on menu items
  const closeMenu = () => {
    if (closeOnClick) {
      close(); // Close controlled state
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

  // --- Mobile Rendering (Bottom Drawer via Long Press) ---
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

  // --- Default Context Menu Rendering (Desktop or mobileView='keep') ---
  // Note: Radix ContextMenu doesn't easily support controlled open state.
  // We use the hook for onOpenChange handling but let Radix manage open internally.
  return (
    <MenuProvider menuType="context" closeMenu={closeMenu}>
      <ContextMenu onOpenChange={onOpenChange}>
        {" "}
        {/* Pass onOpenChange if provided */}
        <ContextMenuTrigger asChild>
          {/* We need a div wrapper for long press prevention even if not using drawer */}
          <div className="select-none" {...bind()}>
            {children}
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent className={cn(classNames.content, "select-none")}>
          {content}
        </ContextMenuContent>
      </ContextMenu>
    </MenuProvider>
  );
};
