import React from "react";
import { ResponsiveContextMenu } from "./ResponsiveContextMenu";
import { CommonMenuItem } from "@/registry/new-york/simple-dropdown-menu/CommonMenuItem";
import { CommonMenuSeparator } from "@/registry/new-york/simple-dropdown-menu/CommonMenuSeparator";
import {
  FileText,
  Save,
  Copy,
  ClipboardPaste,
  User,
  Settings,
  LogOut,
  Trash,
} from "lucide-react";

export default function ResponsiveContextMenuPreview() {
  const contextMenuContent = (
    <>
      <CommonMenuItem leftIcon={FileText} shortcut="⌘O">
        Open
      </CommonMenuItem>
      <CommonMenuItem leftIcon={Save} shortcut="⌘S">
        Save
      </CommonMenuItem>
      <CommonMenuSeparator />
      <CommonMenuItem
        leftIcon={Copy}
        shortcut="⌘C"
        hint="Copy selected content to clipboard"
      >
        Copy
      </CommonMenuItem>
      <CommonMenuItem leftIcon={ClipboardPaste} shortcut="⌘V">
        Paste
      </CommonMenuItem>
      <CommonMenuSeparator />
      <CommonMenuItem leftIcon={Trash} destructive shortcut="⌘⌫">
        Delete
      </CommonMenuItem>
    </>
  );

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-center p-8 border rounded-lg">
        <ResponsiveContextMenu
          content={contextMenuContent}
          drawerTitle="File Actions"
        >
          <div className="p-4 border rounded-md w-[200px] h-[100px] flex items-center justify-center">
            <p>
              Right-click on desktop
              <br />
              Long-press on mobile
            </p>
          </div>
        </ResponsiveContextMenu>
      </div>

      <div className="flex items-center justify-center p-8 border rounded-lg">
        <ResponsiveContextMenu
          content={
            <>
              <CommonMenuItem leftIcon={User}>Profile</CommonMenuItem>
              <CommonMenuItem leftIcon={Settings}>Settings</CommonMenuItem>
              <CommonMenuSeparator />
              <CommonMenuItem leftIcon={LogOut} destructive>
                Logout
              </CommonMenuItem>
            </>
          }
        >
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            User Menu (Right-click or long-press)
          </button>
        </ResponsiveContextMenu>
      </div>
    </div>
  );
}
