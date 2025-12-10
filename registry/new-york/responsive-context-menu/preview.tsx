"use client";

import React from "react";
import { ResponsiveContextMenu } from "./ResponsiveContextMenu";
import { Button } from "@/components/ui/button";
import { CommonMenuItem } from "@/registry/new-york/simple-dropdown-menu/CommonMenuItem";
import { CommonMenuLabel } from "@/registry/new-york/simple-dropdown-menu/CommonMenuLabel";
import { CommonMenuSeparator } from "@/registry/new-york/simple-dropdown-menu/CommonMenuSeparator";
import { Copy, Edit, Trash, Share } from "lucide-react";

const Preview = () => {
  const menuContent = (
    <>
      <CommonMenuLabel>Actions</CommonMenuLabel>
      <CommonMenuItem leftIcon={Copy}>Copy</CommonMenuItem>
      <CommonMenuItem leftIcon={Edit}>Edit</CommonMenuItem>
      <CommonMenuItem leftIcon={Share}>Share</CommonMenuItem>
      <CommonMenuSeparator />
      <CommonMenuItem leftIcon={Trash} destructive>
        Delete
      </CommonMenuItem>
    </>
  );

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 p-4">
      {/* Example 1: mobileView="keep" (Default Context Menu) */}
      <ResponsiveContextMenu content={menuContent} mobileView="keep">
        <Button variant="outline">Right-click me (Keep)</Button>
      </ResponsiveContextMenu>

      {/* Example 2: mobileView="bottom-drawer" */}
      <ResponsiveContextMenu
        content={menuContent}
        mobileView="bottom-drawer"
        drawerTitle="Item Actions"
      >
        <Button variant="secondary">Long-press me (Drawer)</Button>
      </ResponsiveContextMenu>

      <p className="w-full text-center text-sm text-muted-foreground mt-4">
        Right-click on desktop or long-press on mobile. Use the Desktop/Mobile
        switcher to see different behaviors. This responsive version adapts to
        mobile devices.
      </p>
    </div>
  );
};

export default Preview;
