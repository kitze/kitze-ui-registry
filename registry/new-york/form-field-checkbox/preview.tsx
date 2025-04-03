import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FormFieldCheckbox } from "./FormFieldCheckbox";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  subscribe: z.boolean().refine((val) => val === true, {
    message: "You must subscribe!",
  }),
});

type Schema = z.infer<typeof schema>;

export default function FormFieldCheckboxPreview() {
  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: { subscribe: false },
  });

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit((data) => console.log(data))}
        className="space-y-4"
      >
        <FormFieldCheckbox
          name="subscribe"
          label="Subscribe to newsletter"
          description="Receive updates directly in your inbox."
          required
        />
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
}
