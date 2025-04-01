import {
  LucideLoader,
  LucideLoaderCircle,
  LucideLoaderPinwheel,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ReactFC } from "@/lib/types";
import { Suspensed } from "@/registry/custom/suspensed/Suspensed";

const variants = {
  default: LucideLoader,
  circle: LucideLoaderCircle,
  pinwheel: LucideLoaderPinwheel,
} as const;

const sizes = {
  xs: "w-3 h-3",
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6",
  xl: "w-8 h-8",
} as const;

export interface SpinnerProps {
  /**
   * The variant of the spinner
   * @default "default"
   */
  variant?: keyof typeof variants;

  /**
   * The size of the spinner
   * @default "md"
   */
  size?: keyof typeof sizes;

  /**
   * Optional className for the spinner
   */
  className?: string;
}

export const Spinner: ReactFC<SpinnerProps> = ({
  variant = "default",
  size = "md",
  className,
}) => {
  const SpinnerIcon = variants[variant];

  return (
    <SpinnerIcon
      className={cn("animate-spin text-foreground/50", sizes[size], className)}
    />
  );
};

export interface FullPageSpinnerProps extends SpinnerProps {}

export const FullPageSpinner: ReactFC<FullPageSpinnerProps> = ({
  size = "xl",
  ...props
}) => {
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center">
      <Spinner size={size} {...props} />
    </div>
  );
};

export interface FillHeightSpinnerProps extends SpinnerProps {
  /**
   * Optional className for the wrapper div
   */
  wrapperClassName?: string;
}

export const FillHeightSpinner: ReactFC<FillHeightSpinnerProps> = ({
  size = "xl",
  wrapperClassName,
  ...props
}) => {
  return (
    <div
      className={cn(
        "flex-1 flex w-full items-center justify-center",
        wrapperClassName
      )}
    >
      <Spinner size={size} {...props} />
    </div>
  );
};

export interface SuspenseFullScreenProps {
  children: React.ReactNode;
  force?: boolean;
  /**
   * The size of the spinner
   * @default "xl"
   */
  size?: SpinnerProps["size"];
}

export const SuspenseFullScreen: ReactFC<SuspenseFullScreenProps> = ({
  children,
  force,
  size = "xl",
}) => {
  return (
    <Suspensed fallback={<FullPageSpinner size={size} />} force={force}>
      {children}
    </Suspensed>
  );
};

export interface SuspenseFillHeightProps
  extends Omit<FillHeightSpinnerProps, "size"> {
  children: React.ReactNode;
  force?: boolean;
  /**
   * The size of the spinner
   * @default "xl"
   */
  size?: SpinnerProps["size"];
}

export const SuspenseFillHeight: ReactFC<SuspenseFillHeightProps> = ({
  children,
  force,
  size = "xl",
  wrapperClassName,
}) => {
  return (
    <Suspensed
      fallback={
        <FillHeightSpinner size={size} wrapperClassName={wrapperClassName} />
      }
      force={force}
    >
      {children}
    </Suspensed>
  );
};
