import { LucideIcon } from "lucide-react";

/**
 * Shared option type for select components
 */
export interface SelectOption {
  /** The unique value of the option */
  value: string;

  /** Display text for the option (falls back to value if not provided) */
  label?: string;

  /** Optional emoji to display next to the option */
  emoji?: string;

  /** Optional Lucide icon component to display next to the option */
  icon?: LucideIcon;

  /** Whether to close the menu when the option is clicked */
  closeOnClick?: boolean;
}
