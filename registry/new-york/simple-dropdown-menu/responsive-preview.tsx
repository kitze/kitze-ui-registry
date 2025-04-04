import React from "react";
import { ResponsiveDropdownMenu } from "./ResponsiveDropdownMenu";
import { CommonMenuItem } from "./CommonMenuItem";
import { CommonMenuLabel } from "./CommonMenuLabel";
import { CommonMenuSeparator } from "./CommonMenuSeparator";
import { CommonMenuGroup } from "./CommonMenuGroup";
import { Button } from "@/components/ui/button";
import { KitzeUIProvider } from "@/registry/new-york/kitze-ui-context/KitzeUIContext";
import { User, Settings, LogOut, ChevronDown } from "lucide-react";

export default function ResponsiveDropdownMenuPreview() {
  // Example showing both mobile and desktop views for demo purposes
  return (
    <div className="flex flex-col gap-8">
      <div className="border rounded-lg p-6">
        <h3 className="font-medium mb-4">Desktop View</h3>
        <div className="flex justify-center">
          <KitzeUIProvider isMobile={false}>
            <ResponsiveDropdownMenu
              drawerTitle="Account Menu"
              content={
                <>
                  <CommonMenuLabel>My Account</CommonMenuLabel>
                  <CommonMenuSeparator />
                  <CommonMenuGroup>
                    <CommonMenuItem leftIcon={User} shortcut="⇧⌘P">
                      Profile
                    </CommonMenuItem>
                    <CommonMenuItem
                      leftIcon={Settings}
                      hint="Configure your account settings"
                    >
                      Settings
                    </CommonMenuItem>
                  </CommonMenuGroup>
                  <CommonMenuSeparator />
                  <CommonMenuItem leftIcon={LogOut} destructive>
                    Log out
                  </CommonMenuItem>
                </>
              }
            >
              <Button variant="outline">
                Menu
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </ResponsiveDropdownMenu>
          </KitzeUIProvider>
        </div>
      </div>

      <div className="border rounded-lg p-6 bg-zinc-50 dark:bg-zinc-900">
        <h3 className="font-medium mb-4">Mobile View (Opens Bottom Drawer)</h3>
        <div className="flex justify-center">
          <KitzeUIProvider isMobile={true}>
            <ResponsiveDropdownMenu
              drawerTitle="Account Menu"
              content={
                <>
                  <CommonMenuLabel>My Account</CommonMenuLabel>
                  <CommonMenuSeparator />
                  <CommonMenuGroup>
                    <CommonMenuItem leftIcon={User}>Profile</CommonMenuItem>
                    <CommonMenuItem leftIcon={Settings}>
                      Settings
                    </CommonMenuItem>
                  </CommonMenuGroup>
                  <CommonMenuSeparator />
                  <CommonMenuItem leftIcon={LogOut} destructive>
                    Log out
                  </CommonMenuItem>
                </>
              }
            >
              <Button variant="outline">
                Menu
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </ResponsiveDropdownMenu>
          </KitzeUIProvider>
        </div>
      </div>
    </div>
  );
}
