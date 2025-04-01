import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-all cursor-pointer active:scale-95 focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--button-bg)] text-[var(--button-text)] hover:opacity-90",
        outline:
          "border border-[var(--button-bg)/20]/20 text-[var(--button-bg)] bg-transparent hover:bg-[var(--button-bg)]/5",
        ghost:
          "text-[var(--button-bg)] bg-transparent hover:bg-[var(--button-bg)/20]",
        link: "text-[var(--button-bg)] underline-offset-4 hover:underline",
      },
      size: {
        xs: "h-7 px-2 text-xs",
        sm: "h-9 px-3 text-sm",
        md: "h-10 px-4 text-sm",
        lg: "h-12 px-5 text-base",
      },
      shape: {
        default: "rounded-md",
        circle: "rounded-full aspect-square p-0",
      },
      isIconButton: {
        true: "",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      shape: "default",
      isIconButton: false,
    },
  }
);

// Add a custom type for button variants that includes color as any string
export type ButtonVariantsProps = VariantProps<typeof buttonVariants> & {
  class?: string;
};
