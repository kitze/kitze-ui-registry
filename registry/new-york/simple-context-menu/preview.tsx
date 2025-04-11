"use client";

import React from "react";
import { SimpleContextMenu } from "./SimpleContextMenu";
// Import menu item components directly from simple-dropdown-menu directory
import { CommonMenuGroup } from "@/registry/new-york/simple-dropdown-menu/CommonMenuGroup";
import { CommonMenuItem } from "@/registry/new-york/simple-dropdown-menu/CommonMenuItem";
import { CommonMenuSeparator } from "@/registry/new-york/simple-dropdown-menu/CommonMenuSeparator";
import { CommonMenuLabel } from "@/registry/new-york/simple-dropdown-menu/CommonMenuLabel";
import { CommonMenuItemEdit } from "@/registry/new-york/simple-dropdown-menu/CommonMenuItemEdit";
import { CommonMenuItemDelete } from "@/registry/new-york/simple-dropdown-menu/CommonMenuItemDelete";
import { User, Settings } from "lucide-react";

const Preview = () => {
  // Reusable content for the context menu/drawer
  const menuContent = (
    <>
      <CommonMenuLabel>Document Actions</CommonMenuLabel>
      <CommonMenuGroup>
        <CommonMenuItem leftIcon={User}>Share</CommonMenuItem>
        <CommonMenuItem leftIcon={Settings}>Properties</CommonMenuItem>
      </CommonMenuGroup>
      <CommonMenuSeparator />
      <CommonMenuGroup>
        <CommonMenuItemEdit />
        <CommonMenuItemDelete />
      </CommonMenuGroup>
    </>
  );

  return (
    // Single container for examples
    <div className="flex flex-col items-center justify-center gap-4 p-4">
      <div className="text-center mb-4">
        Right-click (Desktop) or Long-press (Mobile if enabled) the area below:
      </div>

      {/* Example 1: mobileView="keep" (Default ContextMenu) */}
      <SimpleContextMenu content={menuContent} mobileView="keep">
        <div className="w-64 h-32 bg-muted rounded-md flex items-center justify-center border border-dashed">
          Keep as Context Menu
        </div>
      </SimpleContextMenu>

      {/* Example 2: mobileView="bottom-drawer" */}
      <SimpleContextMenu
        content={menuContent}
        mobileView="bottom-drawer"
        drawerTitle="Actions"
      >
        <div className="w-64 h-32 bg-secondary text-secondary-foreground rounded-md flex items-center justify-center border border-dashed">
          Long Press for Drawer
        </div>
      </SimpleContextMenu>

      {/* Add a note about the switcher */}
      <p className="w-full text-center text-sm text-muted-foreground mt-4">
        Use the Desktop/Mobile switcher above to test behaviors.
      </p>
    </div>
  );
};

export default Preview;
