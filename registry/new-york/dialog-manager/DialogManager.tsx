import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  memo,
} from "react";
import {
  ResponsiveDialog,
  ResponsiveDialogProps,
} from "@/registry/new-york/responsive-dialog/ResponsiveDialog";

export type OpenDialogProps = {
  title?: string;
  component:
    | ((props: { close: () => void }) => React.ReactNode)
    | React.ComponentType<any>;
  props?: Record<string, any>;
  size?: ResponsiveDialogProps["size"];
  classNames?: ResponsiveDialogProps["classNames"];
};

type DialogConfig = OpenDialogProps & {
  id: string;
};

type DialogContextType = {
  openDialog: (config: OpenDialogProps) => string;
  closeDialog: (id: string) => void;
  closeAllDialogs: () => void;
};

const DialogContext = createContext<DialogContextType | null>(null);

export const useDialog = () => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error("useDialog must be used within a DialogProvider");
  }
  return context;
};

export type DialogManagerProps = {
  classNames?: {
    root?: string;
  };
  children?: React.ReactNode;
};

const DialogList = memo(function DialogList({
  dialogs,
  onClose,
}: {
  dialogs: DialogConfig[];
  onClose: (id: string) => void;
}) {
  return (
    <>
      {dialogs.map(
        ({ id, title, component: Component, props, size, classNames }) => (
          <div key={id} className="pointer-events-auto">
            <ResponsiveDialog
              title={title}
              showCancel={true}
              onCancel={() => onClose(id)}
              open={true}
              onOpenChange={(open) => {
                if (!open) onClose(id);
              }}
              size={size}
              classNames={classNames}
            >
              {typeof Component === "function" ? (
                <Component {...props} close={() => onClose(id)} />
              ) : (
                // @ts-ignore
                <Component {...props} />
              )}
            </ResponsiveDialog>
          </div>
        )
      )}
    </>
  );
});

export const DialogManager = memo(function DialogManager({
  classNames,
  children,
}: DialogManagerProps) {
  const [dialogs, setDialogs] = useState<DialogConfig[]>([]);

  const openDialog = useCallback((config: OpenDialogProps) => {
    const id = Math.random().toString(36).substring(7);
    setDialogs((prev) => {
      const newDialogs = [...prev, { ...config, id }];
      return newDialogs;
    });
    return id;
  }, []);

  const closeDialog = useCallback((id: string) => {
    setDialogs((prev) => prev.filter((dialog) => dialog.id !== id));
  }, []);

  const closeAllDialogs = useCallback(() => {
    setDialogs([]);
  }, []);

  const contextValue = useMemo(
    () => ({
      openDialog,
      closeDialog,
      closeAllDialogs,
    }),
    [openDialog, closeDialog, closeAllDialogs]
  );

  return (
    <DialogContext.Provider value={contextValue}>
      {children}
      <DialogList dialogs={dialogs} onClose={closeDialog} />
    </DialogContext.Provider>
  );
});
