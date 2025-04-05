"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ElementType, InputHTMLAttributes, ReactNode } from "react";
import { Spinner } from "@/registry/new-york/spinner/Spinner";

export interface InputClassNames {
  container?: string;
  input?: string;
  leftIcon?: string;
  rightIcon?: string;
  leftItem?: string;
  rightItem?: string;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: ElementType;
  rightIcon?: ElementType;
  leftItem?: ReactNode;
  rightItem?: ReactNode;
  iconClassName?: string;
  classNames?: InputClassNames;
  /**
   * Whether the input is in a loading state
   * @default false
   */
  isLoading?: boolean;
  /**
   * The size of the loading spinner
   * @default "sm"
   */
  spinnerSize?: "xs" | "sm" | "md" | "lg" | "xl";
}

export function Input({
  className,
  type,
  leftIcon,
  rightIcon,
  leftItem,
  rightItem,
  classNames = {},
  isLoading = false,
  spinnerSize = "sm",
  disabled,
  iconClassName,
  ref,
  ...props
}: InputProps & { ref?: React.Ref<HTMLInputElement> }) {
  // If loading, override left icon with spinner
  const effectiveLeftIcon = isLoading ? undefined : leftIcon;
  const effectiveLeftItem = isLoading ? (
    <Spinner size={spinnerSize} />
  ) : (
    leftItem
  );

  // Handle both explicit disabled prop and loading state
  const isDisabled = disabled || isLoading;

  const hasLeft = isLoading || effectiveLeftIcon || effectiveLeftItem;
  const hasRight = rightIcon || rightItem;

  const inputElement = (
    <input
      type={type}
      className={cn(
        "flex h-9 w-full rounded-md bg-transparent px-3 py-1 text-base",
        "transition-all duration-200 ease-in-out",
        "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",
        "placeholder:text-muted-foreground",
        "focus:outline-none",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "md:text-sm",
        hasLeft && "pl-1",
        hasRight && "pr-1",
        !hasLeft &&
          !hasRight &&
          "border border-input focus-visible:outline-none focus-visible:border-2 focus-visible:border-primary",
        !hasLeft && !hasRight && className,
        classNames.input
      )}
      ref={ref}
      disabled={isDisabled}
      {...props}
    />
  );

  if (!hasLeft && !hasRight) {
    return inputElement;
  }

  return (
    <div
      className={cn(
        "relative flex items-center rounded-md border border-input bg-background",
        "transition-all duration-200 ease-in-out",
        "focus-within:border-2 focus-within:border-primary",
        isDisabled && "opacity-50 cursor-not-allowed",
        classNames.container,
        className
      )}
    >
      {hasLeft && (
        <div className="flex items-center pl-3">
          {effectiveLeftIcon && (
            <div
              className={cn(
                "size-5 text-foreground/70 transition-colors duration-200 flex items-center justify-center",
                classNames.leftIcon,
                iconClassName
              )}
            >
              {React.createElement(effectiveLeftIcon)}
            </div>
          )}
          {effectiveLeftItem && (
            <div className={cn("text-foreground", classNames.leftItem)}>
              {effectiveLeftItem}
            </div>
          )}
        </div>
      )}
      {inputElement}
      {hasRight && (
        <div className="flex items-center pr-3">
          {rightIcon && (
            <div
              className={cn(
                "size-5 text-foreground/70 transition-colors duration-200 flex items-center justify-center",
                classNames.rightIcon,
                iconClassName
              )}
            >
              {React.createElement(rightIcon)}
            </div>
          )}
          {rightItem && (
            <div className={cn("text-foreground", classNames.rightItem)}>
              {rightItem}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
