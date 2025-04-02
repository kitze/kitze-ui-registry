import React, { useState } from "react";
import { ThemeSwitchMinimal } from "./ThemeSwitchMinimal";

export default function ThemeSwitchMinimalPreview() {
  const [theme, setTheme] = useState<string>("light");

  return <ThemeSwitchMinimal theme={theme} setTheme={setTheme} />;
}
