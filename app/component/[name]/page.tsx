"use client";

import * as React from "react";
import { useParams } from "next/navigation";
import { LazyPreview } from "@/components/LazyPreview";
import { ComponentName, componentMeta } from "@/lib/component-types";
import { Copy } from "lucide-react";
import { toast } from "sonner";
import { cn, getRegistryUrl } from "@/lib/utils";
import { CustomButton } from "@/registry/new-york/custom-button/CustomButton";
import { SimpleTooltip } from "@/registry/new-york/simple-tooltip/SimpleTooltip";
import { OpenInV0Button } from "@/components/open-in-v0-button";
import Link from "next/link";
import { KitzeUIProvider } from "@/registry/new-york/KitzeUIContext/KitzeUIContext";
import { AlertProvider } from "@/registry/new-york/ui-alert";
import { useMedia } from "use-media";

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
  const meta = componentMeta[name];
  const installCommand = `npx shadcn@latest add ${getRegistryUrl(name)}`;

  const handleCopy = React.useCallback(() => {
    navigator.clipboard.writeText(installCommand);
    toast.success("Copied to clipboard!");
  }, [installCommand]);

  return (
    <KitzeUIProvider isMobile={isMobile}>
      <AlertProvider>
        <div className="container py-8 max-w-4xl mx-auto">
          <Link href="/" className="text-primary mb-6 inline-block">
            ← Back to All Components
          </Link>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <h1 className="text-3xl font-bold">{meta.title}</h1>
                <SimpleTooltip content={installCommand}>
                  <CustomButton
                    tooltip={installCommand}
                    icon={Copy}
                    variant="ghost"
                    className="h-8 w-8"
                    onClick={handleCopy}
                  />
                </SimpleTooltip>
                <OpenInV0Button name={name} className="w-fit shrink-0" />
              </div>
              {meta.description && (
                <p className="text-lg text-muted-foreground">
                  {meta.description}
                </p>
              )}
            </div>

            <div className={cn("flex flex-col gap-4 border rounded-lg p-6")}>
              <LazyPreview name={name} />
            </div>
          </div>
        </div>
      </AlertProvider>
    </KitzeUIProvider>
  );
}
