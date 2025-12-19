"use client";

import { ScrollingHeader } from "@/registry/new-york/scrolling-header/ScrollingHeader";
import { Lock } from "lucide-react";

export function Preview() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-muted-foreground">
        The ScrollingHeader appears after scrolling past the threshold. Scroll down on a page to see it in action.
      </p>

      <div className="bg-black p-6 rounded-xl">
        <h3 className="text-sm font-medium text-white mb-4">Example Configuration</h3>

        <pre className="text-xs text-zinc-400 overflow-auto">
{`<ScrollingHeader
  logo={
    <img
      src="/app-icon.png"
      alt="App"
      className="h-8 w-8 rounded-lg"
    />
  }
  title="My App"
  scrollThreshold={500}
>
  <BuyButton variant="header" />
</ScrollingHeader>`}
        </pre>
      </div>

      <div className="bg-black p-6 rounded-xl">
        <h3 className="text-sm font-medium text-white mb-4">With Icon Logo</h3>

        <div className="relative rounded-full border border-white/10 bg-black/50 px-4 py-2 flex items-center justify-between gap-4 max-w-md">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
              <Lock className="h-4 w-4 text-white" />
            </div>
            <span className="font-semibold text-white">Passlock</span>
          </div>
          <button className="rounded-full bg-white px-4 py-1.5 text-sm font-medium text-black">
            Buy Now
          </button>
        </div>
      </div>

      <div className="bg-black p-6 rounded-xl">
        <h3 className="text-sm font-medium text-white mb-4">With Image Logo</h3>

        <div className="relative rounded-full border border-white/10 bg-black/50 px-4 py-2 flex items-center justify-between gap-4 max-w-md">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-zinc-800" />
            <span className="font-semibold text-white">Sotto</span>
          </div>
          <button className="rounded-full bg-white px-4 py-1.5 text-sm font-medium text-black flex items-center gap-2">
            Buy — $29
          </button>
        </div>
      </div>
    </div>
  );
}
