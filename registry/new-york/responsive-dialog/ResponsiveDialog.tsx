import React from "react";
import { cn } from "@/lib/utils";
import {
  SimpleDialog,
  SimpleDialogProps,
} from "@/registry/new-york/simple-dialog/SimpleDialog";
import {
  BottomDrawer,
  BottomDrawerProps,
} from "@/registry/new-york/bottom-drawer/BottomDrawer";
import { useKitzeUI } from "@/registry/new-york/kitze-ui-context/KitzeUIContext";
import { useControlledOpen } from "@/registry/hooks/useControlledOpen";
import { CustomButton } from "../custom-button/CustomButton";

export interface ResponsiveDialogProps
  extends Pick<SimpleDialogProps, "size" | "classNames"> {
  trigger?: React.ReactNode;
  title?: string;
  children: React.ReactNode;
  showCancel?: boolean;
  onCancel?: () => void;
  onSubmit?: () => void;
  submitText?: string;
  cancelText?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  drawerProps?: Partial<BottomDrawerProps>;
}

export const ResponsiveDialog = ({
  trigger,
  title,
  children,
  size,
  classNames = {},
  showCancel = true,
  onCancel,
  onSubmit,
  submitText = "Submit",
  cancelText = "Cancel",
  open,
  onOpenChange,
  drawerProps = {},
}: ResponsiveDialogProps) => {
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
    <div className={cn("flex justify-end gap-2 mt-4", classNames.footer)}>
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

  if (isMobile) {
    return (
      <BottomDrawer
        open={isOpen}
        onOpenChange={setIsOpen}
        trigger={trigger}
        title={title}
        {...drawerProps}
      >
        {children}
      </BottomDrawer>
    );
  }

  return (
    <SimpleDialog
      open={isOpen}
      onOpenChange={setIsOpen}
      trigger={trigger}
      title={title}
      size={size}
      classNames={classNames}
    >
      {children}
      {footerContent}
    </SimpleDialog>
  );
};
