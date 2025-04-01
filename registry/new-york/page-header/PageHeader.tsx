import { ReactNode, useState } from "react";
import { LucideMenu } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrolledPast } from "@/registry/hooks/useScrolledPast";
import { ReactFC } from "@/lib/utils";
import { CustomButton } from "@/registry/new-york/custom-button/CustomButton";
import { BottomDrawer } from "@/registry/new-york/bottom-drawer/BottomDrawer";

export interface PageHeaderClassNames {
  root?: string;
  container?: string;
  leftSide?: string;
  middle?: string;
  rightSide?: string;
  menuButton?: string;
  pastScrolled?: string;
}

export interface PageHeaderProps {
  leftSide?: ReactNode;
  middle?: ReactNode;
  drawerContent?: ReactNode;
  classNames?: PageHeaderClassNames;
  height?: number;
  fixedOnScroll?: boolean;
  renderRightSide?: (props: {
    menuButton: ReactNode;
    bottomDrawer: (children: ReactNode) => ReactNode;
  }) => ReactNode;
}

export const PageHeader: ReactFC<PageHeaderProps> = ({
  leftSide,
  middle,
  drawerContent,
  classNames,
  renderRightSide,
  height = 80,
  fixedOnScroll = false,
}) => {
  const isScrolled = useScrolledPast(height);
  const [isOpen, setIsOpen] = useState(false);

  const menuButton = (
    <CustomButton
      variant="ghost"
      leftIcon={LucideMenu}
      className={cn(classNames?.menuButton)}
      aria-label="Menu"
      iconSize={20}
    />
  );

  const bottomDrawer = (children: ReactNode) => (
    <BottomDrawer open={isOpen} onOpenChange={setIsOpen} trigger={menuButton}>
      {children}
    </BottomDrawer>
  );

  const applyFixed = fixedOnScroll ? isScrolled : false;

  return (
    <div
      style={{
        height: height,
      }}
      className={cn(
        "w-full z-30 flex items-center justify-between",
        "backdrop-blur-xl transition-all duration-200",
        "text-foreground/80 ",
        {
          "fixed top-0 left-0 r-0 shadow-sm dark:bg-background/80": applyFixed,
        },
        classNames?.root
      )}
    >
      <div
        className={cn(
          "flex max-w-[1200px] items-center justify-between w-full px-4 py-3",
          classNames?.container
        )}
      >
        <div className={cn("flex-1", classNames?.leftSide)}>{leftSide}</div>

        {middle && (
          <div className={cn("flex-1 text-center", classNames?.middle)}>
            {middle}
          </div>
        )}

        <div className={cn("flex-1 flex justify-end", classNames?.rightSide)}>
          {renderRightSide?.({ menuButton, bottomDrawer })}
        </div>
      </div>
    </div>
  );
};
