import React from "react";
import { ReactFC } from "@/lib/utils";
import { BottomDrawer } from "./BottomDrawer";
import { MenuProvider } from "@/registry/new-york/menu-context/MenuContext";

export interface BottomDrawerMenuProps {
  children: React.ReactNode;
  content: React.ReactNode;
  title?: string;
}

export const BottomDrawerMenu: ReactFC<BottomDrawerMenuProps> = ({
  children,
  content,
  title,
}) => {
  return (
    <BottomDrawer
      title={title}
      trigger={children}
      classNames={{
        childrenWrapper: "px-0",
      }}
    >
      <MenuProvider menuType="bottom-drawer">
        <div className="flex flex-col">{content}</div>
      </MenuProvider>
    </BottomDrawer>
  );
};
