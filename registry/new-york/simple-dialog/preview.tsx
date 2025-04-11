"use client";

import React, { useState } from "react";
import { SimpleDialog } from "./SimpleDialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Preview = () => {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    alert(`Submitted name: ${name}`);
  };

  const dialogContent = (
    <div className="grid gap-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-right">
          Name
        </Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="col-span-3"
        />
      </div>
    </div>
  );

  return (
    // Single container for examples
    <div className="flex flex-wrap items-center justify-center gap-4 p-4">
      {/* Example 1: mobileView="keep" (Default Dialog) */}
      <SimpleDialog
        trigger={<Button variant="outline">Edit Profile (Keep)</Button>}
        title="Edit Profile"
        mobileView="keep" // Default behavior
        onSubmit={handleSubmit}
      >
        {dialogContent}
      </SimpleDialog>

      {/* Example 2: mobileView="bottom-drawer" */}
      <SimpleDialog
        trigger={<Button variant="secondary">Edit Profile (Drawer)</Button>}
        title="Edit Profile"
        mobileView="bottom-drawer"
        drawerTitle="Edit Profile Drawer"
        onSubmit={handleSubmit}
        submitText="Save Changes"
      >
        {dialogContent}
      </SimpleDialog>

      {/* Add a note about the switcher */}
      <p className="w-full text-center text-sm text-muted-foreground mt-4">
        Use the Desktop/Mobile switcher above to see the different mobile
        behaviors.
      </p>
    </div>
  );
};

export default Preview;
