import React from "react";
import { SimpleDialog } from "./SimpleDialog";
import { Button } from "@/components/ui/button";

export default function SimpleDialogPreview() {
  const [openDialog, setOpenDialog] = React.useState(false);

  return (
    <div className="space-y-8">
      <div className="flex flex-col space-y-4">
        <h2 className="text-lg font-semibold">Basic Dialog</h2>
        <SimpleDialog title="Basic Dialog">
          <p>This is a basic dialog with just a title and some content.</p>
        </SimpleDialog>
      </div>

      <div className="flex flex-col space-y-4">
        <h2 className="text-lg font-semibold">Custom Trigger</h2>
        <SimpleDialog
          title="Custom Trigger Dialog"
          trigger={<Button>Custom Button</Button>}
        >
          <p>This dialog uses a custom trigger button.</p>
        </SimpleDialog>
      </div>

      <div className="flex flex-col space-y-4">
        <h2 className="text-lg font-semibold">Controlled Dialog</h2>
        <Button onClick={() => setOpenDialog(true)}>
          Open Controlled Dialog
        </Button>
        <SimpleDialog
          title="Controlled Dialog"
          open={openDialog}
          onOpenChange={setOpenDialog}
        >
          <p>This dialog is controlled externally with the open state.</p>
          <div className="mt-4">
            <Button onClick={() => setOpenDialog(false)}>Close Dialog</Button>
          </div>
        </SimpleDialog>
      </div>

      <div className="flex flex-col space-y-4">
        <h2 className="text-lg font-semibold">Different Sizes</h2>
        <div className="flex flex-wrap gap-4">
          {["sm", "md", "lg", "xl", "2xl"].map((size) => (
            <SimpleDialog
              key={size}
              title={`${size.toUpperCase()} Dialog`}
              size={size as any}
              trigger={<Button variant="outline">{size.toUpperCase()}</Button>}
            >
              <p>This dialog is set to size: {size}</p>
            </SimpleDialog>
          ))}
        </div>
      </div>

      <div className="flex flex-col space-y-4">
        <h2 className="text-lg font-semibold">Custom Styling</h2>
        <SimpleDialog
          title="Custom Styled Dialog"
          trigger={<Button variant="secondary">Custom Styled</Button>}
          classNames={{
            header: "bg-primary/10 p-4 rounded-t-lg",
            title: "text-primary text-xl",
            body: "bg-secondary/10 p-6",
          }}
        >
          <p>This dialog has custom styling applied to different parts.</p>
        </SimpleDialog>
      </div>
    </div>
  );
}
