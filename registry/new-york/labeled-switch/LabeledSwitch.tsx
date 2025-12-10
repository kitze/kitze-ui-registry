import React from "react";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils"; // Assuming you might want cn for styling

export interface LabeledSwitchProps {
  id?: string;
  label: React.ReactNode;
  className?: string; // For the wrapper div
  // Add any other props you expect SwitchPrimitive.Root to take, e.g., checked, onCheckedChange, disabled, etc.
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  // You might want to expose other SwitchPrimitive.Root props as needed
}

export const LabeledSwitch: React.FC<LabeledSwitchProps> = ({
  id,
  label,
  className,
  checked,
  onCheckedChange,
  disabled,
  ...switchProps // Captures any other native Switch props passed in
}) => {
  const switchId = id || `labeled-switch-${React.useId()}`;

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <Switch
        id={switchId}
        checked={checked}
        onCheckedChange={onCheckedChange}
        disabled={disabled}
        {...switchProps}
      />
      <label
        htmlFor={switchId}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
    </div>
  );
};
