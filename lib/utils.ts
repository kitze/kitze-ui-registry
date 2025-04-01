import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getRegistryUrl = (name: string) => {
  const url = process.env.NEXT_PUBLIC_BASE_URL || "https://ui.kitze.io";
  return `${url}/r/${name}.json`;
};

export type ReactFC<T> = React.FC<PropsWithChildren & T>;
