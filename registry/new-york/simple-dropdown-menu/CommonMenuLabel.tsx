import React from "react";
import { ReactFC } from "@/lib/utils";
import { DropdownMenuLabel } from "@/components/ui/dropdown-menu";
import { ContextMenuLabel } from "@/components/ui/context-menu";
import { useMenuContext } from "@/registry/new-york/KitzeUIContext/MenuContext";
import { cn } from "@/lib/utils";
import { BottomDrawerMenuLabel } from "@/registry/new-york/bottom-drawer/BottomDrawerMenuComponents";

export interface CommonMenuLabelProps {
  children: React.ReactNode;
  className?: string;
}

export const CommonMenuLabel: ReactFC<CommonMenuLabelProps> = ({
  children,
  className,
}) => {
  const { menuType } = useMenuContext();

  // If bottom drawer, use BottomDrawerMenuLabel
  if (menuType === "bottom-drawer") {
    return (
      <BottomDrawerMenuLabel className={className}>
        {children}
      </BottomDrawerMenuLabel>
    );
  }

  // Otherwise use dropdown or context menu label
  const MenuLabel =
    menuType === "dropdown" ? DropdownMenuLabel : ContextMenuLabel;

  return <MenuLabel className={cn(className)}>{children}</MenuLabel>;
};
