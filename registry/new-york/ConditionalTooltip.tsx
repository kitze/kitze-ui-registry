"use client";

import * as React from "react";
import { ReactFC } from "@/lib/types";
import { SimpleTooltip } from "@/registry/n/simple-tooltip/SimpleTooltip";

interface ConditionalTooltipClassNames {
  wrapper?: string;
  tooltip?: string;
  content?: string;
}

interface ConditionalTooltipProps {
  condition?: boolean;
  content?: string;
  children: React.ReactNode;
  classNames?: ConditionalTooltipClassNames;
}

export const ConditionalTooltip: ReactFC<ConditionalTooltipProps> = ({
  condition,
  content,
  children,
  classNames = {},
}) => {
  if (!condition || !content) {
    return <>{children}</>;
  }

  return (
    <SimpleTooltip
      content={content}
      className={classNames.wrapper}
      tooltipClassName={classNames.tooltip}
    >
      {children}
    </SimpleTooltip>
  );
};
