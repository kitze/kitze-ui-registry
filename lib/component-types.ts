// This file is auto-generated. Do not edit manually.
export type ComponentName = "spinner" | "simple-tooltip" | "simple-accordion" | "suspensed" | "custom-button" | "conditional-wrap" | "full-page-spinner" | "conditional-tooltip" | "fill-height-spinner";

export interface ComponentMeta {
  name: ComponentName;
  title: string;
  description: string;
}

export const componentMeta: Record<ComponentName, ComponentMeta> = {
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
  "suspensed": {
    name: "suspensed",
    title: "Suspensed",
    description: "A wrapper component for React Suspense with force option"
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
  "fill-height-spinner": {
    name: "fill-height-spinner",
    title: "Fill Height Spinner",
    description: "A spinner component that fills and centers in its container height"
  }
} as const;
