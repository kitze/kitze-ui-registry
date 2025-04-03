import React, { useState } from "react";
import { ResponsiveDialog } from "./ResponsiveDialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ResponsiveDialogPreview() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert(`Form submitted: Name: ${formData.name}, Email: ${formData.email}`);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col space-y-4">
        <h2 className="text-lg font-semibold">Basic Responsive Dialog</h2>
        <p className="text-muted-foreground mb-4">
          This dialog will display as a drawer on mobile devices and a regular
          dialog on desktop. Try resizing your browser to see the different
          appearances.
        </p>
        <ResponsiveDialog
          title="Basic Dialog"
          trigger={<Button>Open Dialog</Button>}
        >
          <p>
            This is a responsive dialog that adapts to the device screen size.
          </p>
          <p className="mt-2">On mobile, it appears as a bottom drawer.</p>
          <p className="mt-2">On desktop, it shows as a standard dialog.</p>
        </ResponsiveDialog>
      </div>

      <div className="flex flex-col space-y-4">
        <h2 className="text-lg font-semibold">Dialog with Form</h2>
        <p className="text-muted-foreground mb-4">
          This example shows a dialog with form inputs and submit/cancel
          buttons.
        </p>
        <ResponsiveDialog
          title="Contact Form"
          trigger={<Button variant="outline">Open Form</Button>}
          onSubmit={handleSubmit}
          submitText="Save Contact"
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                placeholder="Enter your name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
                placeholder="Enter your email"
              />
            </div>
          </div>
        </ResponsiveDialog>
      </div>

      <div className="flex flex-col space-y-4">
        <h2 className="text-lg font-semibold">Controlled Dialog</h2>
        <p className="text-muted-foreground mb-4">
          This example demonstrates controlling the dialog state externally.
        </p>
        <Button onClick={() => setIsOpen(true)}>Open Controlled Dialog</Button>
        <ResponsiveDialog
          title="Controlled Dialog"
          open={isOpen}
          onOpenChange={setIsOpen}
          showCancel={true}
          cancelText="Close"
          onCancel={() => {
            console.log("Dialog closed");
          }}
        >
          <p>This dialog is controlled by external state.</p>
          <p className="mt-2">
            The open/close state is managed outside the component.
          </p>
        </ResponsiveDialog>
      </div>

      <div className="flex flex-col space-y-4">
        <h2 className="text-lg font-semibold">Custom Styled Dialog</h2>
        <p className="text-muted-foreground mb-4">
          This example shows custom styling for different parts of the dialog.
        </p>
        <ResponsiveDialog
          title="Custom Styled Dialog"
          trigger={<Button variant="secondary">Open Styled Dialog</Button>}
          classNames={{
            header: "bg-primary/10 p-4 rounded-t-lg",
            title: "text-primary text-xl",
            body: "bg-secondary/10 p-6",
            footer: "bg-muted/50 p-4 rounded-b-lg",
            submitButton: "bg-primary",
            cancelButton: "border-primary text-primary",
          }}
          onSubmit={() => {
            console.log("Action completed");
          }}
          submitText="Complete"
        >
          <p>This dialog has custom styling applied to different parts.</p>
        </ResponsiveDialog>
      </div>
    </div>
  );
}
