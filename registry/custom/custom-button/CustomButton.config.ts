import { CustomButtonSize } from "./CustomButton.types";

type SizeStyle = {
  padding: string;
  gap: string;
  iconSize?: number;
};

export const sizeStyles: Record<CustomButtonSize, SizeStyle> = {
  xs: {
    padding: "px-2.5 py-1.5",
    gap: "gap-1.5",
    iconSize: 14,
  },
  sm: {
    padding: "px-3 py-2",
    gap: "gap-2",
    iconSize: 16,
  },
  md: {
    padding: "px-4 py-2",
    gap: "gap-2",
    iconSize: 16,
  },
  lg: {
    padding: "px-6 py-3",
    gap: "gap-3",
    iconSize: 20,
  },
};

export const spinnerSizeMap: Record<CustomButtonSize, number> = {
  xs: 14,
  sm: 16,
  md: 16,
  lg: 20,
};

export const defaultIconSizes: Record<CustomButtonSize, number> = {
  xs: 14,
  sm: 16,
  md: 16,
  lg: 20,
};
