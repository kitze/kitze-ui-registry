import React from "react";
import { cn } from "@/lib/utils";
import { useKitzeUI } from "@/registry/new-york/kitze-ui-context/KitzeUIContext";
import { BottomDrawer } from "@/registry/new-york/bottom-drawer/BottomDrawer";
import {
  SimpleDialog,
  SimpleDialogProps,
} from "@/registry/new-york/simple-dialog/SimpleDialog";
import { CustomButton } from "@/registry/new-york/custom-button/CustomButton";

export type DialogMobileViewType = "keep" | "bottom-drawer";

export interface ResponsiveDialogProps
  extends Omit<SimpleDialogProps, "classNames"> {
  mobileView?: DialogMobileViewType;
  drawerTitle?: string;
  classNames?: SimpleDialogProps["classNames"] & {
    drawerRoot?: string;
    drawerContent?: string;
    drawerHeader?: string;
    drawerFooter?: string;
  };
}

export const ResponsiveDialog = ({
  mobileView = "keep",
  drawerTitle,
  classNames = {},
  trigger = "Open",
  title,
  children,
  open,
  onOpenChange,
  showCancel = true,
  onCancel,
  onSubmit,
  submitText = "Submit",
  cancelText = "Cancel",
  ...props
}: ResponsiveDialogProps) => {
  const { isMobile } = useKitzeUI();

  // Extract drawer-specific classNames
  const {
    drawerRoot,
    drawerContent,
    drawerHeader,
    drawerFooter,
    ...simpleDialogClassNames
  } = classNames;

  // If mobile and using bottom-drawer, render BottomDrawer
  if (isMobile && mobileView === "bottom-drawer") {
    const footerContent = (onSubmit || showCancel) && (
      <div className={cn("flex justify-end gap-2 pt-4")}>
        {showCancel && (
          <CustomButton
            variant="outline"
            onClick={onCancel}
            className={classNames.cancelButton}
          >
            {cancelText}
          </CustomButton>
        )}
        {onSubmit && (
          <CustomButton onClick={onSubmit} className={classNames.submitButton}>
            {submitText}
          </CustomButton>
        )}
      </div>
    );

    return (
      <BottomDrawer
        open={open}
        onOpenChange={onOpenChange}
        trigger={trigger}
        title={drawerTitle || title}
        classNames={{
          content: drawerContent,
          headerWrapper: drawerHeader,
        }}
      >
        <div className={classNames.body}>{children}</div>
        {footerContent && (
          <div className={cn(drawerFooter, "px-6 pt-4 pb-6 md:pb-2")}>
            {footerContent}
          </div>
        )}
      </BottomDrawer>
    );
  }

  // Otherwise, render SimpleDialog
  return (
    <SimpleDialog
      trigger={trigger}
      title={title}
      open={open}
      onOpenChange={onOpenChange}
      showCancel={showCancel}
      onCancel={onCancel}
      onSubmit={onSubmit}
      submitText={submitText}
      cancelText={cancelText}
      classNames={simpleDialogClassNames}
      {...props}
    >
      {children}
    </SimpleDialog>
  );
};
