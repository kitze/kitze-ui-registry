"use client";

import { SimpleSelect, SimpleSelectOption } from "./SimpleSelect";
import { Globe, Clock, MapPin } from "lucide-react";
import { useState } from "react";

export default function Preview() {
  const [value, setValue] = useState<string>("");

  const options: SimpleSelectOption[] = [
    {
      value: "option-1",
      label: "Option 1",
      icon: Globe,
    },
    {
      value: "option-2",
      label: "Option 2",
      emoji: "🌟",
    },
    {
      value: "option-3",
      label: "Option 3",
      icon: Clock,
    },
    {
      value: "option-4",
      label: "Option 4",
      emoji: "🚀",
    },
    {
      value: "option-5",
      label: "Option 5",
      icon: MapPin,
    },
  ];

  const timezoneOptions: SimpleSelectOption[] = [
    { value: "utc", label: "UTC", emoji: "🌐" },
    { value: "est", label: "Eastern Time", emoji: "🇺🇸" },
    { value: "pst", label: "Pacific Time", emoji: "🌉" },
    { value: "cet", label: "Central European Time", emoji: "🇪🇺" },
    { value: "jst", label: "Japan Standard Time", emoji: "🇯🇵" },
  ];

  return (
    <div className="flex flex-col gap-8 p-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold">Basic Example</h3>
        <SimpleSelect
          options={options}
          value={value}
          onValueChange={setValue}
          placeholder="Select an option"
          triggerClassName="w-[220px]"
        />
        <p className="text-sm text-muted-foreground">
          Selected value: {value || "none"}
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold">Timezone Example</h3>
        <SimpleSelect
          options={timezoneOptions}
          placeholder="Select timezone"
          triggerClassName="w-[220px]"
        />
      </div>
    </div>
  );
}
