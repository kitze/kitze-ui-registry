import React from "react";
import { ReactFC } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuProvider } from "@/registry/new-york/menu-context/MenuContext";
import { useControlledOpen } from "@/registry/hooks/useControlledOpen";

export interface SimpleDropdownMenuClassNames {
  content?: string;
}

export interface SimpleDropdownMenuProps {
  children: React.ReactNode;
  content: React.ReactNode;
  classNames?: SimpleDropdownMenuClassNames;
  align?: "start" | "center" | "end";
  side?: "top" | "right" | "bottom" | "left";
  closeOnClick?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
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
}) => {
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

  return (
    <MenuProvider menuType="dropdown" closeMenu={closeMenu}>
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
        <DropdownMenuContent
          className={classNames.content}
          align={align}
          side={side}
        >
          {content}
        </DropdownMenuContent>
      </DropdownMenu>
    </MenuProvider>
  );
};
