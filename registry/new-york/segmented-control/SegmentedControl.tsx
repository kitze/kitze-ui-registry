import React from "react";
import { cn } from "@/lib/utils";
import { tv, type VariantProps } from "tailwind-variants";

export type SegmentedControlOption = {
  value: string;
  label: string;
  leftIcon?: React.ComponentType<any>;
  rightIcon?: React.ComponentType<any>;
  leftSide?: React.ComponentType<any>;
  rightSide?: React.ComponentType<any>;
  disabled?: boolean;
};

const segmentedControl = tv({
  base: "inline-flex items-center justify-start rounded-md bg-muted p-1",
  variants: {
    size: {
      sm: "h-8",
      md: "h-10",
      lg: "h-12",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const segmentedItem = tv({
  base: "inline-flex items-center justify-center whitespace-nowrap rounded-sm ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 cursor-pointer hover:bg-background/50 disabled:pointer-events-none disabled:opacity-50",
  variants: {
    size: {
      sm: "px-2 py-1 text-xs",
      md: "px-3 py-1.5 text-sm",
      lg: "px-4 py-2 text-base",
    },
    active: {
      true: "bg-background text-foreground shadow-sm hover:bg-background",
      false: "",
    },
  },
  defaultVariants: {
    size: "md",
    active: false,
  },
});

const iconSize = {
  sm: "h-3 w-3",
  md: "h-4 w-4",
  lg: "h-5 w-5",
};

export interface SegmentedControlProps
  extends VariantProps<typeof segmentedControl> {
  options: SegmentedControlOption[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
  tabClassName?: string;
  activeTabClassName?: string;
}

export const SegmentedControl = ({
  options,
  value,
  onChange,
  className,
  tabClassName,
  activeTabClassName,
  size = "md",
}: SegmentedControlProps) => {
  return (
    <div
      className={segmentedControl({ size, className })}
      role="tablist"
      aria-orientation="horizontal"
    >
      {options.map((option) => {
        const isActive = option.value === value;
        const LeftIcon = option.leftIcon;
        const RightIcon = option.rightIcon;
        const LeftSide = option.leftSide;
        const RightSide = option.rightSide;

        return (
          <button
            key={option.value}
            type="button"
            role="tab"
            onClick={() => !option.disabled && onChange(option.value)}
            className={cn(
              segmentedItem({ size, active: isActive }),
              tabClassName,
              isActive && activeTabClassName
            )}
            aria-selected={isActive}
            disabled={option.disabled}
          >
            {LeftSide && <LeftSide />}
            {LeftIcon && (
              <LeftIcon className={cn("mr-2", iconSize[size || "md"])} />
            )}
            {option.label}
            {RightIcon && (
              <RightIcon className={cn("ml-2", iconSize[size || "md"])} />
            )}
            {RightSide && <RightSide />}
          </button>
        );
      })}
    </div>
  );
};
