import React from "react";
import { ReactFC } from "@/lib/types";
import { DropdownMenuGroup } from "@/components/ui/dropdown-menu";
import { ContextMenuGroup } from "@/components/ui/context-menu";
import { useMenuContext } from "@/registry/new-york/menu-context/MenuContext";
import { BottomDrawerMenuGroup } from "@/registry/new-york/bottom-drawer/BottomDrawerMenuComponents";

export interface CommonMenuGroupProps {
  children: React.ReactNode;
  className?: string;
}

export const CommonMenuGroup: ReactFC<CommonMenuGroupProps> = ({
  children,
  className,
}) => {
  const { menuType } = useMenuContext();

  // If bottom drawer, use BottomDrawerMenuGroup
  if (menuType === "bottom-drawer") {
    return (
      <BottomDrawerMenuGroup className={className}>
        {children}
      </BottomDrawerMenuGroup>
    );
  }

  // Otherwise use dropdown or context menu group
  const MenuGroup =
    menuType === "dropdown" ? DropdownMenuGroup : ContextMenuGroup;

  return <MenuGroup className={className}>{children}</MenuGroup>;
};
