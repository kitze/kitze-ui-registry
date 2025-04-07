"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { SelectOption } from "@/lib/select-option";
import { SimpleSelect } from "@/registry/new-york/simple-select/SimpleSelect";
import { BottomDrawerMenu } from "@/registry/new-york/bottom-drawer/BottomDrawerMenu";
import { BottomDrawerMenuItem } from "@/registry/new-york/bottom-drawer/BottomDrawerMenuItem";
import { useKitzeUI } from "@/registry/new-york/kitze-ui-context/KitzeUIContext";
import { useControlledOpen } from "@/registry/hooks/useControlledOpen";

export type MobileViewType = "native" | "bottom-drawer";

export interface ResponsiveSelectProps {
  options: SelectOption[];
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
  triggerClassName?: string;
  disabled?: boolean;
  mobileView?: MobileViewType;
  drawerTitle?: string;
}

export function ResponsiveSelect({
  options,
  value,
  onValueChange,
  placeholder = "Select an option",
  className,
  triggerClassName,
  disabled,
  mobileView = "bottom-drawer",
  drawerTitle = "Select an option",
}: ResponsiveSelectProps) {
  const { isMobile } = useKitzeUI();
  const { isOpen, setIsOpen, close } = useControlledOpen({});

  // Find the selected option to display on the trigger
  const selectedOption = options.find((option) => option.value === value);
  const displayText = selectedOption
    ? selectedOption.label || selectedOption.value
    : placeholder;

  // Render a native select for mobile when that option is chosen
  if (isMobile && mobileView === "native") {
    return (
      <div className={cn("relative", className)}>
        <div
          className={cn(
            "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            triggerClassName
          )}
        >
          <span className="flex-grow truncate">{displayText}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-2 h-4 w-4 opacity-50"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
        <select
          value={value}
          onChange={(e) => onValueChange?.(e.target.value)}
          disabled={disabled}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        >
          <option value="" disabled hidden>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label || option.value}
            </option>
          ))}
        </select>
      </div>
    );
  }

  // Render a bottom drawer for mobile when that option is chosen
  if (isMobile && mobileView === "bottom-drawer") {
    return (
      <BottomDrawerMenu
        title={drawerTitle}
        open={isOpen}
        onOpenChange={setIsOpen}
        content={
          <div className="flex flex-col">
            {options.map((option) => (
              <BottomDrawerMenuItem
                key={option.value}
                leftIcon={option.icon}
                emoji={option.emoji}
                closeOnClick={option.closeOnClick}
                onClick={() => {
                  onValueChange?.(option.value);
                }}
                className={value === option.value ? "bg-muted" : ""}
              >
                {option.label || option.value}
              </BottomDrawerMenuItem>
            ))}
          </div>
        }
      >
        <button
          className={cn(
            "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            triggerClassName,
            className
          )}
          onClick={() => setIsOpen(true)}
          disabled={disabled}
        >
          <span className="flex-grow truncate">{displayText}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-2 h-4 w-4 opacity-50"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
      </BottomDrawerMenu>
    );
  }

  // Default to SimpleSelect for desktop
  return (
    <SimpleSelect
      options={options}
      value={value}
      onValueChange={onValueChange}
      placeholder={placeholder}
      className={className}
      triggerClassName={triggerClassName}
      disabled={disabled}
    />
  );
}
