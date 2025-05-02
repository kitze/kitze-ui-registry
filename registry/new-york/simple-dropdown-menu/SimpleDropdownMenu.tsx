import React from "react";
import { ReactFC } from "@/lib/types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuProvider } from "@/registry/new-york/menu-context/MenuContext";
import { useControlledOpen } from "@/registry/hooks/useControlledOpen";
import { useKitzeUI } from "@/registry/new-york/kitze-ui-context/KitzeUIContext";
import { BottomDrawerMenu } from "@/registry/new-york/bottom-drawer/BottomDrawerMenu";

// Define MobileViewType for Dropdown
export type DropdownMobileViewType = "keep" | "bottom-drawer";

export interface SimpleDropdownMenuClassNames {
  content?: string;
  drawerContent?: string; // Optional class for drawer content wrapper
}

export interface SimpleDropdownMenuProps {
  children: React.ReactNode; // This is the trigger
  content: React.ReactNode; // This is the menu content
  classNames?: SimpleDropdownMenuClassNames;
  align?: "start" | "center" | "end";
  side?: "top" | "right" | "bottom" | "left";
  closeOnClick?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  // Mobile specific props
  mobileView?: DropdownMobileViewType;
  drawerTitle?: string;
}

export const SimpleDropdownMenu: ReactFC<SimpleDropdownMenuProps> = ({
  children,
  content,
  classNames = {},
  align = "center",
  side = "bottom",
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
      close();
    }
  };

  // --- Mobile Rendering (Bottom Drawer) ---
  if (isMobile && mobileView === "bottom-drawer") {
    return (
      <BottomDrawerMenu
        title={drawerTitle}
        open={isOpen}
        onOpenChange={setIsOpen}
        content={content}
        closeOnClick={closeOnClick}
      >
        {children}
      </BottomDrawerMenu>
    );
  }

  // --- Default Dropdown Rendering (Desktop or mobileView='keep') ---
  return (
    <MenuProvider menuType="dropdown" closeMenu={closeMenu}>
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
        <DropdownMenuContent
          className={classNames.content} // Class for desktop dropdown
          align={align}
          side={side}
        >
          {content}
        </DropdownMenuContent>
      </DropdownMenu>
    </MenuProvider>
  );
};
