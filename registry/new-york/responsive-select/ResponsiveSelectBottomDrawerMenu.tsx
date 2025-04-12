"use client";

import * as React from "react";
import { SelectOption } from "@/lib/select-option";
import { BottomDrawerMenu } from "@/registry/new-york/bottom-drawer/BottomDrawerMenu";
import { BottomDrawerMenuItem } from "@/registry/new-york/bottom-drawer/BottomDrawerMenuItem";
import { SearchBar } from "@/registry/new-york/search-bar/SearchBar";

export interface ResponsiveSelectBottomDrawerMenuProps {
  options: SelectOption[];
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  drawerTitle?: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  searchPlaceholder?: string;
  showSearch?: boolean;
  triggerClassName?: string;
  className?: string;
  disabled?: boolean;
  children?: React.ReactNode;
}

export function ResponsiveSelectBottomDrawerMenu({
  options,
  value,
  onValueChange,
  placeholder = "Select an option",
  drawerTitle = "Select an option",
  open,
  onOpenChange,
  searchPlaceholder = "Search options...",
  showSearch = false,
  triggerClassName,
  className,
  disabled,
  children,
}: ResponsiveSelectBottomDrawerMenuProps) {
  const [searchQuery, setSearchQuery] = React.useState("");

  // Filter options based on search query
  const filteredOptions = React.useMemo(() => {
    if (!showSearch || !searchQuery.trim()) return options;

    const lowercaseQuery = searchQuery.toLowerCase();
    return options.filter((option) => {
      const label = (option.label || option.value).toLowerCase();
      return label.includes(lowercaseQuery);
    });
  }, [options, searchQuery, showSearch]);

  return (
    <BottomDrawerMenu
      title={drawerTitle}
      open={open}
      onOpenChange={onOpenChange}
      content={
        <div className="flex flex-col">
          {showSearch && (
            <div className="p-3">
              <SearchBar
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder={searchPlaceholder}
                autoFocus
              />
            </div>
          )}
          {filteredOptions.length === 0 ? (
            <div className="py-4 px-3 text-center text-muted-foreground">
              No options found
            </div>
          ) : (
            filteredOptions.map((option) => (
              <BottomDrawerMenuItem
                key={option.value}
                leftIcon={option.icon}
                emoji={option.emoji}
                closeOnClick={option.closeOnClick}
                onClick={() => {
                  onValueChange?.(option.value);
                  onOpenChange(false);
                }}
                className={value === option.value ? "bg-muted" : ""}
              >
                {option.label || option.value}
              </BottomDrawerMenuItem>
            ))
          )}
        </div>
      }
    >
      {children}
    </BottomDrawerMenu>
  );
}
