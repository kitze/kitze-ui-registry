import React from "react";
import { ReactFC } from "@/lib/utils";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { ContextMenuItem } from "@/components/ui/context-menu";
import { DropdownMenuShortcut } from "@/components/ui/dropdown-menu";
import { ContextMenuShortcut } from "@/components/ui/context-menu";
import {
  useLinkableComponent,
  LinkableProps,
} from "@/registry/hooks/useLinkableComponent";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { useMenuContext } from "@/registry/new-york/menu-context/MenuContext";
import { BottomDrawerMenuItem } from "@/registry/new-york/bottom-drawer/BottomDrawerMenuItem";
import { HelpInfoCircle } from "@/registry/new-york/help-info-circle/HelpInfoCircle";

export interface CommonMenuItemProps extends LinkableProps {
  children: React.ReactNode;
  shortcut?: string;
  hint?: string;
  leftIcon?: LucideIcon;
  rightIcon?: LucideIcon;
  className?: string;
  disabled?: boolean;
  destructive?: boolean;
  onSelect?: () => void;
  isLast?: boolean;
}

export const CommonMenuItem: ReactFC<CommonMenuItemProps> = ({
  children,
  shortcut,
  hint,
  leftIcon,
  rightIcon,
  className,
  disabled,
  destructive,
  onSelect,
  isLast,
  ...rest
}) => {
  const { menuType, closeMenu } = useMenuContext();

  // Handle click with menu closing
  const handleClick = () => {
    if (onSelect) {
      onSelect();
    }

    // Close the menu if closeMenu function is provided
    if (closeMenu) {
      closeMenu();
    }
  };

  // If we're in a bottom drawer, render the BottomDrawerMenuItem
  if (menuType === "bottom-drawer") {
    return (
      <BottomDrawerMenuItem
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        className={className}
        disabled={disabled}
        destructive={destructive}
        onClick={handleClick}
        href={rest.href}
        external={rest.external}
        isLast={isLast}
        hint={hint}
      >
        {children}
      </BottomDrawerMenuItem>
    );
  }

  // For dropdown and context menus, use the existing implementation
  const { Component, href, linkProps } = useLinkableComponent(rest);

  const MenuItem = menuType === "dropdown" ? DropdownMenuItem : ContextMenuItem;
  const MenuShortcut =
    menuType === "dropdown" ? DropdownMenuShortcut : ContextMenuShortcut;

  const iconClasses = cn(
    "h-4 w-4",
    "text-muted-foreground",
    destructive && "text-destructive"
  );

  const itemClasses = cn(className, destructive && "text-destructive");

  const content = (
    <>
      {leftIcon &&
        React.createElement(leftIcon, { className: cn("mr-2", iconClasses) })}
      <span>{children}</span>
      {hint && (
        <span className="ml-2">
          <HelpInfoCircle
            content={hint}
            iconClassName={cn("h-3.5 w-3.5", destructive && "text-destructive")}
            isMobile={false}
          />
        </span>
      )}
      {rightIcon &&
        React.createElement(rightIcon, {
          className: cn("ml-auto", iconClasses),
        })}
      {shortcut && <MenuShortcut>{shortcut}</MenuShortcut>}
    </>
  );

  // With link
  if (href && Component !== "div") {
    return (
      <MenuItem
        className={itemClasses}
        disabled={disabled}
        onSelect={handleClick}
        asChild
      >
        <Component href={href} {...linkProps}>
          {content}
        </Component>
      </MenuItem>
    );
  }

  // Without link
  return (
    <MenuItem
      className={itemClasses}
      disabled={disabled}
      onSelect={handleClick}
    >
      {content}
    </MenuItem>
  );
};
