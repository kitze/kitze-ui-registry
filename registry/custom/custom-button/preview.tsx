import React from "react";
import { CustomButton } from "./CustomButton";
import { ArrowRight, Mail, Plus } from "lucide-react";
import { ComponentPropVariant } from "../../../components/ui/ComponentPropVariant";

export default function CustomButtonPreview() {
  return (
    <div className="flex flex-col gap-8">
      <ComponentPropVariant
        component={CustomButton}
        variants={{
          prop: "variant",
          values: [
            "default",
            "destructive",
            "outline",
            "secondary",
            "ghost",
            "link",
          ],
        }}
        className="flex flex-wrap gap-4 [&>*]:w-auto [&>*]:min-w-[120px]"
      />

      <ComponentPropVariant
        component={CustomButton}
        variants={{
          prop: "size",
          values: ["xs", "sm", "md", "lg"],
        }}
        className="flex flex-wrap gap-4 [&>*]:w-auto [&>*]:min-w-[120px]"
        children={(value) => {
          const sizeText = typeof value === "string" ? value : "";
          return sizeText.charAt(0).toUpperCase() + sizeText.slice(1);
        }}
      />

      <div className="flex flex-wrap gap-4 [&>*]:w-auto [&>*]:min-w-[120px]">
        <CustomButton icon={Mail}>Mail</CustomButton>
        <CustomButton leftIcon={Mail}>With Left Icon</CustomButton>
        <CustomButton rightIcon={ArrowRight}>With Right Icon</CustomButton>
        <CustomButton leftIcon={Mail} rightIcon={ArrowRight}>
          Both Icons
        </CustomButton>
      </div>

      <div className="flex flex-wrap gap-4 [&>*]:w-auto">
        <CustomButton icon={Plus} circle />
        <CustomButton icon={Mail} />
        <CustomButton loading>Loading</CustomButton>
        <CustomButton tooltip="Button with tooltip">Hover me</CustomButton>
      </div>

      <ComponentPropVariant
        component={CustomButton}
        variants={{
          prop: "color",
          values: ["primary", "secondary", "destructive", "yellow-500"],
        }}
        className="flex flex-wrap gap-4 [&>*]:w-auto [&>*]:min-w-[120px]"
      />
    </div>
  );
}
