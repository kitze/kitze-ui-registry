import React, { useState } from "react";
import { BottomDrawerMenu } from "./BottomDrawerMenu";
import { BottomDrawerMenuItem } from "./BottomDrawerMenuItem";
import {
  BottomDrawerMenuItems,
  BottomDrawerGroup,
} from "./BottomDrawerMenuComponents";
import { CommonMenuItem } from "@/registry/new-york/simple-dropdown-menu/CommonMenuItem";
import { CommonMenuLabel } from "@/registry/new-york/simple-dropdown-menu/CommonMenuLabel";
import { CommonMenuSeparator } from "@/registry/new-york/simple-dropdown-menu/CommonMenuSeparator";
import { CommonMenuGroup } from "@/registry/new-york/simple-dropdown-menu/CommonMenuGroup";
import { Button } from "@/components/ui/button";
import {
  User,
  Settings,
  LogOut,
  Bell,
  Bookmark,
  Edit,
  Trash,
  HelpCircle,
  Moon,
  Sun,
  Palette,
  Monitor,
  Layout,
  Share,
  Download,
  Printer,
  Copy,
} from "lucide-react";

export default function BottomDrawerMenuPreview() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap items-center justify-center gap-8 p-8 border rounded-lg">
        {/* Example 1: Using CommonMenu components */}
        <BottomDrawerMenu
          content={
            <>
              <CommonMenuLabel>My Account</CommonMenuLabel>
              <CommonMenuSeparator />
              <CommonMenuGroup>
                <CommonMenuItem leftIcon={User}>Profile</CommonMenuItem>
                <CommonMenuItem leftIcon={Settings}>Settings</CommonMenuItem>
                <CommonMenuItem leftIcon={Bell}>Notifications</CommonMenuItem>
                <CommonMenuItem leftIcon={Bookmark}>Saved Items</CommonMenuItem>
              </CommonMenuGroup>
              <CommonMenuSeparator />
              <CommonMenuItem leftIcon={LogOut} destructive>
                Log out
              </CommonMenuItem>
            </>
          }
        >
          <Button variant="outline">User Menu</Button>
        </BottomDrawerMenu>

        {/* Example 2: Using BottomDrawerMenuItems */}
        <BottomDrawerMenu
          content={
            <BottomDrawerMenuItems>
              <BottomDrawerMenuItem leftIcon={Edit}>Edit</BottomDrawerMenuItem>
              <BottomDrawerMenuItem leftIcon={Bookmark}>
                Bookmark
              </BottomDrawerMenuItem>
              <BottomDrawerMenuItem
                leftIcon={HelpCircle}
                hint="Get detailed information about this document"
              >
                Help
              </BottomDrawerMenuItem>
              <BottomDrawerMenuItem leftIcon={Trash} destructive>
                Delete
              </BottomDrawerMenuItem>
            </BottomDrawerMenuItems>
          }
        >
          <Button>Document Actions</Button>
        </BottomDrawerMenu>

        {/* Example 3: Using BottomDrawerGroup */}
        <BottomDrawerMenu
          content={
            <BottomDrawerGroup title="Appearance">
              <BottomDrawerMenuItem
                leftIcon={isDarkTheme ? Sun : Moon}
                closeOnClick={false}
                onClick={() => setIsDarkTheme(!isDarkTheme)}
              >
                Theme: {isDarkTheme ? "Dark" : "Light"}
              </BottomDrawerMenuItem>
              <BottomDrawerMenuItem leftIcon={Palette}>
                Colors
              </BottomDrawerMenuItem>
              <BottomDrawerMenuItem leftIcon={Monitor}>
                Display
              </BottomDrawerMenuItem>
              <BottomDrawerMenuItem leftIcon={Layout}>
                Layout
              </BottomDrawerMenuItem>
            </BottomDrawerGroup>
          }
        >
          <Button variant="outline">Theme Settings</Button>
        </BottomDrawerMenu>

        {/* Example 4: Multiple BottomDrawerGroups */}
        <BottomDrawerMenu
          title="All Settings"
          content={
            <>
              <BottomDrawerGroup title="Account">
                <BottomDrawerMenuItem leftIcon={User}>
                  Profile
                </BottomDrawerMenuItem>
                <BottomDrawerMenuItem leftIcon={Bell}>
                  Notifications
                </BottomDrawerMenuItem>
              </BottomDrawerGroup>

              <BottomDrawerGroup title="Preferences">
                <BottomDrawerMenuItem leftIcon={Moon}>
                  Theme
                </BottomDrawerMenuItem>
                <BottomDrawerMenuItem leftIcon={Settings}>
                  General
                </BottomDrawerMenuItem>
              </BottomDrawerGroup>
            </>
          }
        >
          <Button>All Settings</Button>
        </BottomDrawerMenu>

        {/* Example 5: Using items array prop */}
        <BottomDrawerMenu
          title="Share Options"
          items={[
            { label: "Copy Link", leftIcon: Copy },
            { label: "Share", leftIcon: Share },
            { label: "Download", leftIcon: Download },
            {
              label: "Print",
              leftIcon: Printer,
              hint: "Print the current document",
            },
          ]}
        >
          <Button variant="outline">Share</Button>
        </BottomDrawerMenu>
      </div>
    </div>
  );
}
