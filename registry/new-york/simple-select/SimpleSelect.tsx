"use client";

import * as React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LucideIcon } from "lucide-react";

export type SimpleSelectOption = {
  value: string;
  label?: string;
  emoji?: string;
  icon?: LucideIcon;
};

export interface SimpleSelectProps {
  options: SimpleSelectOption[];
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
  triggerClassName?: string;
  disabled?: boolean;
}

export function SimpleSelect({
  options,
  value,
  onValueChange,
  placeholder = "Select an option",
  className,
  triggerClassName,
  disabled,
}: SimpleSelectProps) {
  return (
    <Select value={value} onValueChange={onValueChange} disabled={disabled}>
      <SelectTrigger className={triggerClassName}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.icon &&
              React.createElement(option.icon, { className: "mr-2 h-4 w-4" })}
            {option.emoji && <span className="mr-2">{option.emoji}</span>}
            {option.label || option.value}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
