"use client";

import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FormFieldAdvancedSelect } from "./FormFieldAdvancedSelect";
import { SelectOption } from "@/lib/select-option";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Users,
  Calendar,
  Globe,
  Mail,
  MessageSquare,
  Music,
  Image,
  Video,
  FileText,
} from "lucide-react";

type FormValues = {
  options: string[];
  features: string[];
  categories: string[];
};

export default function Preview() {
  const form = useForm<FormValues>({
    defaultValues: {
      options: ["option1", "option3"],
      features: [],
      categories: ["mail", "image"],
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
    alert(JSON.stringify(data, null, 2));
  };

  // Basic options without icons or emojis
  const basicOptions: SelectOption[] = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    { value: "option4", label: "Option 4" },
    { value: "option5", label: "Option 5" },
  ];

  // Options with emojis
  const emojiOptions: SelectOption[] = [
    { value: "search", label: "Search", emoji: "🔍" },
    { value: "filter", label: "Filter", emoji: "🧹" },
    { value: "sort", label: "Sort", emoji: "📊" },
    { value: "export", label: "Export", emoji: "📤" },
    { value: "import", label: "Import", emoji: "📥" },
    { value: "share", label: "Share", emoji: "📢" },
    { value: "bookmark", label: "Bookmark", emoji: "🔖" },
    { value: "edit", label: "Edit", emoji: "✏️" },
    { value: "delete", label: "Delete", emoji: "🗑️" },
    { value: "settings", label: "Settings", emoji: "⚙️" },
  ];

  // Options with icons
  const iconOptions: SelectOption[] = [
    { value: "users", label: "Users", icon: Users },
    { value: "calendar", label: "Calendar", icon: Calendar },
    { value: "globe", label: "Globe", icon: Globe },
    { value: "mail", label: "Mail", icon: Mail },
    { value: "message", label: "Messages", icon: MessageSquare },
    { value: "music", label: "Music", icon: Music },
    { value: "image", label: "Images", icon: Image },
    { value: "video", label: "Videos", icon: Video },
    { value: "document", label: "Documents", icon: FileText },
  ];

  return (
    <FormProvider {...form}>
      <Card className="p-6 max-w-lg mx-auto">
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormFieldAdvancedSelect
            name="options"
            label="Basic Example"
            description="Multi-select without icons or emojis"
            options={basicOptions}
            placeholder="Select options"
            maxCount={3}
            required
          />

          <FormFieldAdvancedSelect
            name="features"
            label="Search Example"
            description="Multi-select with search capability"
            options={basicOptions}
            placeholder="Search and select options"
            searchable
          />

          <FormFieldAdvancedSelect
            name="categories"
            label="Icon Example with Search"
            description="Multi-select with icons and search capability"
            options={iconOptions}
            placeholder="Search and select categories"
            searchable
          />

          <FormFieldAdvancedSelect
            name="preferences"
            label="Emoji Example with Search"
            description="Multi-select with emojis and search capability"
            options={emojiOptions}
            placeholder="Search and select preferences"
            searchable
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
