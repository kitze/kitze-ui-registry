import * as React from "react";
import { PreviewComponents } from "@/components/PreviewComponents";

export function PageContent() {
  return (
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
          "ui-alert",
        ]}
      />

      <PreviewComponents
        title="Simplified Components"
        description="These are simplified components that use the shadcn components under the hood, but with much less boilerplate."
        names={[
          "simple-tooltip",
          "simple-accordion",
          "simple-dialog",
          "simple-popover",
        ]}
      />

      <PreviewComponents
        title="Menu Components"
        description="Components for displaying context menus and dropdown menus."
        names={[
          "simple-context-menu",
          "simple-dropdown-menu",
          "bottom-drawer",
          "responsive-dialog",
        ]}
      />

      <PreviewComponents
        title="Responsive Menu Components"
        description="Menu components that adapt to desktop or mobile view, showing either a regular menu or a bottom drawer."
        names={[
          "simple-context-menu",
          "simple-dropdown-menu",
          "responsive-popover",
          "responsive-dialog",
        ]}
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
  );
}
