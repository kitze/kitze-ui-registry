import * as React from "react";
import { PreviewComponents } from "@/components/PreviewComponents";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      <header className="flex flex-col gap-1">
        <div className="relative">
          <img src="/spaceship.jpg" className="w-full rounded-2xl" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-2xl" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h1 className="text-4xl font-bold tracking-tight">
              Kitze UI 🤝 shadcn
            </h1>
            <p className="text-white/80 text-xl">
              by{" "}
              <a
                href="https://twitter.com/thekitze"
                className="hover:text-white"
              >
                @thekitze
              </a>
            </p>
          </div>
        </div>
      </header>
      <main className="flex flex-col flex-1 gap-8">
        <PreviewComponents
          names={[
            "custom-button",
            "spinner",
            "full-page-spinner",
            "fill-height-spinner",
            "suspensed",
            "simple-tooltip",
            "conditional-wrap",
            "conditional-tooltip",
            "simple-accordion",
            "bottom-drawer",
            "page-header",
          ]}
        />
      </main>
    </div>
  );
}
