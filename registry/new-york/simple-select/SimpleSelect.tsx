"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SelectOption } from "@/lib/types";
import { useKitzeUI } from "@/registry/new-york/kitze-ui-context/KitzeUIContext";
import { useControlledOpen } from "@/registry/hooks/useControlledOpen";
import { ResponsiveSelectBottomDrawerMenu } from "@/registry/new-york/responsive-select/ResponsiveSelectBottomDrawerMenu";

export type SelectMobileViewType = "keep" | "native" | "bottom-drawer";

export type SimpleSelectOption = SelectOption;

export interface SimpleSelectProps {
  options: SelectOption[];
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
  triggerClassName?: string;
  disabled?: boolean;
  withSearch?: boolean;
  searchPlaceholder?: string;
  mobileView?: SelectMobileViewType;
  mobileViewSearch?: boolean;
  drawerTitle?: string;
}

export function SimpleSelect({
  options,
  value,
  onValueChange,
  placeholder = "Select an option",
  className,
  triggerClassName,
  disabled,
  withSearch = false,
  searchPlaceholder = "Search options...",
  mobileView = "keep",
  mobileViewSearch = false,
  drawerTitle = "Select an option",
}: SimpleSelectProps) {
  const { isMobile } = useKitzeUI();
  const { isOpen, setIsOpen, close } = useControlledOpen({});

  const selectedOption = options.find((option) => option.value === value);

  const triggerButton = (
    <Button
      variant="outline"
      role="combobox"
      aria-expanded={isOpen}
      className={cn("w-full justify-between", triggerClassName, className)}
      onClick={() => setIsOpen(!isOpen)}
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

  if (isMobile && mobileView === "native") {
    return (
      <div className={cn("relative w-full", className)}>
        <div
          className={cn(
            "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            triggerClassName,
            disabled && "opacity-50 cursor-not-allowed"
          )}
          aria-disabled={disabled}
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
          <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50 shrink-0" />
        </div>
        <select
          value={value || ""}
          onChange={(e) => onValueChange?.(e.target.value)}
          disabled={disabled}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
        >
          {placeholder && (
            <option value="" disabled hidden>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label || option.value}
            </option>
          ))}
        </select>
      </div>
    );
  }

  if (isMobile && mobileView === "bottom-drawer") {
    return (
      <ResponsiveSelectBottomDrawerMenu
        options={options}
        value={value}
        onValueChange={(val) => {
          onValueChange?.(val);
          close();
        }}
        placeholder={placeholder}
        drawerTitle={drawerTitle}
        open={isOpen}
        onOpenChange={setIsOpen}
        searchPlaceholder={searchPlaceholder}
        showSearch={mobileViewSearch}
        triggerClassName={triggerClassName}
        className={className}
        disabled={disabled}
      >
        {triggerButton}
      </ResponsiveSelectBottomDrawerMenu>
    );
  }

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        {React.cloneElement(triggerButton, { "aria-expanded": isOpen })}
      </PopoverTrigger>
      <PopoverContent
        className={cn("w-[--radix-popover-trigger-width] p-0", className)}
        style={{
          minWidth: "var(--radix-popover-trigger-width)",
        }}
      >
        <Command>
          {withSearch && <CommandInput placeholder={searchPlaceholder} />}
          <CommandList>
            <CommandEmpty>No options found.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={(currentValue) => {
                    onValueChange?.(currentValue === value ? "" : currentValue);
                    setIsOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === option.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {option.icon &&
                    React.createElement(option.icon, {
                      className: "mr-2 h-4 w-4",
                    })}
                  {option.emoji && <span className="mr-2">{option.emoji}</span>}
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
