import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FormFieldWrapper } from "./FormFieldWrapper";
import { Button } from "@/components/ui/button";

export default function FormFieldWrapperPreview() {
  const form = useForm({ defaultValues: { example: "" } });

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit((data) => console.log(data))}>
        <FormFieldWrapper
          name="example"
          label="Example Label"
          description="This is a description."
          required
        >
          {() => <p>This is the child content rendered inside the wrapper.</p>}
        </FormFieldWrapper>
        <Button type="submit" className="mt-4">
          Submit (Check Console)
        </Button>
      </form>
    </FormProvider>
  );
}
