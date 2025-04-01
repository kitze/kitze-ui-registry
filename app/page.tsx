import * as React from "react";
import { PreviewComponent } from "@/components/PreviewComponent";
import { SuspensedExample } from "@/components/examples/SuspensedExample";
import { SpinnerExample } from "@/components/examples/SpinnerExample";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">Kitze UI</h1>
        <p className="text-muted-foreground">
          by <a href="https://twitter.com/thekitze">@thekitze</a>
        </p>
      </header>
      <main className="flex flex-col flex-1 gap-8">
        <PreviewComponent
          name="suspensed"
          title="Suspensed"
          description="A wrapper component for React Suspense with force option"
        >
          <SuspensedExample />
        </PreviewComponent>

        <PreviewComponent
          name="spinner"
          title="Spinner"
          description="A collection of loading spinner components with different variants and sizes"
        >
          <SpinnerExample />
        </PreviewComponent>
      </main>
    </div>
  );
}
