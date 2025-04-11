import React from "react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { useControlledOpen } from "@/registry/hooks/useControlledOpen";
import { useKitzeUI } from "@/registry/new-york/kitze-ui-context/KitzeUIContext";
import { BottomDrawer } from "@/registry/new-york/bottom-drawer/BottomDrawer";
import { CustomButton } from "@/registry/new-york/custom-button/CustomButton";

export type DialogMobileViewType = "keep" | "bottom-drawer";

export type DialogSize =
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "full";

export type DialogClassNames = {
  root?: string;
  content?: string;
  header?: string;
  title?: string;
  body?: string;
  footer?: string;
  submitButton?: string;
  cancelButton?: string;
  drawerRoot?: string;
  drawerContent?: string;
  drawerHeader?: string;
  drawerFooter?: string;
};

export interface SimpleDialogProps {
  trigger?: React.ReactNode;
  title?: string;
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  size?: DialogSize;
  classNames?: DialogClassNames;
  mobileView?: DialogMobileViewType;
  drawerTitle?: string;
  showCancel?: boolean;
  onCancel?: () => void;
  onSubmit?: () => void;
  submitText?: string;
  cancelText?: string;
}

const sizeToMaxWidth: Record<DialogSize, string> = {
  sm: "sm:max-w-[425px]",
  md: "sm:max-w-[550px]",
  lg: "sm:max-w-[680px]",
  xl: "sm:max-w-[800px]",
  "2xl": "sm:max-w-[1024px]",
  "3xl": "sm:max-w-[1280px]",
  "4xl": "sm:max-w-[1536px]",
  "5xl": "sm:max-w-[1920px]",
  full: "sm:max-w-[100vw]",
};

export const SimpleDialog = ({
  trigger = "Open",
  title,
  children,
  open,
  onOpenChange,
  size = "sm",
  classNames = {},
  mobileView = "keep",
  drawerTitle,
  showCancel = true,
  onCancel,
  onSubmit,
  submitText = "Submit",
  cancelText = "Cancel",
}: SimpleDialogProps) => {
  const { isMobile } = useKitzeUI();
  const { isOpen, setIsOpen, close } = useControlledOpen({
    open,
    onOpenChange,
  });

  const handleCancel = () => {
    close();
    if (onCancel) onCancel();
  };

  const handleSubmit = () => {
    if (onSubmit) onSubmit();
    close();
  };

  const footerContent = (onSubmit || showCancel) && (
    <div className={cn("flex justify-end gap-2 pt-4", classNames.footer)}>
      {showCancel && (
        <CustomButton
          variant="outline"
          onClick={handleCancel}
          className={classNames.cancelButton}
        >
          {cancelText}
        </CustomButton>
      )}
      {onSubmit && (
        <CustomButton
          onClick={handleSubmit}
          className={classNames.submitButton}
        >
          {submitText}
        </CustomButton>
      )}
    </div>
  );

  if (isMobile && mobileView === "bottom-drawer") {
    return (
      <BottomDrawer
        open={isOpen}
        onOpenChange={setIsOpen}
        trigger={trigger}
        title={drawerTitle || title}
        classNames={{
          content: classNames.drawerContent,
          headerWrapper: classNames.drawerHeader,
        }}
      >
        <div className={cn("px-6 pt-0", classNames.body)}>{children}</div>
        {footerContent && (
          <div
            className={cn(classNames.drawerFooter, "pt-4 px-6 pb-6 md:pb-2")}
          >
            {footerContent}
          </div>
        )}
      </BottomDrawer>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {trigger && (
        <DialogTrigger asChild>
          {typeof trigger === "string" ? (
            <CustomButton>{trigger}</CustomButton>
          ) : (
            trigger
          )}
        </DialogTrigger>
      )}
      <DialogContent
        className={cn(
          sizeToMaxWidth[size],
          classNames.root,
          classNames.content
        )}
      >
        {title && (
          <DialogHeader className={classNames.header}>
            <DialogTitle className={classNames.title}>{title}</DialogTitle>
          </DialogHeader>
        )}
        <div className={cn("py-4", classNames.body)}>{children}</div>
        {footerContent && (
          <DialogFooter className={classNames.footer}>
            {showCancel && (
              <CustomButton
                variant="outline"
                onClick={handleCancel}
                className={classNames.cancelButton}
              >
                {cancelText}
              </CustomButton>
            )}
            {onSubmit && (
              <CustomButton
                onClick={handleSubmit}
                className={classNames.submitButton}
              >
                {submitText}
              </CustomButton>
            )}
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
};
