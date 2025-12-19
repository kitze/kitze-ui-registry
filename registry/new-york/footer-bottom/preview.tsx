"use client";

import { FooterBottom } from "./FooterBottom";

export default function FooterBottomPreview() {
  return (
    <div className="w-full space-y-8 bg-black p-8 text-white">
      <div>
        <h3 className="text-sm font-medium text-zinc-400 mb-4">Full variant (default)</h3>
        <FooterBottom variant="full" />
      </div>
      <div>
        <h3 className="text-sm font-medium text-zinc-400 mb-4">Minimal variant</h3>
        <FooterBottom variant="minimal" />
      </div>
    </div>
  );
}
