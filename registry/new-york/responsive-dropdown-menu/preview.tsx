"use client";

import React from "react";
import { ResponsiveDropdownMenu } from "./ResponsiveDropdownMenu";
import { Button } from "@/components/ui/button";
import { CommonMenuItem } from "@/registry/new-york/simple-dropdown-menu/CommonMenuItem";
import { CommonMenuLabel } from "@/registry/new-york/simple-dropdown-menu/CommonMenuLabel";
import { CommonMenuSeparator } from "@/registry/new-york/simple-dropdown-menu/CommonMenuSeparator";
import { Settings, User, LogOut } from "lucide-react";

const Preview = () => {
  const menuContent = (
    <>
      <CommonMenuLabel>My Account</CommonMenuLabel>
      <CommonMenuItem leftIcon={User}>Profile</CommonMenuItem>
      <CommonMenuItem leftIcon={Settings}>Settings</CommonMenuItem>
      <CommonMenuSeparator />
      <CommonMenuItem leftIcon={LogOut}>Logout</CommonMenuItem>
    </>
  );

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 p-4">
      {/* Example 1: mobileView="keep" (Default Dropdown) */}
      <ResponsiveDropdownMenu
        content={menuContent}
        mobileView="keep" // Default behavior
      >
        <Button variant="outline">Menu (Keep)</Button>
      </ResponsiveDropdownMenu>

      {/* Example 2: mobileView="bottom-drawer" */}
      <ResponsiveDropdownMenu
        content={menuContent}
        mobileView="bottom-drawer"
        drawerTitle="Account Menu"
      >
        <Button variant="secondary">Menu (Drawer)</Button>
      </ResponsiveDropdownMenu>

      <p className="w-full text-center text-sm text-muted-foreground mt-4">
        Use the Desktop/Mobile switcher above to see the different mobile
        behaviors. This responsive version adapts to mobile devices.
      </p>
    </div>
  );
};

export default Preview;
