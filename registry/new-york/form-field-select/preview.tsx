"use client";

import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FormFieldSelect } from "./FormFieldSelect";
import { SimpleSelectOption } from "@/registry/new-york/simple-select/SimpleSelect";
import { Globe, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type FormValues = {
  country: string;
  timezone: string;
  category: string;
};

export default function Preview() {
  const form = useForm<FormValues>({
    defaultValues: {
      country: "",
      timezone: "",
      category: "option-3",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
    alert(JSON.stringify(data, null, 2));
  };

  const countryOptions: SimpleSelectOption[] = [
    { value: "us", label: "United States", emoji: "🇺🇸" },
    { value: "uk", label: "United Kingdom", emoji: "🇬🇧" },
    { value: "ca", label: "Canada", emoji: "🇨🇦" },
    { value: "au", label: "Australia", emoji: "🇦🇺" },
    { value: "de", label: "Germany", emoji: "🇩🇪" },
  ];

  const timezoneOptions: SimpleSelectOption[] = [
    { value: "utc", label: "UTC", icon: Globe },
    { value: "est", label: "Eastern Time", icon: Clock },
    { value: "pst", label: "Pacific Time", icon: Clock },
    { value: "cet", label: "Central European Time", icon: Clock },
    { value: "jst", label: "Japan Standard Time", icon: Clock },
  ];

  const categoryOptions: SimpleSelectOption[] = [
    { value: "option-1", label: "Category 1", icon: MapPin },
    { value: "option-2", label: "Category 2", icon: MapPin },
    { value: "option-3", label: "Category 3", icon: MapPin },
    { value: "option-4", label: "Category 4", icon: MapPin },
  ];

  return (
    <FormProvider {...form}>
      <Card className="p-6 max-w-md mx-auto">
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormFieldSelect
            name="country"
            label="Country"
            options={countryOptions}
            placeholder="Select your country"
            required
            triggerClassName="w-full"
          />

          <FormFieldSelect
            name="timezone"
            label="Timezone"
            description="Select your current timezone"
            options={timezoneOptions}
            placeholder="Select timezone"
            triggerClassName="w-full"
          />

          <FormFieldSelect
            name="category"
            label="Category"
            options={categoryOptions}
            placeholder="Select a category"
            triggerClassName="w-full"
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
