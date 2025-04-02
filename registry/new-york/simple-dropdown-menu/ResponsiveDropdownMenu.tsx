import React from "react";
import { ReactFC } from "@/lib/utils";
import {
  SimpleDropdownMenu,
  SimpleDropdownMenuProps,
} from "./SimpleDropdownMenu";
import { BottomDrawer } from "@/registry/new-york/bottom-drawer/BottomDrawer";
import { MenuProvider } from "@/registry/new-york/KitzeUIContext/MenuContext";
import { useKitzeUI } from "@/registry/new-york/KitzeUIContext/KitzeUIContext";
import { useControlledOpen } from "@/registry/hooks/useControlledOpen";

export interface ResponsiveDropdownMenuProps extends SimpleDropdownMenuProps {
  drawerTitle?: string;
  closeOnClick?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export const ResponsiveDropdownMenu: ReactFC<ResponsiveDropdownMenuProps> = ({
  children,
  content,
  drawerTitle,
  closeOnClick = true,
  open,
  onOpenChange,
  classNames = {},
  align = "center",
  side = "bottom",
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

  // On mobile, render content in a bottom drawer
  if (isMobile) {
    return (
      <>
        <div onClick={() => setIsOpen(true)}>{children}</div>
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
  }

  // On desktop, render regular dropdown
  return (
    <SimpleDropdownMenu
      content={content}
      classNames={classNames}
      align={align}
      side={side}
    >
      {children}
    </SimpleDropdownMenu>
  );
};
