import React from "react";
import { cn, ReactFC } from "@/lib/utils";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { MenuProvider } from "@/registry/new-york/menu-context/MenuContext";
import { useControlledOpen } from "@/registry/hooks/useControlledOpen";

export interface SimpleContextMenuClassNames {
  content?: string;
}

export interface SimpleContextMenuProps {
  children: React.ReactNode;
  content: React.ReactNode;
  classNames?: SimpleContextMenuClassNames;
  closeOnClick?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export const SimpleContextMenu: ReactFC<SimpleContextMenuProps> = ({
  children,
  content,
  classNames = {},
  closeOnClick = true,
  open,
  onOpenChange,
}) => {
  // Use the controlled open state but don't apply it directly to ContextMenu
  // because radix context menu doesn't support controlled state
  useControlledOpen({
    open,
    onOpenChange,
  });

  // Function to close the menu when clicking on menu items
  const closeMenu = () => {
    if (closeOnClick && onOpenChange) {
      onOpenChange(false);
    }
  };

  // Prevent text selection on long press for mobile
  const preventTextSelection = (e: React.TouchEvent) => {
    e.preventDefault();
  };

  return (
    <MenuProvider menuType="context" closeMenu={closeMenu}>
      <ContextMenu>
        <ContextMenuTrigger asChild>
          <div className="select-none" onTouchStart={preventTextSelection}>
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
