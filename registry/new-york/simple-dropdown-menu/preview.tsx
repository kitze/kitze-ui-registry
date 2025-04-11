"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { SimpleDropdownMenu } from "./SimpleDropdownMenu";
import { CommonMenuGroup } from "./CommonMenuGroup";
import { CommonMenuItem } from "./CommonMenuItem";
import { CommonMenuSeparator } from "./CommonMenuSeparator";
import { CommonMenuLabel } from "./CommonMenuLabel";
import { CommonMenuItemEdit } from "./CommonMenuItemEdit";
import { CommonMenuItemDelete } from "./CommonMenuItemDelete";
import { MoreVertical, User, Settings, Menu } from "lucide-react";

const Preview = () => {
  const handleSelect = (value: string) => {
    alert(`Selected: ${value}`);
  };

  // Reusable content for the dropdown/drawer
  const dropdownContent = (
    <>
      <CommonMenuLabel>My Account</CommonMenuLabel>
      <CommonMenuGroup>
        <CommonMenuItem
          leftIcon={User}
          onSelect={() => handleSelect("Profile")}
        >
          Profile
        </CommonMenuItem>
        <CommonMenuItem
          leftIcon={Settings}
          onSelect={() => handleSelect("Settings")}
        >
          Settings
        </CommonMenuItem>
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
    <div className="flex flex-wrap items-center justify-center gap-4 p-4">
      {/* Example 1: mobileView="keep" (Default Dropdown) */}
      <SimpleDropdownMenu
        content={dropdownContent}
        align="end"
        mobileView="keep" // Default behavior
      >
        <Button variant="outline" size="icon" aria-label="Keep as Dropdown">
          <MoreVertical className="h-4 w-4" />
        </Button>
      </SimpleDropdownMenu>

      {/* Example 2: mobileView="bottom-drawer" */}
      <SimpleDropdownMenu
        content={dropdownContent}
        mobileView="bottom-drawer"
        drawerTitle="Actions"
      >
        <Button variant="secondary">
          <Menu className="mr-2 h-4 w-4" /> Drawer on Mobile
        </Button>
      </SimpleDropdownMenu>

      {/* Add a note about the switcher */}
      <p className="w-full text-center text-sm text-muted-foreground mt-4">
        Use the Desktop/Mobile switcher above to see the different mobile
        behaviors.
      </p>
    </div>
  );
};

export default Preview;
