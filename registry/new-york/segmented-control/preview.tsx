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
} from "lucide-react";

export default function Preview() {
  // Multiple separate state values for different examples
  const [basicValue, setBasicValue] = useState("home");
  const [smallValue, setSmallValue] = useState("profile");
  const [largeValue, setLargeValue] = useState("settings");
  const [rightIconValue, setRightIconValue] = useState("home");
  const [timeValue, setTimeValue] = useState("day");
  const [disabledValue, setDisabledValue] = useState("desktop");

  // Shared state for synchronized controls example
  const [sharedValue, setSharedValue] = useState("sunny");

  // Simple options array
  const basicOptions = [
    { value: "home", label: "Home", leftIcon: Home },
    { value: "profile", label: "Profile", leftIcon: User },
    { value: "settings", label: "Settings", leftIcon: Settings },
  ];

  // Options for size examples
  const timeOptions = [
    { value: "day", label: "Day", leftIcon: Calendar },
    { value: "week", label: "Week", leftIcon: Calendar },
    { value: "month", label: "Month", leftIcon: Clock },
  ];

  // Options with a disabled item
  const deviceOptions = [
    { value: "desktop", label: "Desktop", leftIcon: Laptop },
    { value: "tablet", label: "Tablet", disabled: true },
    { value: "mobile", label: "Mobile" },
  ];

  // Weather options for synchronized controls
  const weatherOptions = [
    { value: "sunny", label: "Sunny", leftIcon: Sun },
    { value: "cloudy", label: "Cloudy", leftIcon: Cloud },
    { value: "night", label: "Night", leftIcon: Moon },
  ];

  return (
    <div className="flex flex-col gap-8 p-4">
      <div>
        <h3 className="text-lg font-medium mb-3">
          Basic Segmented Control (Medium - Default)
        </h3>
        <SegmentedControl
          options={basicOptions}
          value={basicValue}
          onChange={setBasicValue}
        />
      </div>

      <div>
        <h3 className="text-lg font-medium mb-3">
          Externally Controlled Value
        </h3>
        <div className="flex flex-col gap-4">
          <div>
            <h4 className="text-sm font-medium mb-2 text-muted-foreground">
              Control 1
            </h4>
            <SegmentedControl
              options={weatherOptions}
              value={sharedValue}
              onChange={setSharedValue}
            />
          </div>

          <div>
            <h4 className="text-sm font-medium mb-2 text-muted-foreground">
              Control 2 (synchronized)
            </h4>
            <SegmentedControl
              options={weatherOptions}
              value={sharedValue}
              onChange={setSharedValue}
              size="lg"
            />
          </div>

          <div className="mt-2 p-3 bg-muted rounded-md">
            <p className="text-sm mb-2">
              The above controls share the same state value:
            </p>
            <button
              onClick={() => setSharedValue("sunny")}
              className="mr-2 px-3 py-1 text-xs rounded-md bg-primary text-primary-foreground"
            >
              Set to "Sunny"
            </button>
            <button
              onClick={() => setSharedValue("cloudy")}
              className="mr-2 px-3 py-1 text-xs rounded-md bg-primary text-primary-foreground"
            >
              Set to "Cloudy"
            </button>
            <button
              onClick={() => setSharedValue("night")}
              className="px-3 py-1 text-xs rounded-md bg-primary text-primary-foreground"
            >
              Set to "Night"
            </button>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-3">Size Variants</h3>
        <div className="flex flex-col gap-4">
          <div>
            <h4 className="text-sm font-medium mb-2 text-muted-foreground">
              Small
            </h4>
            <SegmentedControl
              options={basicOptions}
              value={smallValue}
              onChange={setSmallValue}
              size="sm"
            />
          </div>

          <div>
            <h4 className="text-sm font-medium mb-2 text-muted-foreground">
              Medium (Default)
            </h4>
            <SegmentedControl
              options={basicOptions}
              value={basicValue}
              onChange={setBasicValue}
              size="md"
            />
          </div>

          <div>
            <h4 className="text-sm font-medium mb-2 text-muted-foreground">
              Large
            </h4>
            <SegmentedControl
              options={basicOptions}
              value={largeValue}
              onChange={setLargeValue}
              size="lg"
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-3">Right Icon Examples</h3>
        <div className="flex flex-col gap-4 items-start w-full">
          <SegmentedControl
            options={[
              { value: "home", label: "Home", rightIcon: Home },
              { value: "profile", label: "Profile", rightIcon: User },
              { value: "settings", label: "Settings", rightIcon: Settings },
            ]}
            value={rightIconValue}
            onChange={setRightIconValue}
            className="w-auto"
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-3">Text Only</h3>
        <div className="flex flex-col gap-4 items-start w-full">
          <SegmentedControl
            options={[
              { value: "day", label: "Day" },
              { value: "week", label: "Week" },
              { value: "month", label: "Month" },
            ]}
            value={timeValue}
            onChange={setTimeValue}
            className="w-auto"
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-3">Disabled Item</h3>
        <div className="flex flex-col gap-4 items-start w-full">
          <SegmentedControl
            options={deviceOptions}
            value={disabledValue}
            onChange={setDisabledValue}
            className="w-auto"
          />
        </div>
      </div>

      <div className="bg-background border rounded-md p-3 text-sm">
        <h4 className="font-medium mb-1">Features:</h4>
        <ul className="list-disc list-inside space-y-1">
          <li>Simple API with options array</li>
          <li>Support for left and right icons</li>
          <li>Support for custom side elements</li>
          <li>Three size variants: sm, md (default), and lg</li>
          <li>Icons automatically resize with the component</li>
          <li>Individual items can be disabled</li>
          <li>Fully accessible with ARIA attributes</li>
          <li>Hover and focus states for better UX</li>
          <li>
            Fully controlled from outside - value can be updated
            programmatically
          </li>
          <li>Customizable styling via className props</li>
        </ul>
      </div>

      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <span>Current values:</span>
        <code className="bg-muted px-2 py-1 rounded text-xs">
          {JSON.stringify(
            {
              basic: basicValue,
              small: smallValue,
              large: largeValue,
              rightIcon: rightIconValue,
              time: timeValue,
              disabled: disabledValue,
              shared: sharedValue,
            },
            null,
            2
          )}
        </code>
      </div>
    </div>
  );
}
