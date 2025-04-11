"use client";

import React, { useState } from "react";
import { SimpleSelect } from "./SimpleSelect";
import { SelectOption } from "@/lib/select-option";
import { Apple, Drama, Facebook, Instagram } from "lucide-react";

const options: SelectOption[] = [
  { value: "apple", label: "Apple", icon: Apple },
  { value: "banana", label: "Banana", emoji: "🍌" },
  { value: "blueberry", label: "Blueberry", emoji: "🫐" },
  { value: "grapes", label: "Grapes", emoji: "🍇", disabled: true }, // Example disabled
  { value: "pineapple", label: "Pineapple", emoji: "🍍" },
];

const socialOptions: SelectOption[] = [
  { value: "fb", label: "Facebook", icon: Facebook },
  { value: "ig", label: "Instagram", icon: Instagram },
  { value: "drama", label: "Threads", icon: Drama },
];

const Preview = () => {
  const [value, setValue] = useState<string | undefined>("apple");
  const [socialValue, setSocialValue] = useState<string | undefined>("ig");

  return (
    // Single container for examples
    <div className="flex flex-wrap items-center justify-center gap-4 p-4">
      {/* Example 1: Default (Keep on Mobile) */}
      <SimpleSelect
        options={options}
        value={value}
        onValueChange={setValue}
        placeholder="Select a fruit..."
        mobileView="keep"
        withSearch
      />

      {/* Example 2: Mobile Native */}
      <SimpleSelect
        options={socialOptions}
        value={socialValue}
        onValueChange={setSocialValue}
        placeholder="Select Social..."
        mobileView="native"
        triggerClassName="w-[180px]" // Example custom trigger class
      />

      {/* Example 3: Mobile Drawer */}
      <SimpleSelect
        options={options} // Use options with disabled item
        value={value}
        onValueChange={setValue}
        placeholder="Select Fruit (Drawer)"
        mobileView="bottom-drawer"
        drawerTitle="Choose a Fruit"
        withSearch
        searchPlaceholder="Search fruits..."
        className="w-[220px]" // Example root class
      />

      {/* Add a note about the switcher */}
      <p className="w-full text-center text-sm text-muted-foreground mt-4">
        Use the Desktop/Mobile switcher above to see the different mobile
        behaviors.
      </p>
    </div>
  );
};

export default Preview;
