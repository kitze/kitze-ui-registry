"use client";

import React, { useState } from "react";
import { AdvancedSelect, AdvancedSelectOption } from "./AdvancedSelect";
import { Card } from "@/components/ui/card";
import { SegmentedControl } from "@/registry/new-york/segmented-control/SegmentedControl";
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
  Search,
  List,
  Plus,
  Settings,
  ChevronRight,
  CircleCheck,
} from "lucide-react";

export default function Preview() {
  const [basicValues, setBasicValues] = useState<string[]>([
    "option1",
    "option3",
  ]);
  const [searchValues, setSearchValues] = useState<string[]>([]);
  const [iconValues, setIconValues] = useState<string[]>(["users", "calendar"]);
  const [emojiValues, setEmojiValues] = useState<string[]>([]);
  const [customIconValues, setCustomIconValues] = useState<string[]>([]);
  const [loadingValues, setLoadingValues] = useState<string[]>([]);
  const [creationValues, setCreationValues] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Custom options for the creation example
  const [customOptions, setCustomOptions] = useState<AdvancedSelectOption[]>([
    { value: "tag1", label: "Tag 1" },
    { value: "tag2", label: "Tag 2" },
    { value: "tag3", label: "Tag 3" },
  ]);

  // Basic options without icons or emojis
  const basicOptions: AdvancedSelectOption[] = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    { value: "option4", label: "Option 4" },
    { value: "option5", label: "Option 5" },
  ];

  // Options with icons
  const iconOptions: AdvancedSelectOption[] = [
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

  // Options with emojis
  const emojiOptions: AdvancedSelectOption[] = [
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

  // Handler for creating new options
  const handleCreateOption = (value: string) => {
    alert(`Creating new option: ${value}`);
    const newOption = { value, label: value };
    setCustomOptions([...customOptions, newOption]);
    setCreationValues([...creationValues, value]);
  };

  const loadingOptions = [
    { label: "Off", value: "off" },
    { label: "On", value: "on" },
  ];

  const handleLoadingChange = (val: string) => {
    if (val === "on") {
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 1500);
    } else {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-8 p-6">
      <Card className="p-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Basic Example</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Multi-select without icons or emojis
          </p>
        </div>
        <div className="flex flex-col">
          <div className="w-full">
            <AdvancedSelect
              options={basicOptions}
              value={basicValues}
              onValueChange={setBasicValues}
              placeholder="Select options"
              maxCount={3}
            />
          </div>
          <div className="mt-4 text-sm text-muted-foreground">
            <p>Selected: {basicValues.join(", ") || "none"}</p>
            <p className="mt-1 text-xs text-muted-foreground italic">
              Tip: Middle-click on a badge or option to remove it
            </p>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Search Example</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Multi-select with search capability
          </p>
        </div>
        <div className="flex flex-col">
          <div className="w-full">
            <AdvancedSelect
              options={basicOptions}
              value={searchValues}
              onValueChange={setSearchValues}
              placeholder="Search and select options"
              searchable
            />
          </div>
          <div className="mt-4 text-sm text-muted-foreground">
            <p>Selected: {searchValues.join(", ") || "none"}</p>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Icon Example with Search</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Multi-select with icons and search capability
          </p>
        </div>
        <div className="flex flex-col">
          <div className="w-full">
            <AdvancedSelect
              options={iconOptions}
              value={iconValues}
              onValueChange={setIconValues}
              placeholder="Search and select categories"
              searchable
            />
          </div>
          <div className="mt-4 text-sm text-muted-foreground">
            <p>Selected: {iconValues.join(", ") || "none"}</p>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Emoji Example with Search</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Multi-select with emojis and search capability
          </p>
        </div>
        <div className="flex flex-col">
          <div className="w-full">
            <AdvancedSelect
              options={emojiOptions}
              value={emojiValues}
              onValueChange={setEmojiValues}
              placeholder="Search and select preferences"
              searchable
            />
          </div>
          <div className="mt-4 text-sm text-muted-foreground">
            <p>Selected: {emojiValues.join(", ") || "none"}</p>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Custom Icons Example</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Select with custom left and right icons
          </p>
        </div>
        <div className="flex flex-col">
          <div className="w-full">
            <AdvancedSelect
              options={basicOptions}
              value={customIconValues}
              onValueChange={setCustomIconValues}
              placeholder="Select with custom icons"
              leftIcon={Search}
              rightIcon={ChevronRight}
            />
          </div>
          <div className="mt-4 text-sm text-muted-foreground">
            <p>Selected: {customIconValues.join(", ") || "none"}</p>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Loading State Example</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Select with loading state simulation
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex-grow">
            <AdvancedSelect
              options={basicOptions}
              value={loadingValues}
              onValueChange={setLoadingValues}
              placeholder="Select options"
              loading={isLoading}
            />
          </div>
          <SegmentedControl
            options={loadingOptions}
            value={isLoading ? "on" : "off"}
            onChange={handleLoadingChange}
            size="sm"
          />
        </div>
        <div className="mt-4 text-sm text-muted-foreground">
          <p>Selected: {loadingValues.join(", ") || "none"}</p>
        </div>
      </Card>

      <Card className="p-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Create Option Example</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Add new options on the fly when they don't exist
          </p>
        </div>
        <div className="flex flex-col">
          <div className="w-full">
            <AdvancedSelect
              options={customOptions}
              value={creationValues}
              onValueChange={setCreationValues}
              placeholder="Type to search or create new tags"
              searchable
              leftIcon={Plus}
              onCreate={handleCreateOption}
            />
          </div>
          <div className="mt-4 text-sm text-muted-foreground">
            <p>Selected: {creationValues.join(", ") || "none"}</p>
            <p className="mt-2 text-xs">
              Try typing a new tag name that doesn't exist and press "Create"
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
