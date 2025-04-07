import React from "react";
import { ReactFC } from "@/lib/utils";
import {
  SimpleDropdownMenu,
  SimpleDropdownMenuProps,
} from "./SimpleDropdownMenu";
import { BottomDrawerMenu } from "@/registry/new-york/bottom-drawer/BottomDrawerMenu";
import { useKitzeUI } from "@/registry/new-york/kitze-ui-context/KitzeUIContext";
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
  const { isOpen, setIsOpen } = useControlledOpen({
    open,
    onOpenChange,
  });

  // On mobile, render content in a bottom drawer
  if (isMobile) {
    return (
      <>
        <div onClick={() => setIsOpen(true)}>{children}</div>
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
