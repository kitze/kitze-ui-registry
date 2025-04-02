"use client";
import React from "react";
import {
  useConfirmAlert,
  useConfirmAlertDelete,
} from "@/registry/new-york/ui-alert/AlertContext";

export default function AlertPreview() {
  // Use context hooks directly
  const confirmAlert = useConfirmAlert();
  const confirmAlertDelete = useConfirmAlertDelete();

  const handleShowConfirmAlert = () => {
    confirmAlert({
      title: "Confirm Action",
      description: "Are you sure you want to perform this action?",
      onConfirm: () => {
        console.log("Confirmed action");
      },
    });
  };

  const handleShowConfirmDeleteAlert = () => {
    confirmAlertDelete({
      itemName: "Example Item",
      onConfirm: () => {
        console.log("Confirmed delete");
      },
    });
  };

  const handleShowCustomDeleteAlert = () => {
    confirmAlertDelete({
      title: "Delete User",
      description:
        "This will permanently remove all user data and cannot be undone.",
      confirmLabel: "Yes, Delete User",
      onConfirm: () => {
        console.log("User deleted");
      },
    });
  };

  return (
    <div className="flex flex-col gap-6 p-8">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Alert Demos</h2>
        <p className="text-gray-600 dark:text-gray-300">
          Examples of different alert types provided by the KitzeUI alert
          system.
        </p>
      </div>

      <div className="flex flex-wrap gap-4">
        <button
          onClick={handleShowConfirmAlert}
          className="px-4 py-2 font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Show Confirm Alert
        </button>

        <button
          onClick={handleShowConfirmDeleteAlert}
          className="px-4 py-2 font-medium text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          Show Delete Alert
        </button>

        <button
          onClick={handleShowCustomDeleteAlert}
          className="px-4 py-2 font-medium text-white bg-gray-800 rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2"
        >
          Custom Delete Alert
        </button>
      </div>
    </div>
  );
}
