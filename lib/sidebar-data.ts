export const componentGroups = [
  {
    title: "Core Components",
    description:
      "The main set of Kitze UI components built on top of shadcn/ui.",
    components: [
      "custom-button",
      "spinner",
      "full-page-spinner",
      "fill-height-spinner",
      "suspensed",
      "page-header",
      "bottom-drawer",
      "ui-alert",
    ],
  },
  {
    title: "Simplified Components",
    description:
      "These are simplified components that use the shadcn components under the hood, but with much less boilerplate.",
    components: ["simple-tooltip", "simple-accordion", "simple-dialog"],
  },
  {
    title: "Menu Components",
    description: "Components for displaying context menus and dropdown menus.",
    components: [
      "simple-context-menu",
      "simple-dropdown-menu",
      "bottom-drawer",
      "responsive-dialog",
    ],
  },
  {
    title: "Responsive Menu",
    description:
      "Menu components that adapt to desktop or mobile view, showing either a regular menu or a bottom drawer.",
    components: ["simple-context-menu", "simple-dropdown-menu"],
  },
  {
    title: "Conditionals",
    description:
      "Utility components for conditionally rendering or wrapping content.",
    components: ["conditional-wrap", "conditional-tooltip"],
  },
  {
    title: "Theme Switches",
    description:
      "A set of components for switching between light and dark mode.",
    components: ["theme-switch-minimal", "theme-switch-slider"],
  },
  {
    title: "Next Themes",
    description:
      "A set of components that are connected to the Next Themes library.",
    components: [
      "theme-switch-slider-next-themes",
      "theme-switch-minimal-next-themes",
    ],
  },
];
