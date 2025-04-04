import React, { useState } from "react";
import { SimpleTooltip } from "@/registry/new-york/simple-tooltip/SimpleTooltip";
import { ConditionalWrap } from "@/registry/new-york/conditional-wrap/ConditionalWrap";
import { BottomDrawer } from "@/registry/new-york/bottom-drawer/BottomDrawer";
import { ReactFC } from "@/lib/utils";

export interface ResponsiveTooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
  className?: string;
  tooltipClassName?: string;
  drawerTitle?: string;
  isMobile?: boolean;
}

export const ResponsiveTooltip: ReactFC<ResponsiveTooltipProps> = ({
  children,
  content,
  className,
  tooltipClassName,
  drawerTitle = "Information",
  isMobile = false, // Default to desktop view for safety
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // On desktop: use SimpleTooltip
  if (!isMobile) {
    return (
      <SimpleTooltip
        content={typeof content === "string" ? content : ""}
        className={className}
        tooltipClassName={tooltipClassName}
      >
        {children}
      </SimpleTooltip>
    );
  }

  // On mobile: use ConditionalWrap to handle click and BottomDrawer to show content
  return (
    <ConditionalWrap
      condition={true}
      wrap={(wrappedChildren) => (
        <>
          <div onClick={() => setIsOpen(true)}>{wrappedChildren}</div>
          <BottomDrawer
            open={isOpen}
            onOpenChange={setIsOpen}
            title={drawerTitle}
          >
            <div className="p-4">
              {typeof content === "object" ? content : <p>{content}</p>}
            </div>
          </BottomDrawer>
        </>
      )}
    >
      {children}
    </ConditionalWrap>
  );
};
