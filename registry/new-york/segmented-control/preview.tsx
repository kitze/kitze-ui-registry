"use client";

import React, { useState } from "react";
import { SegmentedControl } from "./SegmentedControl";
import {
  Home,
  User,
  Settings,
  Calendar,
  Clock,
  Laptop,
  Sun,
  Moon,
  Cloud,
  List,
  Grid,
  Table,
  Smartphone,
  Tablet,
} from "lucide-react";
import { KitzeUIProvider } from "../kitze-ui-context/KitzeUIContext";

// Define options outside the component
const viewOptions = [
  { value: "list", label: "List", leftIcon: List },
  { value: "grid", label: "Grid", leftIcon: Grid },
  { value: "table", label: "Table", leftIcon: Table, disabled: true },
];

const themeOptions = [
  { value: "light", label: "Light", leftIcon: Sun },
  { value: "dark", label: "Dark", leftIcon: Moon },
  { value: "system", label: "System", leftIcon: Cloud },
];

const Preview = () => {
  const [viewValue, setViewValue] = useState("list");
  const [mobileViewValue, setMobileViewValue] = useState("grid");
  const [nativeValue, setNativeValue] = useState("list");
  const [themeValue, setThemeValue] = useState("light");

  return (
    <div className="vertical gap-6 p-4 items-center">
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">
          Default (Desktop/Keep on Mobile)
        </h3>
        <SegmentedControl
          options={viewOptions}
          value={viewValue}
          onChange={setViewValue}
        />
      </div>

      <div className="mb-6 w-full">
        <h3 className="text-lg font-medium mb-2">
          Original Example (Sizes/Themes)
        </h3>
        <div className="flex items-center justify-center gap-4 mb-2">
          <SegmentedControl
            options={themeOptions}
            value={themeValue}
            onChange={setThemeValue}
            size="sm"
          />
          <SegmentedControl
            options={themeOptions}
            value={themeValue}
            onChange={setThemeValue}
            size="md"
          />
          <SegmentedControl
            options={themeOptions}
            value={themeValue}
            onChange={setThemeValue}
            size="lg"
          />
        </div>
        <div className="text-center">
          <code>Selected theme: {themeValue}</code>
        </div>
      </div>

      <div className="mb-6 w-full">
        <h3 className="text-lg font-medium mb-2">Mobile (Bottom Drawer)</h3>
        <KitzeUIProvider isMobile={true}>
          <SegmentedControl
            options={viewOptions}
            value={mobileViewValue}
            onChange={setMobileViewValue}
            mobileView="bottom-drawer"
            placeholder="Select View (Drawer)"
            drawerTitle="Choose Display"
          />
        </KitzeUIProvider>
      </div>

      <div className="w-full">
        <h3 className="text-lg font-medium mb-2">Mobile (Native Select)</h3>
        <KitzeUIProvider isMobile={true}>
          <SegmentedControl
            options={viewOptions}
            value={nativeValue}
            onChange={setNativeValue}
            mobileView="native"
            placeholder="Select View (Native)"
          />
        </KitzeUIProvider>
      </div>
    </div>
  );
};

export default Preview;
