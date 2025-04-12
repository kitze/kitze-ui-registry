import { clsx, type ClassValue } from "clsx";
import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getRegistryUrl = (name: string) => {
  const url = process.env.NEXT_PUBLIC_BASE_URL || "https://ui.kitze.io";
  return `${url}/r/${name}.json`;
};

export type ReactFC<T> = React.FC<PropsWithChildren & T>;

export type Size = "xs" | "sm" | "md" | "lg";

export const processColor = (c: string | undefined): string | undefined => {
  if (!c) return undefined;
  return c.startsWith("bg-") ? c.substring(3) : c;
};
