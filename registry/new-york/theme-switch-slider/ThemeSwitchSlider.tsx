"use client";

import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactFC } from "@/lib/types";
import { LucideMoon } from "lucide-react";
import { useEffect, useState } from "react";

export interface ThemeSwitchSliderProps {
  theme: string;
  setTheme: (theme: string) => void;
  isDark: boolean;
  toggleTheme: () => void;
  className?: string;
}

export const ThemeSwitchSlider: ReactFC<ThemeSwitchSliderProps> = ({
  isDark,
  toggleTheme,
  className,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={cn("h-[34px] w-[60px]", className)} />;
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className={cn(
        "relative cursor-pointer h-[34px] w-[60px] rounded-2xl p-1 transition-colors duration-200",
        "hover:scale-105 active:scale-100",
        isDark
          ? "bg-violet-900/80 hover:bg-violet-900"
          : "bg-sky-400/40 hover:bg-sky-400/60",
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Stars */}
      <div className="relative left-0 bottom-[12px]">
        {[...Array(6)].map((_, i) => {
          const size = i % 2 === 0 ? 2 : 1;
          const positions = [
            { x: 10, y: 3 },
            { x: 3, y: 7 },
            { x: 12, y: 18 },
            { x: 15, y: 10 },
            { x: 19, y: 4 },
            { x: 22, y: 14 },
          ];

          return (
            <motion.div
              key={i}
              className={cn(
                "absolute rounded-full bg-white/90",
                size === 2 ? "h-[2px] w-[2px]" : "h-[1px] w-[1px]"
              )}
              style={{
                left: positions[i].x,
                top: positions[i].y,
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: isDark ? 1 : 0,
                y: isDark ? 0 : 10,
                scale: isDark ? [1, 1.2, 1] : 1,
              }}
              transition={{
                duration: 0.2,
                delay: i * 0.05,
                scale: {
                  repeat: Infinity,
                  duration: 2,
                  delay: i * 0.3,
                },
              }}
            />
          );
        })}
      </div>

      {/* Sun/Moon Circle */}
      <motion.div
        className={cn(
          "absolute top-0 bottom-0 my-auto h-7 w-7 rounded-full",
          "flex items-center justify-center",
          "transition-colors duration-200",
          isDark
            ? "border-2 border-white/90 bg-white/40"
            : "border-2 border-amber-400/70 bg-amber-200"
        )}
        animate={{
          x: isDark ? 24 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
        }}
      >
        <AnimatePresence mode="wait">
          {isDark && (
            <motion.div
              key="moon"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              <LucideMoon className="h-4 w-4 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.button>
  );
};
