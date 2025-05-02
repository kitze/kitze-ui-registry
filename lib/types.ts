import { PropsWithChildren } from "react";

export type ReactFC<T> = React.FC<PropsWithChildren & T>;
export type Size = "xs" | "sm" | "md" | "lg" | "xl";
