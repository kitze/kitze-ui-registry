import { useTheme } from "next-themes";
import { ReactFC } from "@/lib/types";
import { useMounted } from "@/registry/hooks/useMounted";
import {
  ThemeSwitchMinimal,
  ThemeSwitchMinimalClassNames,
} from "@/registry/new-york/theme-switch-minimal/ThemeSwitchMinimal";
import { CustomButtonProps } from "@/registry/new-york/custom-button/CustomButton";

export interface ThemeSwitchMinimalNextThemesProps {
  className?: string;
  classNames?: ThemeSwitchMinimalClassNames;
  buttonProps?: Partial<CustomButtonProps>;
}

export const ThemeSwitchMinimalNextThemes: ReactFC<
  ThemeSwitchMinimalNextThemesProps
> = ({ className, classNames, buttonProps }) => {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();

  if (!mounted) {
    return null;
  }

  return (
    <ThemeSwitchMinimal
      theme={theme || "light"}
      setTheme={setTheme}
      className={className}
      classNames={classNames}
      buttonProps={buttonProps}
    />
  );
};
