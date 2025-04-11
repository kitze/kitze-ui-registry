"use client";

import * as React from "react";
import { ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { SelectOption } from "@/lib/select-option";
import { SimpleSelect } from "@/registry/new-york/simple-select/SimpleSelect";
import { BottomDrawerMenu } from "@/registry/new-york/bottom-drawer/BottomDrawerMenu";
import { BottomDrawerMenuItem } from "@/registry/new-york/bottom-drawer/BottomDrawerMenuItem";
import { useKitzeUI } from "@/registry/new-york/kitze-ui-context/KitzeUIContext";
import { useControlledOpen } from "@/registry/hooks/useControlledOpen";
import { ResponsiveSelectBottomDrawerMenu } from "./ResponsiveSelectBottomDrawerMenu";
import { Button } from "@/components/ui/button";

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
  withSearch?: boolean;
  searchPlaceholder?: string;
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
  withSearch = false,
  searchPlaceholder = "Search options...",
}: ResponsiveSelectProps) {
  const { isMobile } = useKitzeUI();
  const { isOpen, setIsOpen, close } = useControlledOpen({});

  // Find the selected option to display on the trigger
  const selectedOption = options.find((option) => option.value === value);

  // Create the trigger button
  const triggerButton = (
    <Button
      variant="outline"
      role="combobox"
      className={cn("w-full justify-between", triggerClassName, className)}
      onClick={() => setIsOpen(true)}
      disabled={disabled}
    >
      {value && selectedOption ? (
        <span className="flex items-center truncate">
          {selectedOption.icon &&
            React.createElement(selectedOption.icon, {
              className: "mr-2 h-4 w-4",
            })}
          {selectedOption.emoji && (
            <span className="mr-2">{selectedOption.emoji}</span>
          )}
          {selectedOption.label || selectedOption.value}
        </span>
      ) : (
        placeholder
      )}
      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
    </Button>
  );

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
          <span className="flex-grow truncate">
            {selectedOption?.icon &&
              React.createElement(selectedOption.icon, {
                className: "mr-2 h-4 w-4 inline",
              })}
            {selectedOption?.emoji && (
              <span className="mr-2">{selectedOption.emoji}</span>
            )}
            {value && selectedOption
              ? selectedOption.label || value
              : placeholder}
          </span>
          <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
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
    // Use the new component when withSearch is true
    if (withSearch) {
      return (
        <ResponsiveSelectBottomDrawerMenu
          options={options}
          value={value}
          onValueChange={onValueChange}
          placeholder={placeholder}
          drawerTitle={drawerTitle}
          open={isOpen}
          onOpenChange={setIsOpen}
          searchPlaceholder={searchPlaceholder}
          triggerClassName={triggerClassName}
          className={className}
          disabled={disabled}
        >
          {triggerButton}
        </ResponsiveSelectBottomDrawerMenu>
      );
    }

    // Otherwise use the original bottom drawer implementation
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
                closeOnClick={true}
                onClick={() => {
                  onValueChange?.(option.value);
                  setIsOpen(false);
                }}
                className={value === option.value ? "bg-muted" : ""}
              >
                {option.label || option.value}
              </BottomDrawerMenuItem>
            ))}
          </div>
        }
      >
        {triggerButton}
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
      withSearch={withSearch}
      searchPlaceholder={searchPlaceholder}
    />
  );
}
