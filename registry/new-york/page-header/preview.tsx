import React from "react";
import { PageHeader } from "@/registry/new-york/page-header/PageHeader";

export default function PageHeaderPreview() {
  const drawerContent = (
    <div className="p-4 space-y-4">
      <div className="font-semibold text-lg mb-6">Menu</div>
      <ul className="space-y-3">
        <li>
          <a
            href="#"
            className="block py-2 hover:opacity-70 transition-opacity"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 hover:opacity-70 transition-opacity"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 hover:opacity-70 transition-opacity"
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 hover:opacity-70 transition-opacity"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
  return (
    <div className="relative h-[300px] w-full border border-dashed border-zinc-300 dark:border-zinc-700 rounded-lg overflow-hidden">
      <PageHeader
        leftSide={
          <div className="flex items-center">
            <span className="font-semibold text-lg">Logo</span>
          </div>
        }
        middle={<span className="font-medium">Page Title</span>}
        renderRightSide={({ menuButton, bottomDrawer }) => (
          <div>{bottomDrawer(drawerContent)}</div>
        )}
      />
      <div className="absolute inset-0 flex items-center justify-center mt-20 text-zinc-400">
        Scroll content would appear here
      </div>
    </div>
  );
}
