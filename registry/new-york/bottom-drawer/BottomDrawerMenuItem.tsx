import React from "react";
import { ReactFC, cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { HelpInfoCircle } from "@/registry/new-york/help-info-circle/HelpInfoCircle";

export interface BottomDrawerMenuItemProps {
  children: React.ReactNode;
  leftIcon?: LucideIcon;
  rightIcon?: LucideIcon;
  className?: string;
  disabled?: boolean;
  destructive?: boolean;
  onClick?: () => void;
  href?: string;
  external?: boolean;
  isLast?: boolean;
  shortcut?: string;
  hint?: string;
}

export const BottomDrawerMenuItem: ReactFC<BottomDrawerMenuItemProps> = ({
  children,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  className,
  disabled,
  destructive,
  onClick,
  href,
  external,
  isLast,
  shortcut,
  hint,
}) => {
  const Component = href ? (external ? "a" : "a") : "button";
  const linkProps = href
    ? {
        href,
        ...(external && {
          target: "_blank",
          rel: "noopener noreferrer",
        }),
      }
    : {};

  const iconClasses = cn(
    "h-5 w-5",
    "text-muted-foreground",
    destructive && "text-destructive"
  );

  const itemClasses = cn(
    "flex items-center w-full px-4 py-3 text-base",
    !isLast && "border-b border-zinc-100 dark:border-zinc-800",
    "transition-colors active:bg-zinc-50 dark:active:bg-zinc-800/50",
    "text-left justify-start",
    disabled && "opacity-50 pointer-events-none",
    destructive && "text-destructive",
    className
  );

  return (
    <Component
      className={itemClasses}
      onClick={onClick}
      disabled={disabled && Component === "button"}
      {...linkProps}
    >
      {LeftIcon && (
        <LeftIcon className={cn("mr-3 flex-shrink-0", iconClasses)} />
      )}
      <span className="flex-1">{children}</span>
      {hint && (
        <div className="ml-2 flex-shrink-0">
          <HelpInfoCircle
            content={hint}
            drawerTitle="Help"
            iconClassName={destructive ? "text-destructive" : ""}
            isMobile={true}
          />
        </div>
      )}
      {RightIcon && (
        <RightIcon className={cn("ml-auto flex-shrink-0", iconClasses)} />
      )}
    </Component>
  );
};
