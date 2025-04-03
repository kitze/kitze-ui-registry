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
      "ui-alert",
      "kitze-ui-context",
    ],
  },
  {
    title: "Form Components",
    description:
      "Components for building forms with react-hook-form integration.",
    components: [
      "form-field-wrapper",
      "form-field-input",
      "form-field-checkbox",
    ],
  },
  {
    title: "Simplified Components",
    description:
      "These are simplified components that use the shadcn components under the hood, but with much less boilerplate.",
    components: [
      "simple-tooltip",
      "simple-accordion",
      "simple-dialog",
      "simple-popover",
      "simple-context-menu",
      "simple-dropdown-menu",
    ],
  },
  {
    title: "Menu Components",
    description: "Components for displaying context menus and dropdown menus.",
    components: ["bottom-drawer"],
  },
  {
    title: "Responsive Components",
    description:
      "Components that adapt to desktop or mobile view automatically.",
    components: ["responsive-dialog", "responsive-popover"],
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
