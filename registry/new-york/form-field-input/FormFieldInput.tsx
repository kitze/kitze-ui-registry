import React from "react";
import { Input } from "@/components/ui/input";
import {
  FormFieldWrapper,
  FormFieldWrapperProps,
} from "@/registry/new-york/form-field-wrapper/FormFieldWrapper";
import { FieldValues, FieldPath } from "react-hook-form";

export interface FormFieldInputProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends Omit<FormFieldWrapperProps<TFieldValues, TName>, "children"> {
  placeholder?: string;
  type?: string;
}

export function FormFieldInput<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  placeholder,
  type = "text",
  ...wrapperProps
}: FormFieldInputProps<TFieldValues, TName>) {
  return (
    <FormFieldWrapper<TFieldValues, TName> {...wrapperProps}>
      {(field) => <Input type={type} placeholder={placeholder} {...field} />}
    </FormFieldWrapper>
  );
}
