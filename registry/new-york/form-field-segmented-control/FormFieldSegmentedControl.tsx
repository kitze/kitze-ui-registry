import React from "react";
import { FieldValues, FieldPath } from "react-hook-form";
import {
  FormFieldWrapper,
  FormFieldWrapperProps,
} from "@/registry/new-york/form-field-wrapper/FormFieldWrapper";
import {
  SegmentedControl,
  SegmentedControlOption,
  SegmentedControlProps,
} from "@/registry/new-york/segmented-control/SegmentedControl";

export interface FormFieldSegmentedControlProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends Omit<FormFieldWrapperProps<TFieldValues, TName>, "children"> {
  options: SegmentedControlOption[];
  size?: SegmentedControlProps["size"];
  className?: string;
  tabClassName?: string;
  activeTabClassName?: string;
  mobileView?: SegmentedControlProps["mobileView"];
  mobileViewSearch?: boolean;
  drawerTitle?: string;
  placeholder?: string;
  disabled?: boolean;
}

export function FormFieldSegmentedControl<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  options,
  size,
  className,
  tabClassName,
  activeTabClassName,
  mobileView,
  mobileViewSearch,
  drawerTitle,
  placeholder,
  disabled,
  ...wrapperProps
}: FormFieldSegmentedControlProps<TFieldValues, TName>) {
  return (
    <FormFieldWrapper<TFieldValues, TName> {...wrapperProps}>
      {(field) => (
        <SegmentedControl
          options={options}
          value={field.value}
          onChange={field.onChange}
          size={size}
          className={className}
          tabClassName={tabClassName}
          activeTabClassName={activeTabClassName}
          mobileView={mobileView}
          mobileViewSearch={mobileViewSearch}
          drawerTitle={drawerTitle}
          placeholder={placeholder}
        />
      )}
    </FormFieldWrapper>
  );
}
