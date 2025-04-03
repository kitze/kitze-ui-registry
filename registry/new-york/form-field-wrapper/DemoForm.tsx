import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FormFieldInput } from "@/registry/new-york/form-field-input/FormFieldInput";
import { Button } from "@/components/ui/button";
import { FormDebug } from "@/registry/new-york/form-debug/FormDebug";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const demoSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type DemoSchema = z.infer<typeof demoSchema>;

export function DemoForm() {
  const form = useForm<DemoSchema>({
    resolver: zodResolver(demoSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = (data: DemoSchema) => {
    console.log("Demo Form Submitted:", data);
    alert("Form submitted! Check the console.");
  };

  return (
    <FormProvider {...form}>
      <Card>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardHeader>
            <CardTitle>Demo Login Form</CardTitle>
            <CardDescription>Enter your credentials below.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormDebug
              form={form}
              className="!relative !bottom-auto !left-auto !border-none !p-0 !bg-transparent mb-4 text-muted-foreground"
            />
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
          </CardContent>
          <CardFooter>
            <Button type="submit">Login</Button>
          </CardFooter>
        </form>
      </Card>
    </FormProvider>
  );
}
