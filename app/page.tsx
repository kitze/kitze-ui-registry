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
          title="Core Components"
          description="The main set of Kitze UI components built on top of shadcn/ui."
          names={[
            "custom-button",
            "spinner",
            "full-page-spinner",
            "fill-height-spinner",
            "suspensed",
            "page-header",
            "bottom-drawer",
          ]}
        />

        <PreviewComponents
          title="Simplified Components"
          description="These are simplified components that use the shadcn components under the hood, but with much less boilerplate."
          names={["simple-tooltip", "simple-accordion"]}
        />

        <PreviewComponents
          title="Conditionals"
          description="Utility components for conditionally rendering or wrapping content."
          names={["conditional-wrap", "conditional-tooltip"]}
        />

        <PreviewComponents
          title="Theme switches"
          description="A set of components for switching between light and dark mode."
          names={["theme-switch-minimal", "theme-switch-slider"]}
        />

        <PreviewComponents
          title="Theme switches for Next Themes"
          description="A set of components that are connected to the Next Themes library."
          names={[
            "theme-switch-slider-next-themes",
            "theme-switch-minimal-next-themes",
          ]}
        />
      </main>
    </div>
  );
}
