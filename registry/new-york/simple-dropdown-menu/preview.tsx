import React, { useState } from "react";
import { SimpleDropdownMenu } from "./SimpleDropdownMenu";
import { ResponsiveDropdownMenu } from "./ResponsiveDropdownMenu";
import { CommonMenuItem } from "./CommonMenuItem";
import { CommonMenuSeparator } from "./CommonMenuSeparator";
import { Clipboard, LogOut, Save, Settings, Trash, User } from "lucide-react";

export default function SimpleDropdownMenuPreview() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuContent = (
    <>
      <CommonMenuItem leftIcon={User}>Profile</CommonMenuItem>
      <CommonMenuItem leftIcon={Settings}>Settings</CommonMenuItem>
      <CommonMenuItem leftIcon={Clipboard}>Copy</CommonMenuItem>
      <CommonMenuItem leftIcon={Save}>Save</CommonMenuItem>
      <CommonMenuItem leftIcon={LogOut} destructive>
        Logout
      </CommonMenuItem>
    </>
  );

  return (
    <div className="flex flex-col gap-8 p-4">
      <h3 className="text-lg font-semibold">Simple Dropdown Menu</h3>
      <div className="border rounded-lg p-8 flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
          <div>
            <SimpleDropdownMenu content={menuContent}>
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Default Menu
              </button>
            </SimpleDropdownMenu>
          </div>

          <div>
            <SimpleDropdownMenu content={menuContent} closeOnClick={false}>
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Stay Open Menu
              </button>
            </SimpleDropdownMenu>
          </div>

          <div>
            <SimpleDropdownMenu
              content={menuContent}
              open={menuOpen}
              onOpenChange={setMenuOpen}
            >
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Controlled Menu {menuOpen ? "(Open)" : "(Closed)"}
              </button>
            </SimpleDropdownMenu>
          </div>
        </div>

        <button
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 mt-4"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          Toggle Controlled Menu
        </button>
      </div>

      <h3 className="text-lg font-semibold mt-4">Responsive Dropdown Menu</h3>
      <div className="border rounded-lg p-8 flex items-center justify-center">
        <ResponsiveDropdownMenu content={menuContent}>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Responsive Menu (drawer on mobile)
          </button>
        </ResponsiveDropdownMenu>
      </div>
    </div>
  );
}
