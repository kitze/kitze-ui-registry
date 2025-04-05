import React from "react";
import { DialogManager, useDialog } from "./DialogManager";
import { CustomButton } from "../custom-button/CustomButton";

// Example dialog content component
const ExampleDialogContent = ({ close }: { close: () => void }) => {
  return (
    <div className="p-4">
      <p className="mb-4">
        This is an example dialog content that was opened through the
        DialogManager.
      </p>
      <div className="flex justify-end">
        <CustomButton onClick={close}>Close</CustomButton>
      </div>
    </div>
  );
};

// Component that uses the dialog hook
const DialogButtons = () => {
  const { openDialog } = useDialog();

  const handleOpenSimpleDialog = () => {
    openDialog({
      title: "Simple Dialog",
      component: ExampleDialogContent,
    });
  };

  const handleOpenLargeDialog = () => {
    openDialog({
      title: "Large Dialog",
      component: ExampleDialogContent,
      size: "lg",
    });
  };

  const handleOpenCustomDialog = () => {
    openDialog({
      title: "Custom Dialog",
      component: ({ close }: { close: () => void }) => (
        <div className="p-4">
          <p className="mb-4">This dialog has custom content defined inline.</p>
          <p className="mb-4">
            You can pass custom props and handle state within the dialog.
          </p>
          <div className="flex justify-end">
            <CustomButton onClick={close}>Done</CustomButton>
          </div>
        </div>
      ),
      classNames: {
        content: "bg-gray-50",
      },
    });
  };

  return (
    <div className="flex flex-col gap-3">
      <CustomButton onClick={handleOpenSimpleDialog}>
        Open Simple Dialog
      </CustomButton>
      <CustomButton onClick={handleOpenLargeDialog}>
        Open Large Dialog
      </CustomButton>
      <CustomButton onClick={handleOpenCustomDialog}>
        Open Custom Dialog
      </CustomButton>
    </div>
  );
};

export default function Preview() {
  return (
    <div className="p-4">
      <h3 className="text-lg font-medium mb-4">Dialog Manager</h3>

      <div className="bg-gray-50 p-4 rounded-md mb-4">
        <h4 className="font-medium mb-2">Features:</h4>
        <ul className="list-disc list-inside space-y-1">
          <li>Centralized dialog management with context API</li>
          <li>Open multiple dialogs with different configurations</li>
          <li>Responsive behavior (dialog on desktop, drawer on mobile)</li>
          <li>
            Support for custom content components and inline content functions
          </li>
        </ul>
      </div>

      <DialogManager>
        <DialogButtons />
      </DialogManager>
    </div>
  );
}
