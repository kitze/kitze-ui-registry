"use client";

import * as React from "react";
import { useParams } from "next/navigation";
import { LazyPreview } from "@/components/LazyPreview";
import { ComponentName, componentMeta } from "@/lib/component-types";
import Link from "next/link";
import { KitzeUIProvider } from "@/registry/new-york/KitzeUIContext/KitzeUIContext";
import { AlertProvider } from "@/registry/new-york/ui-alert";
import { useMedia } from "use-media";
import { PreviewComponent } from "@/components/PreviewComponent";

// Helper function to check if a string is a valid ComponentName
const isValidComponentName = (name: string): name is ComponentName => {
  return name in componentMeta;
};

export default function ComponentPage() {
  const params = useParams();
  const nameParam = params.name as string;
  const isMobile = useMedia({ maxWidth: 768 });

  // Check if component exists in our registry
  if (!isValidComponentName(nameParam)) {
    return (
      <KitzeUIProvider isMobile={isMobile}>
        <AlertProvider>
          <div className="flex flex-col items-center justify-center py-20">
            <h2 className="text-2xl font-bold mb-2">Component Not Found</h2>
            <p className="text-muted-foreground mb-4">
              The component "{nameParam}" doesn't exist in our registry.
            </p>
            <Link href="/" className="text-primary underline">
              Return to homepage
            </Link>
          </div>
        </AlertProvider>
      </KitzeUIProvider>
    );
  }

  const name = nameParam as ComponentName;

  return (
    <KitzeUIProvider isMobile={isMobile}>
      <AlertProvider>
        <div className="container py-8 max-w-4xl mx-auto">
          <Link href="/" className="text-primary mb-6 inline-block">
            ← Back to All Components
          </Link>

          <PreviewComponent name={name}>
            <LazyPreview name={name} />
          </PreviewComponent>
        </div>
      </AlertProvider>
    </KitzeUIProvider>
  );
}
