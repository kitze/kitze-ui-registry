import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FormFieldTextarea } from "./FormFieldTextarea";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  feedback: z.string().min(10, "Feedback must be at least 10 characters"),
  bio: z.string().max(200, "Bio cannot exceed 200 characters").optional(),
});

type Schema = z.infer<typeof schema>;

export default function FormFieldTextareaPreview() {
  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: { feedback: "", bio: "" },
  });

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit((data) => console.log(data))}
        className="space-y-4"
      >
        <FormFieldTextarea
          name="feedback"
          label="Your Feedback"
          placeholder="Tell us what you think..."
          rows={4}
          required
        />
        <FormFieldTextarea
          name="bio"
          label="Bio"
          placeholder="A short description about yourself"
          description="Maximum 200 characters"
          rows={3}
        />
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
}
