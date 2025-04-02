import * as React from "react";
import { cn, ReactFC } from "@/lib/utils";
import { useLinkableComponent } from "@/registry/hooks/useLinkableComponent";
import { ConditionalTooltip } from "@/registry/new-york/conditional-tooltip/ConditionalTooltip";
import { Spinner } from "@/registry/new-york/spinner/Spinner";
import { tv } from "tailwind-variants";

type SizeStyle = {
  iconSize?: number;
};

export const sizeStyles: Record<CustomButtonSize, SizeStyle> = {
  xs: {
    iconSize: 14,
  },
  sm: {
    iconSize: 16,
  },
  md: {
    iconSize: 16,
  },
  lg: {
    iconSize: 20,
  },
};

export const spinnerSizeMap: Record<CustomButtonSize, number> = {
  xs: 14,
  sm: 16,
  md: 16,
  lg: 20,
};

export const defaultIconSizes: Record<CustomButtonSize, number> = {
  xs: 14,
  sm: 16,
  md: 16,
  lg: 20,
};

export const buttonVariants = tv({
  base: "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all cursor-pointer active:scale-95 focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  variants: {
    variant: {
      default:
        "bg-[var(--button-bg)] text-[var(--button-text)] hover:opacity-90",
      outline:
        "border border-[var(--button-text)]/20 dark:border-[var(--button-bg)] text-[var(--button-text)] bg-transparent hover:bg-[var(--button-bg)]/50",
      ghost:
        "text-[var(--button-bg)] text-[var(--button-text)] bg-transparent dark:hover:bg-[var(--button-bg)]/30 hover:bg-[var(--button-bg)]",
      link: "text-[var(--button-text)] text-[var(--button-text)]  underline-offset-4 hover:underline",
    },
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-sm",
      lg: "text-base",
    },
    shape: {
      default: "rounded-md",
      circle: "rounded-full!",
    },
    isIconButton: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [
    {
      isIconButton: true,
      size: "xs",
      class:
        "min-h-6 min-w-6 h-6 w-6 max-h-6 max-w-6 flex items-center justify-center",
    },
    {
      isIconButton: true,
      size: "sm",
      class:
        "min-h-8 min-w-8 h-8 w-8 max-h-8 max-w-8 flex items-center justify-center",
    },
    {
      isIconButton: true,
      size: "md",
      class:
        "min-h-10 min-w-10 h-10 w-10 max-h-10 max-w-10 flex items-center justify-center",
    },
    {
      isIconButton: true,
      size: "lg",
      class:
        "min-h-12 min-w-12 h-12 w-12 max-h-12 max-w-12 flex items-center justify-center",
    },
    {
      isIconButton: false,
      size: "xs",
      class: "h-7 px-2",
    },
    {
      isIconButton: false,
      size: "sm",
      class: "h-9 px-3",
    },
    {
      isIconButton: false,
      size: "md",
      class: "h-10 px-4",
    },
    {
      isIconButton: false,
      size: "lg",
      class: "h-12 px-5",
    },
  ],
  defaultVariants: {
    variant: "default",
    size: "md",
    shape: "default",
    isIconButton: false,
  },
});

// Add a custom type for button variants
export type ButtonVariantsProps = React.ComponentProps<
  typeof buttonVariants
> & {
  class?: string;
};

export type CustomButtonSize = "xs" | "sm" | "md" | "lg";
export type CustomButtonVariant = "default" | "outline" | "ghost" | "link";

export interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: CustomButtonSize;
  variant?: CustomButtonVariant;
  color?: string;
  circle?: boolean;
  icon?: React.ElementType;
  iconSize?: number;
  leftIcon?: React.ElementType;
  rightIcon?: React.ElementType;
  leftSide?: React.ReactNode;
  rightSide?: React.ReactNode;
  loading?: boolean;
  href?: string;
  external?: boolean;
  as?: React.ElementType;
  tooltip?: React.ReactNode;
  classNames?: {
    icon?: string;
    tooltip?: string;
  };
}

type ColorValue = {
  bg: string;
  text: string;
};

type ColorMap = {
  destructive: ColorValue;
  primary: ColorValue;
  secondary: ColorValue;
  [key: string]: ColorValue;
};

export const CustomButton: ReactFC<CustomButtonProps> = ({
  className,
  variant = "default",
  size = "md",
  circle = false,
  color = "secondary",
  style,
  icon: Icon,
  iconSize,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  leftSide,
  rightSide,
  loading,
  children,
  classNames = {},
  href,
  external,
  disabled = false,
  as,
  tooltip,
  ...props
}) => {
  const {
    Component = as || "button",
    href: linkHref,
    linkProps,
  } = useLinkableComponent({ href, external, ...props });

  const colorMap: ColorMap = {
    destructive: {
      bg: "var(--color-destructive)",
      text: "var(--color-destructive-foreground)",
    },
    primary: {
      bg: "var(--color-primary-foreground)",
      text: "var(--color-primary)",
    },
    secondary: {
      bg: "var(--color-secondary)",
      text: "var(--color-secondary-foreground)",
    },
  };

  const buttonColors = colorMap[color] ?? {
    bg: `var(--color-${color})`,
    text: "var(--color-default-foreground)",
  };

  //if size is not found in sizeStyles, throw an error
  if (!sizeStyles[size]) {
    throw new Error(`Invalid size: ${size}`);
  }

  const foundSizeStyle = sizeStyles[size] || sizeStyles.md;
  const defaultIconSize = foundSizeStyle.iconSize ?? defaultIconSizes[size];
  const finalIconSize = iconSize ?? defaultIconSize;
  const hasIcon = !!Icon || !!LeftIcon || !!RightIcon;
  const isIconOnly = circle || (!children && hasIcon);

  const renderIcon = (
    IconComponent: React.ElementType | undefined,
    className?: string
  ) =>
    IconComponent && (
      <IconComponent
        size={finalIconSize}
        className={cn(classNames.icon, "shrink-0", className)}
      />
    );

  const buttonContent = loading ? (
    <>
      <Spinner size={size} className="shrink-0 text-current" />
      {!isIconOnly && <span className="truncate">{children}</span>}
    </>
  ) : (
    <>
      {leftSide || renderIcon(LeftIcon)}
      {Icon
        ? renderIcon(Icon)
        : children && <span className="truncate">{children}</span>}
      {rightSide || renderIcon(RightIcon)}
    </>
  );

  // Setup attributes based on the component type
  const buttonAttributes: any = {
    className: buttonVariants({
      variant,
      size,
      shape: circle ? "circle" : "default",
      isIconButton: isIconOnly,
      class: className,
    }),
    style: {
      "--button-bg": buttonColors.bg,
      "--button-text": buttonColors.text,
      ...style,
    } as React.CSSProperties,
    ...linkProps,
    ...props,
  };

  // Add specific attributes based on component type
  if (Component === "button") {
    buttonAttributes.disabled = disabled || loading;
  } else if (href) {
    buttonAttributes.href = href;
  }

  const button = <Component {...buttonAttributes}>{buttonContent}</Component>;

  return tooltip ? (
    <ConditionalTooltip
      content={String(tooltip)}
      condition={true}
      classNames={{ tooltip: classNames.tooltip }}
    >
      {button}
    </ConditionalTooltip>
  ) : (
    button
  );
};

CustomButton.displayName = "CustomButton";
