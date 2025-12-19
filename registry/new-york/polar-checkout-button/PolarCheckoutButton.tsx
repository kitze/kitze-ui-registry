"use client";

import { useState, ReactNode } from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { AppleLogo } from "@/registry/new-york/apple-logo/AppleLogo";

export interface PolarCheckoutButtonProps {
  /** The checkout URL to redirect to */
  checkoutUrl: string;
  /** The price to display (e.g., "$19", "$29") */
  price: string;
  /** The product name (e.g., "DMX", "Sotto") */
  productName?: string;
  /** Button variant */
  variant?: "hero" | "pricing" | "header" | "custom";
  /** Custom button text (overrides default) */
  text?: string;
  /** Hide the Apple logo icon */
  hideIcon?: boolean;
  /** Custom left icon/content */
  children?: ReactNode;
  /** Custom right icon */
  rightIcon?: ReactNode;
  /** Additional className */
  className?: string;
}

export const PolarCheckoutButton = ({
  checkoutUrl,
  price,
  productName,
  variant = "hero",
  text,
  hideIcon = false,
  children,
  rightIcon,
  className,
}: PolarCheckoutButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    window.location.href = checkoutUrl;
  };

  const getDefaultText = () => {
    if (productName) {
      switch (variant) {
        case "header":
          return `Buy — ${price}`;
        case "pricing":
          return `Buy for macOS — ${price}`;
        default:
          return `Get ${productName} — ${price}`;
      }
    }
    return `Buy Now — ${price}`;
  };

  const displayText = text || getDefaultText();

  const getBaseStyles = () => {
    switch (variant) {
      case "hero":
        return "group relative inline-flex h-14 items-center justify-center rounded-full bg-white px-10 font-semibold text-black transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] before:absolute before:inset-0 before:rounded-full before:border-2 before:border-white/50 before:animate-pulse disabled:hover:scale-100 disabled:opacity-90";
      case "header":
        return "group flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-medium text-black transition-transform active:scale-95 disabled:opacity-90";
      case "pricing":
        return "group inline-flex items-center justify-center w-full lg:w-auto rounded-xl bg-white px-10 py-4 font-semibold text-black hover:bg-zinc-200 transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] disabled:hover:scale-100 disabled:hover:bg-white disabled:opacity-90";
      case "custom":
        return "";
      default:
        return "";
    }
  };

  const iconSize = variant === "header" ? "h-3 w-3" : "h-5 w-5";
  const iconMargin = variant === "header" ? "" : "mr-2";
  const shouldShowIcon = !hideIcon && variant !== "custom";

  return (
    <button
      onClick={handleClick}
      disabled={isLoading}
      className={cn(getBaseStyles(), className)}
    >
      {isLoading ? (
        <>
          <Loader2 className={cn("animate-spin", iconSize, iconMargin)} />
          <span>Redirecting...</span>
        </>
      ) : (
        <>
          {shouldShowIcon ? (
            <AppleLogo className={cn(iconSize, iconMargin)} />
          ) : (
            children
          )}
          <span>{displayText}</span>
          {rightIcon}
        </>
      )}
    </button>
  );
};
