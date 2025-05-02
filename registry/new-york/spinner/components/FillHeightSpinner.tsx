"use client";

import * as React from "react";
import { ReactFC } from "@/lib/types";
import { Spinner, SpinnerProps } from "../Spinner";
import { cn } from "@/lib/utils";

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
