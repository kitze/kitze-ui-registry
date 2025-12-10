import React from "react";
import { LabeledCheckbox } from "./LabeledCheckbox";

const Preview = () => {
  return (
    <div className="flex flex-col gap-4 p-4 items-start">
      <LabeledCheckbox label="Default Checkbox" />
      <LabeledCheckbox label="Checked Checkbox" checked />
      <LabeledCheckbox label="Disabled Checkbox" disabled />
      <LabeledCheckbox label="Checked Disabled Checkbox" checked disabled />
      <LabeledCheckbox label="Inverted Checkbox" invert />
      <LabeledCheckbox
        label="Inverted Checked Disabled Checkbox"
        invert
        checked
        disabled
      />
      <LabeledCheckbox
        label="Custom Styles"
        classNames={{
          root: "bg-blue-100 p-2 rounded",
          label: "text-blue-700 font-bold",
          checkbox: "border-blue-500",
        }}
      />
    </div>
  );
};

export default Preview;
