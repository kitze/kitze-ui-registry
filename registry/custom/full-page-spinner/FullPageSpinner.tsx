"use client";

import * as React from "react";
import { ReactFC } from "@/lib/types";
import { Spinner, SpinnerProps } from "@/registry/custom/spinner/Spinner";

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
