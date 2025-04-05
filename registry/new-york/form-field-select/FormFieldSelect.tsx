import React from "react";
import { FieldValues, FieldPath } from "react-hook-form";
import {
  FormFieldWrapper,
  FormFieldWrapperProps,
} from "@/registry/new-york/form-field-wrapper/FormFieldWrapper";
import {
  SimpleSelect,
  SimpleSelectOption,
  SimpleSelectProps,
} from "@/registry/new-york/simple-select/SimpleSelect";

export interface FormFieldSelectProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends Omit<FormFieldWrapperProps<TFieldValues, TName>, "children"> {
  options: SimpleSelectOption[];
  placeholder?: string;
  triggerClassName?: string;
  disabled?: boolean;
}

export function FormFieldSelect<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  options,
  placeholder,
  triggerClassName,
  disabled,
  ...wrapperProps
}: FormFieldSelectProps<TFieldValues, TName>) {
  return (
    <FormFieldWrapper<TFieldValues, TName> {...wrapperProps}>
      {(field) => (
        <SimpleSelect
          options={options}
          value={field.value}
          onValueChange={field.onChange}
          placeholder={placeholder}
          triggerClassName={triggerClassName}
          disabled={disabled}
        />
      )}
    </FormFieldWrapper>
  );
}
