import { PropsWithChildren } from "react";

export type ReactFC<T> = React.FC<PropsWithChildren & T>;
export type Size = "xs" | "sm" | "md" | "lg" | "xl";
export interface SelectOption {
  value: string;
  label?: string;
  emoji?: string;
  icon?: any;
  closeOnClick?: boolean;
  disabled?: boolean;
}
