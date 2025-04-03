import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  FormFieldWrapper,
  FormFieldWrapperProps,
} from "@/registry/new-york/form-field-wrapper/FormFieldWrapper";
import { FieldValues, FieldPath } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export interface FormFieldCheckboxProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends Omit<
    FormFieldWrapperProps<TFieldValues, TName>,
    "children" | "label"
  > {
  label: React.ReactNode;
  checkboxClassName?: string;
}

export function FormFieldCheckbox<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  label,
  checkboxClassName,
  ...wrapperProps
}: FormFieldCheckboxProps<TFieldValues, TName>) {
  return (
    <FormFieldWrapper<TFieldValues, TName> {...wrapperProps} label={undefined}>
      {(field) => (
        <div className="flex items-center space-x-2">
          <Checkbox
            id={field.name}
            checked={field.value}
            onCheckedChange={field.onChange}
            onBlur={field.onBlur}
            name={field.name}
            ref={field.ref}
            required={wrapperProps.required}
            aria-describedby={
              wrapperProps.description ? `${field.name}-description` : undefined
            }
            className={cn(checkboxClassName)}
          />
          <Label
            htmlFor={field.name}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {label}
            {wrapperProps.required && (
              <span className="text-destructive ml-1">*</span>
            )}
          </Label>
        </div>
      )}
    </FormFieldWrapper>
  );
}
