import * as React from "react";
import { cn } from "@/lib/utils";
import { ReactFC } from "@/lib/types";
import { useLinkableComponent } from "@/hooks/useLinkableComponent";
import { ConditionalTooltip } from "@/registry/custom/conditional-tooltip/ConditionalTooltip";
import { Spinner } from "@/registry/custom/spinner/Spinner";
import { CustomButtonProps } from "./CustomButton.types";
import { buttonVariants } from "./CustomButton.variants";
import {
  sizeStyles,
  spinnerSizeMap,
  defaultIconSizes,
} from "./CustomButton.config";

type ColorMap = {
  destructive: string;
  primary: string;
  secondary: string;
  [key: string]: string;
};

export const CustomButton: ReactFC<CustomButtonProps> = ({
  className,
  variant = "default",
  size = "md",
  circle,
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
    destructive: "var(--color-red-500)",
    primary: "var(--color-primary)",
    secondary: "var(--color-secondary)",
  };
  const buttonColor = colorMap[color] ?? `var(--color-${color})`;

  //if size is not found in sizeStyles, throw an error
  if (!sizeStyles[size]) {
    throw new Error(`Invalid size: ${size}`);
  }

  const foundSizeStyle = sizeStyles[size] || sizeStyles.md;
  const { padding, gap } = foundSizeStyle;
  const defaultIconSize = foundSizeStyle.iconSize ?? defaultIconSizes[size];
  const finalIconSize = iconSize ?? defaultIconSize;
  const isIconOnly = circle || (!children && !!Icon);

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
      <Spinner size={spinnerSizeMap[size]} className="shrink-0 text-current" />
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

  const button = (
    <Component
      className={buttonVariants({
        variant,
        size,
        shape: circle ? "circle" : "default",
        isIconButton: isIconOnly,
        color,
        class: cn(className, !circle && !isIconOnly && padding, gap),
      })}
      style={{ "--button-color": buttonColor, ...style } as React.CSSProperties}
      href={linkHref}
      {...(Component === "button" ? { disabled: disabled || loading } : {})}
      {...linkProps}
      {...props}
    >
      {buttonContent}
    </Component>
  );

  return tooltip ? (
    <ConditionalTooltip
      content={tooltip}
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
