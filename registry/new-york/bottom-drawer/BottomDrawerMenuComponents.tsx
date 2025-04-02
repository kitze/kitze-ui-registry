import React from "react";
import { ReactFC, cn } from "@/lib/utils";

// Label
export interface BottomDrawerMenuLabelProps {
  children: React.ReactNode;
  className?: string;
}

export const BottomDrawerMenuLabel: ReactFC<BottomDrawerMenuLabelProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        "px-4 py-2 text-sm font-medium text-zinc-500 dark:text-zinc-400 text-left",
        className
      )}
    >
      {children}
    </div>
  );
};

// Separator
export interface BottomDrawerMenuSeparatorProps {
  className?: string;
}

export const BottomDrawerMenuSeparator: ReactFC<
  BottomDrawerMenuSeparatorProps
> = ({ className }) => {
  return (
    <div
      className={cn(
        "h-[1px] my-1 bg-zinc-100 dark:bg-zinc-800 w-full",
        className
      )}
    />
  );
};

// Group
export interface BottomDrawerMenuGroupProps {
  children: React.ReactNode;
  className?: string;
}

export const BottomDrawerMenuGroup: ReactFC<BottomDrawerMenuGroupProps> = ({
  children,
  className,
}) => {
  return (
    <div className={cn("flex flex-col w-full", className)}>{children}</div>
  );
};
