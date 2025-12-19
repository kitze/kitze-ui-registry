"use client";

import { FooterColumnKitzeApps } from "@/registry/new-york/footer-column-kitze-apps/FooterColumnKitzeApps";

export function Preview() {
  return (
    <div className="flex flex-col gap-8 bg-black p-8 rounded-xl">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-medium text-white mb-4">Default</h3>
        <FooterColumnKitzeApps />
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-medium text-white mb-4">With excludeApp and refParam</h3>
        <FooterColumnKitzeApps excludeApp="Sotto" refParam="sotto" />
      </div>
    </div>
  );
}
