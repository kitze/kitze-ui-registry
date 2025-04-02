import React, { useState } from "react";
import { ThemeSwitchSlider } from "./ThemeSwitchSlider";

export default function ThemeSwitchSliderPreview() {
  const [theme, setTheme] = useState<string>("light");
  const isDark = theme === "dark";
  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <ThemeSwitchSlider
          theme={theme}
          setTheme={setTheme}
          isDark={isDark}
          toggleTheme={toggleTheme}
        />
        <div className="text-sm font-medium">Current theme: {theme}</div>
      </div>
    </div>
  );
}
