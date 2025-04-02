import React from "react";
import { BottomDrawerMenu } from "./BottomDrawerMenu";
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
} from "lucide-react";

export default function BottomDrawerMenuPreview() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap items-center justify-center gap-8 p-8 border rounded-lg">
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

        <BottomDrawerMenu
          content={
            <>
              <CommonMenuLabel>Actions</CommonMenuLabel>
              <CommonMenuItem leftIcon={Edit}>Edit</CommonMenuItem>
              <CommonMenuItem leftIcon={Bookmark}>Bookmark</CommonMenuItem>
              <CommonMenuItem
                leftIcon={HelpCircle}
                hint="Get detailed information about this document"
              >
                Help
              </CommonMenuItem>
              <CommonMenuItem leftIcon={Trash} destructive>
                Delete
              </CommonMenuItem>
            </>
          }
        >
          <Button>Document Actions</Button>
        </BottomDrawerMenu>
      </div>
    </div>
  );
}
