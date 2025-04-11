"use client";

import { SimpleSelect, SimpleSelectOption } from "./SimpleSelect";
import {
  Globe,
  Clock,
  MapPin,
  Code,
  Laptop,
  Server,
  Smartphone,
} from "lucide-react";
import { useState } from "react";

export default function Preview() {
  const [value1, setValue1] = useState<string>("");
  const [value2, setValue2] = useState<string>("");
  const [value3, setValue3] = useState<string>("");

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

  const technologyOptions: SimpleSelectOption[] = [
    { value: "react", label: "React", icon: Code },
    { value: "vue", label: "Vue.js", icon: Code },
    { value: "angular", label: "Angular", icon: Code },
    { value: "svelte", label: "Svelte", icon: Code },
    { value: "next", label: "Next.js", icon: Server },
    { value: "nuxt", label: "Nuxt.js", icon: Server },
    { value: "android", label: "Android", icon: Smartphone },
    { value: "ios", label: "iOS", icon: Smartphone },
    { value: "electron", label: "Electron", icon: Laptop },
    { value: "flutter", label: "Flutter", icon: Smartphone },
    { value: "react-native", label: "React Native", icon: Smartphone },
  ];

  return (
    <div className="flex flex-col gap-8 p-6 max-w-2xl mx-auto">
      <div className="space-y-3">
        <h2 className="text-xl font-semibold">Simple Select Examples</h2>
        <p className="text-muted-foreground">
          A simplified select component with support for icons, emojis, and
          search functionality.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">Basic Example</h3>
          <SimpleSelect
            options={options}
            value={value1}
            onValueChange={setValue1}
            placeholder="Select an option"
            triggerClassName="w-full"
          />
          <p className="text-sm text-muted-foreground">
            Selected value: {value1 || "none"}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">Timezone Example</h3>
          <SimpleSelect
            options={timezoneOptions}
            value={value2}
            onValueChange={setValue2}
            placeholder="Select timezone"
            triggerClassName="w-full"
          />
          <p className="text-sm text-muted-foreground">
            Selected value: {value2 || "none"}
          </p>
        </div>

        <div className="flex flex-col gap-2 md:col-span-2">
          <h3 className="text-lg font-semibold">With Search Functionality</h3>
          <p className="text-sm text-muted-foreground mb-2">
            This example includes a search input to filter through many options.
          </p>
          <SimpleSelect
            options={technologyOptions}
            value={value3}
            onValueChange={setValue3}
            placeholder="Select technology"
            withSearch
            searchPlaceholder="Search technologies..."
            triggerClassName="w-full md:w-[320px]"
          />
          <p className="text-sm text-muted-foreground">
            Selected value: {value3 || "none"}
          </p>
        </div>
      </div>
    </div>
  );
}
