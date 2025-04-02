// This file is auto-generated. Do not edit manually.
export type ComponentName = "suspensed" | "spinner" | "simple-tooltip" | "simple-accordion" | "page-header" | "full-page-spinner" | "fill-height-spinner" | "custom-button" | "conditional-wrap" | "conditional-tooltip" | "bottom-drawer" | "kitze-ui-context";

export interface ComponentMeta {
  name: ComponentName;
  title: string;
  description: string;
}

export const componentMeta: Record<ComponentName, ComponentMeta> = {
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
  "simple-accordion": {
    name: "simple-accordion",
    title: "Simple Accordion",
    description: "A simple accordion component"
  },
  "page-header": {
    name: "page-header",
    title: "Page Header",
    description: "A responsive page header component with mobile drawer support"
  },
  "full-page-spinner": {
    name: "full-page-spinner",
    title: "Full Page Spinner",
    description: "A spinner component that takes full page size and centers itself in the viewport"
  },
  "fill-height-spinner": {
    name: "fill-height-spinner",
    title: "Fill Height Spinner",
    description: "A spinner component that fills and centers in its container height"
  },
  "custom-button": {
    name: "custom-button",
    title: "Custom Button",
    description: "A customizable button component with various styles, sizes, and features like loading state and icon support"
  },
  "conditional-wrap": {
    name: "conditional-wrap",
    title: "Conditional Wrap",
    description: "A utility component that conditionally wraps its children with a wrapper component. Useful for conditional wrappers like tooltips, links, popovers, drag handlers, etc."
  },
  "conditional-tooltip": {
    name: "conditional-tooltip",
    title: "Conditional Tooltip",
    description: "A tooltip component that conditionally renders based on a condition"
  },
  "bottom-drawer": {
    name: "bottom-drawer",
    title: "Bottom Drawer",
    description: "A customizable bottom drawer component built on top of Vaul with support for custom headers, styles, and animations"
  },
  "kitze-ui-context": {
    name: "kitze-ui-context",
    title: "Kitze UI Context",
    description: "Provides UI context like mobile detection for Kitze UI components."
  }
} as const;
