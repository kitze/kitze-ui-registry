"use client";

import * as React from "react";
import { ErrorBoundary } from "react-error-boundary";
import dynamic from "next/dynamic";
import { ComponentName } from "@/lib/component-types";
import { Spinner } from "@/registry/custom/spinner/Spinner";

interface LazyPreviewProps {
  name: ComponentName;
}

export function LazyPreview({ name }: LazyPreviewProps) {
  const Preview = React.useMemo(
    () =>
      dynamic(
        () =>
          import(`@/registry/custom/${name}/preview`).then((mod) => {
            console.log(mod);
            return mod.Preview || mod.default;
          }),
        {
          loading: () => <Spinner />,
          ssr: false,
        }
      ),
    [name]
  );

  return (
    <ErrorBoundary
      fallback={null}
      onError={(error: Error) => {
        // You can add logging here if needed
        console.error(`Failed to load preview for ${name}:`, error);
      }}
    >
      <Preview />
    </ErrorBoundary>
  );
}
