import * as React from "react";
import { PreviewComponents } from "@/components/PreviewComponents";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">
          Kitze UI 🤝 shadcn
        </h1>
        <p className="text-muted-foreground">
          by <a href="https://twitter.com/thekitze">@thekitze</a>
        </p>
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
          ]}
        />
      </main>
    </div>
  );
}
