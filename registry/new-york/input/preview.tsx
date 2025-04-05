"use client";

import React from "react";
import { Input } from "@/registry/new-york/input/Input";
import { Mail, Search, User, Lock } from "lucide-react";

export function Preview() {
  const [isLoading, setIsLoading] = React.useState(false);

  const toggleLoading = () => {
    setIsLoading((prev) => !prev);
  };

  return (
    <div className="flex flex-col gap-8 max-w-md mx-auto">
      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-medium">Basic Input</h3>
        <Input placeholder="Basic input" />
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-medium">With Icons</h3>
        <Input placeholder="Email" leftIcon={Mail} />
        <Input placeholder="Search" leftIcon={Search} />
        <Input placeholder="Password" leftIcon={Lock} rightIcon={User} />
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-medium">Loading State</h3>
        <div className="flex gap-4 items-center">
          <Input
            placeholder="Loading input"
            isLoading={isLoading}
            className="flex-grow"
          />
          <button
            onClick={toggleLoading}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm"
          >
            {isLoading ? "Stop Loading" : "Start Loading"}
          </button>
        </div>
        <Input placeholder="Always loading" isLoading={true} spinnerSize="xs" />
        <Input
          placeholder="Loading with right icon"
          isLoading={true}
          rightIcon={User}
        />
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-medium">Disabled State</h3>
        <Input placeholder="Disabled input" disabled />
        <Input placeholder="Disabled with icon" leftIcon={Mail} disabled />
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-medium">Custom Styling</h3>
        <Input
          placeholder="Custom input"
          classNames={{
            container: "border-primary",
            input: "placeholder:text-primary/50",
          }}
        />
        <Input
          placeholder="Custom with icon"
          leftIcon={Search}
          classNames={{
            leftIcon: "text-primary",
          }}
        />
      </div>
    </div>
  );
}
