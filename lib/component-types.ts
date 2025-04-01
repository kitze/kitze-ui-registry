// This file is auto-generated. Do not edit manually.
export type ComponentName = "suspensed" | "simple-tooltip" | "full-page-spinner" | "fill-height-spinner" | "conditional-tooltip" | "conditional-wrap" | "spinner" | "custom-button";

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
  "simple-tooltip": {
    name: "simple-tooltip",
    title: "Simple Tooltip",
    description: "A simplified tooltip component built on top of Radix UI tooltip"
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
  "conditional-tooltip": {
    name: "conditional-tooltip",
    title: "Conditional Tooltip",
    description: "A tooltip component that conditionally renders based on a condition"
  },
  "conditional-wrap": {
    name: "conditional-wrap",
    title: "Conditional Wrap",
    description: "A utility component that conditionally wraps its children with a wrapper component. Useful for conditional wrappers like tooltips, links, popovers, drag handlers, etc."
  },
  "spinner": {
    name: "spinner",
    title: "Spinner",
    description: "A customizable loading spinner component with different variants and sizes"
  },
  "custom-button": {
    name: "custom-button",
    title: "Custom Button",
    description: "A customizable button component with various styles, sizes, and features like loading state and icon support"
  }
} as const;
