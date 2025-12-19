"use client";

import { FooterColumnConnect } from "@/registry/new-york/footer-column-connect/FooterColumnConnect";

export function Preview() {
  return (
    <div className="flex flex-col gap-8 bg-black p-8 rounded-xl">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-medium text-white mb-4">Default</h3>
        <FooterColumnConnect />
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-medium text-white mb-4">With refParam</h3>
        <FooterColumnConnect refParam="sotto" />
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-medium text-white mb-4">Custom Links</h3>
        <FooterColumnConnect
          links={[
            { label: "Twitter / X", url: "https://x.com/thekitze" },
            { label: "GitHub", url: "https://github.com/kitze" },
            { label: "YouTube", url: "https://youtube.com/@thekitze" },
            { label: "Email", url: "mailto:hi@kitze.io" },
          ]}
        />
      </div>
    </div>
  );
}
