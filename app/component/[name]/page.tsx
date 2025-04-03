"use client";

import * as React from "react";
import { useParams } from "next/navigation";
import { LazyPreview } from "@/components/LazyPreview";
import { ComponentName, componentMeta } from "@/lib/component-types";
import Link from "next/link";
import { PreviewComponent } from "@/components/PreviewComponent";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SidebarTrigger } from "@/components/ui/sidebar";

// Helper function to format component name for display
const formatComponentName = (name: string) => {
  // Define special cases for capitalization
  const specialCases: Record<string, string> = {
    ui: "UI",
  };

  return name
    .split("-")
    .map((word) => {
      // Check if the word is a special case
      if (word.toLowerCase() in specialCases) {
        return specialCases[word.toLowerCase()];
      }
      // Standard capitalization
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
};

// Helper function to check if a string is a valid ComponentName
const isValidComponentName = (name: string): name is ComponentName => {
  return name in componentMeta;
};

export default function ComponentPage() {
  const params = useParams();
  const nameParam = params.name as string;

  // Check if component exists in our registry
  if (!isValidComponentName(nameParam)) {
    return (
      <>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b">
          <div className="flex items-center gap-2 px-3">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="/">Kitze UI</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Not Found</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-col items-center justify-center py-20">
          <h2 className="text-2xl font-bold mb-2">Component Not Found</h2>
          <p className="text-muted-foreground mb-4">
            The component "{nameParam}" doesn't exist in our registry.
          </p>
          <Link href="/" className="text-primary underline">
            Return to homepage
          </Link>
        </div>
      </>
    );
  }

  const name = nameParam as ComponentName;
  const formattedName = formatComponentName(name);

  return (
    <>
      <header className="flex h-16 shrink-0 items-center gap-2 border-b">
        <div className="flex items-center gap-2 px-3">
          <SidebarTrigger />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="/">Kitze UI</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>{formattedName}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <div className="container py-8 max-w-4xl mx-auto">
        <PreviewComponent name={name}>
          <LazyPreview name={name} />
        </PreviewComponent>
      </div>
    </>
  );
}
