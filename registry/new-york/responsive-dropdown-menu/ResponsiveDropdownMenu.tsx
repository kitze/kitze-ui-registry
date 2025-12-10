import React from "react";
import { ReactFC } from "@/lib/types";
import { useKitzeUI } from "@/registry/new-york/kitze-ui-context/KitzeUIContext";
import { BottomDrawerMenu } from "@/registry/new-york/bottom-drawer/BottomDrawerMenu";
import {
  SimpleDropdownMenu,
  SimpleDropdownMenuProps,
} from "@/registry/new-york/simple-dropdown-menu/SimpleDropdownMenu";

export type DropdownMobileViewType = "keep" | "bottom-drawer";

export interface ResponsiveDropdownMenuProps
  extends Omit<SimpleDropdownMenuProps, "classNames"> {
  mobileView?: DropdownMobileViewType;
  drawerTitle?: string;
  classNames?: SimpleDropdownMenuProps["classNames"] & {
    drawerContent?: string;
  };
}

export const ResponsiveDropdownMenu: ReactFC<ResponsiveDropdownMenuProps> = ({
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

  // Extract drawer-specific classNames
  const { drawerContent, ...simpleDropdownClassNames } = classNames;

  // If mobile and using bottom-drawer, render BottomDrawerMenu
  if (isMobile && mobileView === "bottom-drawer") {
    return (
      <BottomDrawerMenu
        title={drawerTitle}
        open={open}
        onOpenChange={onOpenChange}
        content={content}
        closeOnClick={closeOnClick}
      >
        {children}
      </BottomDrawerMenu>
    );
  }

  // Otherwise, render SimpleDropdownMenu
  return (
    <SimpleDropdownMenu
      open={open}
      onOpenChange={onOpenChange}
      content={content}
      closeOnClick={closeOnClick}
      classNames={simpleDropdownClassNames}
      {...props}
    >
      {children}
    </SimpleDropdownMenu>
  );
};
