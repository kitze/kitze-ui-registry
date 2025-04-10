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
          values: ["default", "outline", "ghost", "link"],
        }}
        className="flex flex-wrap gap-4 *:w-auto *:min-w-[120px]"
      />

      <ComponentPropVariant
        component={CustomButton}
        componentProps={{
          color: "pink-400",
        }}
        variants={{
          prop: "variant",
          values: ["default", "outline", "ghost", "link"],
        }}
        className="flex flex-wrap gap-4 *:w-auto *:min-w-[120px]"
      />

      <ComponentPropVariant
        component={CustomButton}
        variants={{
          prop: "size",
          values: ["xs", "sm", "md", "lg"],
        }}
        className="flex flex-wrap gap-4 *:w-auto *:min-w-[120px]"
        children={(value) => {
          const sizeText = typeof value === "string" ? value : "";
          return sizeText.charAt(0).toUpperCase() + sizeText.slice(1);
        }}
      />

      <div className="flex flex-wrap gap-4 *:w-auto *:min-w-[120px]">
        <CustomButton icon={Mail}>Mail</CustomButton>
        <CustomButton leftIcon={Mail}>With Left Icon</CustomButton>
        <CustomButton rightIcon={ArrowRight}>With Right Icon</CustomButton>
        <CustomButton leftIcon={Mail} rightIcon={ArrowRight}>
          Both Icons
        </CustomButton>
      </div>

      <div className="flex flex-wrap gap-4 *:w-auto">
        <CustomButton icon={Plus} circle />
        <CustomButton icon={Mail} />
        <CustomButton loading>Loading</CustomButton>
        <CustomButton tooltip="Button with tooltip">Hover me</CustomButton>
      </div>

      <div className="flex flex-wrap gap-4 *:w-auto">
        <CustomButton icon={Mail} size="xs" />
        <CustomButton icon={Mail} size="sm" />
        <CustomButton icon={Mail} size="md" className="min-h-8 min-w-10" />
        <CustomButton icon={Mail} size="lg" />
      </div>

      <div className="flex flex-wrap gap-4 *:w-auto">
        <CustomButton icon={ArrowRight} circle size="xs" />
        <CustomButton icon={ArrowRight} circle size="sm" />
        <CustomButton
          icon={ArrowRight}
          circle
          size="md"
          className="min-h-8 min-w-10"
        />
        <CustomButton icon={ArrowRight} circle size="lg" />
      </div>

      <ComponentPropVariant
        component={CustomButton}
        variants={{
          prop: "color",
          values: ["primary", "secondary", "destructive"],
        }}
        className="flex flex-wrap gap-4 *:w-auto *:min-w-[120px]"
      />

      <ComponentPropVariant
        component={CustomButton}
        variants={{
          prop: "color",
          values: [
            "yellow-300",
            "blue-500",
            "amber-300",
            "green-300",
            "violet-300",
          ],
        }}
        componentProps={{
          variant: "default",
        }}
        className="flex flex-wrap gap-4 *:w-auto *:min-w-[120px]"
      />
    </div>
  );
}
