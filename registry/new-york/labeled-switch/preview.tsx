import React from "react";
import { LabeledSwitch } from "./LabeledSwitch";

const Preview = () => {
  return (
    <div className="flex flex-col gap-4">
      <LabeledSwitch label="Default Switch" />
      <LabeledSwitch label="Checked Switch" checked />
      <LabeledSwitch label="Disabled Switch" disabled />
      <LabeledSwitch label="Checked Disabled Switch" checked disabled />
    </div>
  );
};

export default Preview;
