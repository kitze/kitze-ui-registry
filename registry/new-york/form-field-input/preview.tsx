import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FormFieldInput } from "./FormFieldInput";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type Schema = z.infer<typeof schema>;

export default function FormFieldInputPreview() {
  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: { email: "", password: "" },
  });

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit((data) => console.log(data))}
        className="space-y-4"
      >
        <FormFieldInput
          name="email"
          label="Email Address"
          type="email"
          placeholder="you@example.com"
          required
        />
        <FormFieldInput
          name="password"
          label="Password"
          type="password"
          description="Must be at least 8 characters long."
          required
        />
        <Button type="submit">Login</Button>
      </form>
    </FormProvider>
  );
}
