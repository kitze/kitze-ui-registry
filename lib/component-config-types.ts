/**
 * Type definitions for component registry configurations
 */

import { ComponentName, AvailableHook } from "./component-types";

// Define and export ShadcnComponent type
export type ShadcnComponent = string;

// Helper type to ensure no spaces
type NoSpaces<T extends string> = T extends `${string} ${string}` ? never : T;

// Types of available component files
export type ComponentFileType =
  | "registry:block"
  | "registry:component"
  | "registry:lib"
  | "registry:hook"
  | "registry:ui"
  | "registry:page"
  | "registry:file"
  | "registry:style"
  | "registry:theme";

export interface ComponentFile {
  path: string;
  type: ComponentFileType;
  content?: string;
}

/**
 * Dependencies configuration for components
 *
 * @property {string[]} npm - NPM package dependencies
 * @property {ShadcnComponent[]} shad - Shadcn UI component dependencies
 * @property {ComponentName[]} linked - Dependencies on other components in our registry
 * @property {AvailableHook[]} hooks - Hook dependencies
 */
export interface DependenciesConfig {
  npm?: string[];
  shad?: ShadcnComponent[];
  linked?: ComponentName[];
  hooks?: AvailableHook[];
}

/**
 * Component configuration schema for component registry
 *
 * @property {string} name - The unique identifier for the component
 * @property {string} title - Human-readable title for the component
 * @property {string} description - Description of the component functionality
 * @property {string} type - The type of registry item (usually registry:component)
 * @property {ComponentFile[]} files - Array of file configurations for the component
 * @property {DependenciesConfig} dependencies - Structured dependencies configuration
 *
 * @property {AvailableHook[]} [hooks] - DEPRECATED: Use dependencies.hooks instead - Array of hook names
 * @property {string[] | DependenciesConfig} [dependencies] - DEPRECATED: Use dependencies.npm instead if array
 * @property {ShadcnComponent[]} [shadcnDependencies] - DEPRECATED: Use dependencies.shad instead
 * @property {ComponentName[]} [linkedDependencies] - DEPRECATED: Use dependencies.linked instead
 * @property {string[]} [registryDependencies] - DEPRECATED: Combined shadcn and linked dependencies
 */
export interface ComponentConfig {
  name: NoSpaces<`${Lowercase<string>}`>;
  title: string;
  description: string;
  type: string;
  files: ComponentFile[];
  dependencies?: string[] | DependenciesConfig;
}

export interface Registry {
  $schema: string;
  name: string;
  homepage: string;
  items: ComponentConfig[];
}
