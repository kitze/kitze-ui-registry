import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface MacWindowProps {
  /** Window content */
  children: ReactNode;
  /** Optional window title displayed in the title bar */
  title?: string;
  /** Use dark theme (default) or light theme */
  dark?: boolean;
  /** Additional className for the container */
  className?: string;
  /** Show traffic light borders for more realistic look */
  showTrafficLightBorders?: boolean;
}

export const MacWindow = ({
  children,
  title,
  dark = true,
  className,
  showTrafficLightBorders = true,
}: MacWindowProps) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border shadow-2xl",
        dark
          ? "bg-[#1c1c1e] border-white/10 shadow-black/50"
          : "bg-white border-black/10 shadow-black/20",
        className
      )}
    >
      {/* Title Bar */}
      <div
        className={cn(
          "relative flex h-10 items-center px-4 border-b",
          dark ? "bg-[#2c2c2e] border-white/5" : "bg-[#f5f5f7] border-black/5"
        )}
      >
        {/* Traffic Lights */}
        <div className="flex items-center gap-2 z-10">
          <div
            className={cn(
              "h-3 w-3 rounded-full bg-[#ff5f57]",
              showTrafficLightBorders && "border border-[#e0443e]"
            )}
          />
          <div
            className={cn(
              "h-3 w-3 rounded-full bg-[#febc2e]",
              showTrafficLightBorders && "border border-[#d89e24]"
            )}
          />
          <div
            className={cn(
              "h-3 w-3 rounded-full bg-[#28c840]",
              showTrafficLightBorders && "border border-[#1aab29]"
            )}
          />
        </div>

        {/* Title */}
        {title && (
          <div
            className={cn(
              "absolute inset-0 flex items-center justify-center text-xs font-medium opacity-60 pointer-events-none",
              dark ? "text-white" : "text-black"
            )}
          >
            {title}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative h-full w-full">{children}</div>
    </div>
  );
};
