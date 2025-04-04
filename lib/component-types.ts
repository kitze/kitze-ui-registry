// This file is auto-generated. Do not edit manually.
export type ComponentName = "theme-switch-slider-next-themes" | "ui-alert" | "theme-switch-slider" | "theme-switch-minimal-next-themes" | "theme-switch-minimal" | "suspensed" | "spinner" | "simple-tooltip" | "simple-dialog" | "simple-dropdown-menu" | "simple-context-menu" | "simple-accordion" | "responsive-tooltip" | "responsive-popover" | "simple-popover" | "responsive-dialog" | "page-header" | "kitze-ui-context" | "menu-context" | "help-info-circle" | "form-field-input" | "form-field-checkbox" | "fill-height-spinner" | "conditional-wrap" | "custom-button" | "full-page-spinner" | "conditional-tooltip" | "bottom-drawer" | "form-field-wrapper"; // Handle empty case

export type AvailableHook = "useScrolledPast" | "useMounted" | "useLinkableComponent" | "useControlledOpen"; // Auto-generated from registry/hooks

// Shadcn UI component types
export type ShadcnComponent = string; // List of available shadcn/ui components

export interface ComponentMeta {
  name: ComponentName;
  title: string;
  description: string;
}

export const componentMeta: Record<ComponentName, ComponentMeta> = {
  "theme-switch-slider-next-themes": {
    name: "theme-switch-slider-next-themes",
    title: "Theme Switch Slider with Next-Themes",
    description: "A theme switcher slider that integrates with the next-themes library for persistent theme management"
  },
  "ui-alert": {
    name: "ui-alert",
    title: "UI Alert",
    description: "A collection of alert components with confirm and delete variations"
  },
  "theme-switch-slider": {
    name: "theme-switch-slider",
    title: "Theme Switch Slider",
    description: "A beautiful animated theme switcher with a sliding control and animated stars"
  },
  "theme-switch-minimal-next-themes": {
    name: "theme-switch-minimal-next-themes",
    title: "Theme Switch Minimal with Next-Themes",
    description: "A minimal theme switcher that integrates with the next-themes library for persistent theme management"
  },
  "theme-switch-minimal": {
    name: "theme-switch-minimal",
    title: "Theme Switch Minimal",
    description: "A minimal theme switch button with smooth icon transitions for light, dark, and system theme modes"
  },
  "suspensed": {
    name: "suspensed",
    title: "Suspensed",
    description: "A wrapper component for React Suspense with force option"
  },
  "spinner": {
    name: "spinner",
    title: "Spinner",
    description: "A customizable loading spinner component with different variants and sizes"
  },
  "simple-tooltip": {
    name: "simple-tooltip",
    title: "Simple Tooltip",
    description: "A simplified tooltip component built on top of Radix UI tooltip"
  },
  "simple-dialog": {
    name: "simple-dialog",
    title: "Simple Dialog",
    description: "A simple dialog component using Radix UI."
  },
  "simple-dropdown-menu": {
    name: "simple-dropdown-menu",
    title: "Simple Dropdown Menu",
    description: "A simplified dropdown menu component with click triggering and common components, including a responsive version for mobile"
  },
  "simple-context-menu": {
    name: "simple-context-menu",
    title: "Simple Context Menu",
    description: "A simple context menu component that wraps content with right-click menu functionality"
  },
  "simple-accordion": {
    name: "simple-accordion",
    title: "Simple Accordion",
    description: "A simple accordion component"
  },
  "responsive-tooltip": {
    name: "responsive-tooltip",
    title: "Responsive Tooltip",
    description: "A tooltip component that adapts to desktop (tooltip) and mobile (bottom drawer) views"
  },
  "responsive-popover": {
    name: "responsive-popover",
    title: "Responsive Popover",
    description: "A responsive popover component that displays as a popover on desktop and a bottom drawer on mobile."
  },
  "simple-popover": {
    name: "simple-popover",
    title: "Simple Popover",
    description: "A simple popover component that displays content when triggered."
  },
  "responsive-dialog": {
    name: "responsive-dialog",
    title: "Responsive Dialog",
    description: "This dialog will display as a drawer on mobile devices and a regular dialog on desktop. Try resizing your browser to see the different appearances."
  },
  "page-header": {
    name: "page-header",
    title: "Page Header",
    description: "A responsive page header component with mobile drawer support"
  },
  "kitze-ui-context": {
    name: "kitze-ui-context",
    title: "Kitze UI Context",
    description: "Provides UI context like mobile detection for Kitze UI components."
  },
  "menu-context": {
    name: "menu-context",
    title: "Menu Context",
    description: "Context provider to determine the type of menu (dropdown, context, bottom-drawer) and provide a close function."
  },
  "help-info-circle": {
    name: "help-info-circle",
    title: "Help Info Circle",
    description: "A help icon that displays information in a tooltip on desktop and a drawer on mobile"
  },
  "form-field-input": {
    name: "form-field-input",
    title: "Form Field Input",
    description: "An input component integrated with react-hook-form using FormFieldWrapper."
  },
  "form-field-checkbox": {
    name: "form-field-checkbox",
    title: "Form Field Checkbox",
    description: "A checkbox component integrated with react-hook-form using FormFieldWrapper."
  },
  "fill-height-spinner": {
    name: "fill-height-spinner",
    title: "Fill Height Spinner",
    description: "A spinner component that fills and centers in its container height"
  },
  "conditional-wrap": {
    name: "conditional-wrap",
    title: "Conditional Wrap",
    description: "A utility component that conditionally wraps its children with a wrapper component. Useful for conditional wrappers like tooltips, links, popovers, drag handlers, etc."
  },
  "custom-button": {
    name: "custom-button",
    title: "Custom Button",
    description: "A customizable button component with various styles, sizes, and features like loading state and icon support"
  },
  "full-page-spinner": {
    name: "full-page-spinner",
    title: "Full Page Spinner",
    description: "A spinner component that takes full page size and centers itself in the viewport"
  },
  "conditional-tooltip": {
    name: "conditional-tooltip",
    title: "Conditional Tooltip",
    description: "A tooltip component that conditionally renders based on a condition"
  },
  "bottom-drawer": {
    name: "bottom-drawer",
    title: "Bottom Drawer",
    description: "A mobile-friendly bottom drawer component built on top of Vaul, including a menu variant."
  },
  "form-field-wrapper": {
    name: "form-field-wrapper",
    title: "Form Field Wrapper",
    description: "A wrapper component for react-hook-form fields providing consistent label, description, and error message handling."
  }
} as const;
