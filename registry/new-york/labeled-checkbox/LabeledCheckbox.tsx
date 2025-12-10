import React from "react";
import { Checkbox } from "@/components/ui/checkbox"; // Assuming this is the shadcn/ui checkbox
import { cn } from "@/lib/utils";

export interface LabeledCheckboxProps {
  id?: string;
  label: React.ReactNode;
  classNames?: {
    root?: string;
    checkbox?: string;
    label?: string;
  };
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  invert?: boolean; // To control label/checkbox order, default: checkbox then label
  // Add any other props from shadcn Checkbox that should be exposed
  // e.g. name, value, required, etc. (Refer to shadcn/ui Checkbox API)
  name?: string;
  value?: string;
  required?: boolean;
}

export const LabeledCheckbox: React.FC<LabeledCheckboxProps> = ({
  id,
  label,
  classNames = {},
  checked,
  onCheckedChange,
  disabled,
  invert = false, // Default: checkbox first, then label
  ...checkboxProps // Captures other native Checkbox props
}) => {
  const checkboxId = id || `labeled-checkbox-${React.useId()}`;

  // To make the entire component clickable to toggle state
  const handleRootClick = () => {
    if (!disabled && onCheckedChange) {
      onCheckedChange(!checked);
    }
  };

  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const checkboxElement = (
    <div onClick={stopPropagation}>
      {" "}
      {/* Stop propagation to prevent double toggle from root click */}
      <Checkbox
        id={checkboxId}
        checked={checked}
        onCheckedChange={onCheckedChange}
        disabled={disabled}
        className={cn(classNames.checkbox)}
        {...checkboxProps}
      />
    </div>
  );

  const labelElement = (
    <label
      htmlFor={checkboxId}
      className={cn(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        classNames.label
      )}
      onClick={stopPropagation} // Stop propagation to prevent double toggle from root click
    >
      {label}
    </label>
  );

  return (
    <div
      className={cn(
        "flex items-center space-x-2",
        classNames.root,
        { "cursor-pointer": !disabled } // Make root div look clickable
      )}
      onClick={handleRootClick} // Make root div clickable
    >
      {invert ? (
        <>
          {labelElement}
          {checkboxElement}
        </>
      ) : (
        <>
          {checkboxElement}
          {labelElement}
        </>
      )}
    </div>
  );
};
