import React from "react";
import { ReactFC } from "@/lib/types";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { ContextMenuItem } from "@/components/ui/context-menu";
import { DropdownMenuShortcut } from "@/components/ui/dropdown-menu";
import { ContextMenuShortcut } from "@/components/ui/context-menu";
import {
  useLinkableComponent,
  LinkableProps,
} from "@/registry/hooks/useLinkableComponent";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

export interface CommonMenuItemProps extends LinkableProps {
  children: React.ReactNode;
  shortcut?: string;
  hint?: string;
  leftIcon?: LucideIcon;
  rightIcon?: LucideIcon;
  className?: string;
  menuType?: "dropdown" | "context";
  disabled?: boolean;
  destructive?: boolean;
  onSelect?: () => void;
}

export const CommonMenuItem: ReactFC<CommonMenuItemProps> = ({
  children,
  shortcut,
  hint,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  className,
  menuType = "context",
  disabled,
  destructive,
  onSelect,
  ...rest
}) => {
  const { Component, href, linkProps } = useLinkableComponent(rest);

  const MenuItem = menuType === "dropdown" ? DropdownMenuItem : ContextMenuItem;
  const MenuShortcut =
    menuType === "dropdown" ? DropdownMenuShortcut : ContextMenuShortcut;

  const iconClasses = cn("h-4 w-4", destructive && "text-destructive");

  const itemClasses = cn(className, destructive && "text-destructive");

  const content = (
    <>
      {LeftIcon && <LeftIcon className={cn("mr-2", iconClasses)} />}
      <span>{children}</span>
      {hint && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="ml-2">
                <HelpCircle className="h-4 w-4 text-muted-foreground" />
              </span>
            </TooltipTrigger>
            <TooltipContent>{hint}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
      {RightIcon && <RightIcon className={cn("ml-auto", iconClasses)} />}
      {shortcut && <MenuShortcut>{shortcut}</MenuShortcut>}
    </>
  );

  // With link
  if (href && Component !== "div") {
    return (
      <MenuItem
        className={itemClasses}
        disabled={disabled}
        onSelect={onSelect}
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
    <MenuItem className={itemClasses} disabled={disabled} onSelect={onSelect}>
      {content}
    </MenuItem>
  );
};
