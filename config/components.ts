import { ComponentName } from "@/lib/component-types";
import { Registry } from "@/lib/component-config-types";

// Component group definition
export type ComponentGroup = {
  id: string;
  title: string;
  description?: string;
};

// Component definition with mapping to group
export type ComponentDefinition = {
  id: ComponentName;
  groupId: string;
  customLabel?: string;
};

// Define component groups
export const componentGroups: ComponentGroup[] = [
  {
    id: "components",
    title: "Components",
    description: "Standard UI components for building interfaces.",
  },
  {
    id: "enhanced",
    title: "Enhanced Components",
    description: "Advanced components with enhanced functionality and styling.",
  },
  {
    id: "form",
    title: "Form Components",
    description:
      "Components for building forms with react-hook-form integration.",
  },
  {
    id: "menu",
    title: "Menu Components",
    description: "Components for displaying context menus and dropdown menus.",
  },
  {
    id: "responsive",
    title: "Responsive Components",
    description:
      "Components that adapt to desktop or mobile view automatically.",
  },
  {
    id: "conditionals",
    title: "Conditionals",
    description:
      "Utility components for conditionally rendering or wrapping content.",
  },
  {
    id: "theme",
    title: "Theme Switches",
    description:
      "A set of components for switching between light and dark mode.",
  },
  {
    id: "next-themes",
    title: "Next Themes",
    description:
      "A set of components that are connected to the Next Themes library.",
  },
  {
    id: "simplified",
    title: "Simplified Components",
    description:
      "These are simplified components that use the shadcn components under the hood, but with much less boilerplate.",
  },
];

// Define all components in a flat list using the ComponentName type
export const components: ComponentDefinition[] = [
  // Enhanced Components - keep only these three
  { id: "input", groupId: "enhanced" },
  { id: "advanced-select", groupId: "enhanced" },
  { id: "custom-button", groupId: "enhanced" },

  // Moved to Components
  { id: "gradient-text", groupId: "components" },
  { id: "kbd", groupId: "components" },
  { id: "kbd-shortcuts", groupId: "components" },
  { id: "kbd-shortcuts-list", groupId: "components" },
  { id: "hoverable-icon", groupId: "components" },

  // Simplified Components
  { id: "simple-tooltip", groupId: "simplified" },
  { id: "simple-accordion", groupId: "simplified" },
  { id: "simple-dialog", groupId: "simplified" },
  { id: "simple-popover", groupId: "simplified" },
  { id: "simple-context-menu", groupId: "simplified" },
  { id: "simple-dropdown-menu", groupId: "simplified" },
  { id: "simple-select", groupId: "simplified" },

  // Form Components
  { id: "form-field-wrapper", groupId: "form" },
  { id: "form-field-input", groupId: "form" },
  { id: "form-field-checkbox", groupId: "form" },
  { id: "form-field-textarea", groupId: "form" },
  { id: "form-field-select", groupId: "form" },
  { id: "form-field-advanced-select", groupId: "form" },

  // Menu Components
  { id: "bottom-drawer", groupId: "menu" },
  { id: "menu-context", groupId: "menu" },

  // Conditionals
  { id: "conditional-wrap", groupId: "conditionals" },
  { id: "conditional-tooltip", groupId: "conditionals" },

  // Theme Switches
  { id: "theme-switch-minimal", groupId: "theme" },
  { id: "theme-switch-slider", groupId: "theme" },

  // Next Themes
  { id: "theme-switch-slider-next-themes", groupId: "next-themes" },
  { id: "theme-switch-minimal-next-themes", groupId: "next-themes" },

  // Additional components - moved from enhanced to components
  { id: "search-bar", groupId: "components" },
  { id: "with-search-bar", groupId: "components" },
  { id: "segmented-control", groupId: "components" },
  { id: "help-info-circle", groupId: "components" },

  // Core components - moved from enhanced to components
  { id: "spinner", groupId: "components" },
  { id: "full-page-spinner", groupId: "components" },
  { id: "fill-height-spinner", groupId: "components" },
  { id: "suspensed", groupId: "components" },
  { id: "page-header", groupId: "components" },
  { id: "ui-alert", groupId: "components" },
  { id: "kitze-ui-context", groupId: "components" },
  { id: "tab-panels", groupId: "components" },

  // Custom Badge
  {
    id: "custom-badge",
    groupId: "enhanced",
    customLabel: "Custom Badge",
  },
];

// Function to filter components based on search query
export function filterComponentsForSidebar(
  searchQuery: string
): ComponentDefinition[] {
  if (!searchQuery) return components;

  return components.filter((component) =>
    component.id.toLowerCase().includes(searchQuery.toLowerCase())
  );
}

// Function to group components for sidebar display
export function groupComponentsForSidebar(
  filteredComponents: ComponentDefinition[]
): Array<{ title: string; components: ComponentName[] }> {
  // Get unique group IDs from filtered components
  const groupIds = [...new Set(filteredComponents.map((comp) => comp.groupId))];

  // Create an array of groups with their components
  return groupIds
    .map((groupId) => {
      const group = componentGroups.find((g) => g.id === groupId);
      if (!group) return null;

      const groupComponents = filteredComponents
        .filter((comp) => comp.groupId === groupId)
        .map((comp) => comp.id);

      if (groupComponents.length === 0) return null;

      return {
        title: group.title,
        components: groupComponents,
      };
    })
    .filter(Boolean) as Array<{ title: string; components: ComponentName[] }>;
}
