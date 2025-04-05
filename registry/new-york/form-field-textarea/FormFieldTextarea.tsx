import React from "react";
import { Textarea } from "@/components/ui/textarea";
import {
  FormFieldWrapper,
  FormFieldWrapperProps,
} from "@/registry/new-york/form-field-wrapper/FormFieldWrapper";
import { FieldValues, FieldPath } from "react-hook-form";

export interface FormFieldTextareaProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends Omit<FormFieldWrapperProps<TFieldValues, TName>, "children"> {
  placeholder?: string;
  rows?: number;
}

export function FormFieldTextarea<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  placeholder,
  rows,
  ...wrapperProps
}: FormFieldTextareaProps<TFieldValues, TName>) {
  return (
    <FormFieldWrapper<TFieldValues, TName> {...wrapperProps}>
      {(field) => <Textarea placeholder={placeholder} rows={rows} {...field} />}
    </FormFieldWrapper>
  );
}
