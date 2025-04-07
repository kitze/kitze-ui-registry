import React, { useState } from "react";
import { SimpleContextMenu } from "./SimpleContextMenu";
import { ResponsiveContextMenu } from "./ResponsiveContextMenu";
import ResponsiveContextMenuPreview from "./ResponsiveContextMenuPreview";
import { CommonMenuItem } from "@/registry/new-york/simple-dropdown-menu/CommonMenuItem";
import { CommonMenuItemEdit } from "@/registry/new-york/simple-dropdown-menu/CommonMenuItemEdit";
import { CommonMenuItemDelete } from "@/registry/new-york/simple-dropdown-menu/CommonMenuItemDelete";
import { CommonMenuSeparator } from "@/registry/new-york/simple-dropdown-menu/CommonMenuSeparator";
import {
  FileText,
  Save,
  Copy,
  ClipboardPaste,
  User,
  Settings,
  LogOut,
  ExternalLink,
  Trash,
} from "lucide-react";

export default function SimpleContextMenuPreview() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleEdit = () => {
    setMessage("Edit action triggered");
    setTimeout(() => setMessage(null), 3000);
  };

  const handleDelete = () => {
    setMessage("Item was deleted");
    setTimeout(() => setMessage(null), 3000);
  };

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
      {message && (
        <div className="p-3 bg-green-100 text-green-800 rounded-md mb-2">
          {message}
        </div>
      )}

      <h3 className="text-lg font-semibold mb-4">Simple Context Menu</h3>
      <div className="flex items-center justify-center p-8 border rounded-lg">
        <SimpleContextMenu content={contextMenuContent}>
          <div className="p-4 border rounded-md w-[200px] h-[100px] flex items-center justify-center">
            Right-click me (closes after click)
          </div>
        </SimpleContextMenu>
      </div>

      <div className="flex items-center justify-center p-8 border rounded-lg">
        <SimpleContextMenu
          content={
            <>
              <CommonMenuItem leftIcon={User}>Profile</CommonMenuItem>
              <CommonMenuItem
                leftIcon={Settings}
                hint="Configure your account settings"
              >
                Settings
              </CommonMenuItem>
              <CommonMenuSeparator />
              <CommonMenuItem leftIcon={LogOut} destructive>
                Logout
              </CommonMenuItem>
            </>
          }
          closeOnClick={false}
          classNames={{
            content: "min-w-[180px]",
          }}
        >
          <div className="p-4 border rounded-md cursor-context-menu bg-gray-100 w-[200px] h-[80px] flex items-center justify-center">
            Right-click me (stays open after click)
          </div>
        </SimpleContextMenu>
      </div>

      <h3 className="text-lg font-semibold mt-8 mb-4">
        Responsive Context Menu
      </h3>
      <div className="flex flex-col gap-4 items-center justify-center p-8 border rounded-lg">
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

        <ResponsiveContextMenu
          content={contextMenuContent}
          drawerTitle="Controlled Drawer"
          open={drawerOpen}
          onOpenChange={setDrawerOpen}
          closeOnClick={false}
        >
          <div className="mt-4 p-4 border rounded-md w-[200px] h-[100px] flex items-center justify-center">
            <p>
              Controlled Menu
              <br />
              {drawerOpen ? "(Open)" : "(Closed)"}
            </p>
          </div>
        </ResponsiveContextMenu>

        <button
          className="mt-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          onClick={() => setDrawerOpen(!drawerOpen)}
        >
          Toggle Controlled Menu
        </button>
      </div>

      <h3 className="text-lg font-semibold mt-8 mb-4">
        Specialized Menu Items
      </h3>
      <div className="flex items-center justify-center p-8 border rounded-lg">
        <ResponsiveContextMenu
          content={
            <>
              <CommonMenuItemEdit onSelect={handleEdit} shortcut="⌘E" />
              <CommonMenuSeparator />
              <CommonMenuItemDelete
                itemName="document"
                onDelete={handleDelete}
                shortcut="⌘⌫"
              />
            </>
          }
          drawerTitle="Document Actions"
        >
          <div className="p-4 border border-blue-200 bg-blue-50 rounded-md w-[250px] h-[100px] flex items-center justify-center">
            <p className="text-center">
              Try the new Edit and Delete actions
              <br />
              (with Right-click or long-press)
            </p>
          </div>
        </ResponsiveContextMenu>
      </div>

      <h3 className="text-lg font-semibold mt-8 mb-4">
        Responsive Context Menu (Full Preview)
      </h3>
      <ResponsiveContextMenuPreview />
    </div>
  );
}
