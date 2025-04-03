import React from "react";
import { FormProvider, useForm } from "react-hook-form";

// This provider is used to wrap individual form component previews
// that require react-hook-form context but don't need a real form.
export function DummyFormProvider({ children }: { children: React.ReactNode }) {
  const methods = useForm(); // Initialize with empty default values or schema if needed
  return <FormProvider {...methods}>{children}</FormProvider>;
}
