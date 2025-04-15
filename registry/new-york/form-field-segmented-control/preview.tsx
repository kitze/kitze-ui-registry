"use client";

import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FormFieldSegmentedControl } from "./FormFieldSegmentedControl";
import { SegmentedControlOption } from "@/registry/new-york/segmented-control/SegmentedControl";
import {
  Monitor,
  Tablet,
  Smartphone,
  Moon,
  Sun,
  Laptop,
  Cloud,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type FormValues = {
  device: string;
  theme: string;
  environment: string;
};

export default function Preview() {
  const form = useForm<FormValues>({
    defaultValues: {
      device: "desktop",
      theme: "light",
      environment: "production",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
    alert(JSON.stringify(data, null, 2));
  };

  const deviceOptions: SegmentedControlOption[] = [
    { value: "desktop", label: "Desktop", leftIcon: Monitor },
    { value: "tablet", label: "Tablet", leftIcon: Tablet },
    { value: "mobile", label: "Mobile", leftIcon: Smartphone },
  ];

  const themeOptions: SegmentedControlOption[] = [
    { value: "light", label: "Light", leftIcon: Sun },
    { value: "dark", label: "Dark", leftIcon: Moon },
    { value: "system", label: "System", leftIcon: Laptop },
  ];

  const environmentOptions: SegmentedControlOption[] = [
    { value: "development", label: "Development" },
    { value: "staging", label: "Staging" },
    { value: "production", label: "Production", leftIcon: Cloud },
  ];

  return (
    <FormProvider {...form}>
      <Card className="p-6 max-w-md mx-auto">
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormFieldSegmentedControl
            name="device"
            label="Device"
            options={deviceOptions}
            size="md"
          />

          <FormFieldSegmentedControl
            name="theme"
            label="Theme"
            description="Select your preferred theme"
            options={themeOptions}
            size="md"
            mobileView="bottom-drawer"
            drawerTitle="Select Theme"
          />

          <FormFieldSegmentedControl
            name="environment"
            label="Environment"
            options={environmentOptions}
            size="sm"
          />

          <div className="flex justify-end">
            <Button type="submit">Submit</Button>
          </div>

          <div className="text-sm mt-4 p-4 bg-muted rounded-md">
            <pre>{JSON.stringify(form.watch(), null, 2)}</pre>
          </div>
        </form>
      </Card>
    </FormProvider>
  );
}
