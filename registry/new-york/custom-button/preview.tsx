import React from "react";
import { CustomButton } from "./CustomButton";
import {
  ArrowRight,
  Mail,
  Plus,
  Share,
  Download,
  Check,
  Clock,
  Star,
  Settings,
  Save,
  Trash,
  Pencil,
} from "lucide-react";
import { ComponentPropVariant } from "../../../components/ui/ComponentPropVariant";

export default function CustomButtonPreview() {
  return (
    <div className="flex flex-col gap-8">
      <h3>Custom buttons</h3>
      <CustomButton>test</CustomButton>
      <ComponentPropVariant
        component={CustomButton}
        componentProps={{
          color: "bg-pink-400",
        }}
        variants={{
          prop: "variant",
          values: ["filled", "light", "outline", "ghost", "link"],
        }}
        className="flex flex-wrap gap-4 *:w-auto *:min-w-[120px]"
      />

      <h3>Custom size</h3>

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
        <CustomButton variant="light" color="bg-emerald-500" icon={Mail}>
          Mail
        </CustomButton>
        <CustomButton variant="light" color="bg-violet-500" leftIcon={Mail}>
          With Left Icon
        </CustomButton>
        <CustomButton
          variant="light"
          color="bg-orange-500"
          rightIcon={ArrowRight}
        >
          With Right Icon
        </CustomButton>
        <CustomButton
          variant="light"
          color="bg-blue-500"
          leftIcon={Mail}
          rightIcon={ArrowRight}
        >
          Both Icons
        </CustomButton>
      </div>

      <div className="flex flex-wrap gap-4 *:w-auto">
        <CustomButton
          variant="light"
          color="bg-emerald-500"
          icon={Plus}
          circle
        />
        <CustomButton variant="light" color="bg-violet-500" icon={Mail} />
        <CustomButton variant="light" loading>
          Loading
        </CustomButton>
        <CustomButton variant="light" tooltip="Button with tooltip">
          Hover me
        </CustomButton>
      </div>

      <div className="flex flex-wrap gap-4 *:w-auto">
        <CustomButton
          variant="light"
          color="bg-emerald-500"
          icon={Mail}
          size="xs"
        />
        <CustomButton
          variant="light"
          color="bg-violet-500"
          icon={Mail}
          size="sm"
        />
        <CustomButton
          variant="light"
          color="bg-pink-500"
          icon={Mail}
          size="md"
          className="min-h-8 min-w-10"
        />
        <CustomButton
          variant="light"
          color="bg-orange-500"
          icon={Mail}
          size="lg"
        />
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

      <div>
        <h3 className="mb-2 text-sm font-medium">Custom Colors (Filled)</h3>
        <div className="flex flex-wrap items-center gap-2">
          <CustomButton
            variant="filled"
            color="bg-emerald-500"
            leftIcon={Check}
          >
            Emerald
          </CustomButton>
          <CustomButton
            variant="filled"
            color="bg-sky-500"
            rightIcon={Download}
          >
            Sky
          </CustomButton>
          <CustomButton variant="filled" color="bg-rose-500" loading>
            Rose
          </CustomButton>
        </div>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-medium">Custom Colors (Light)</h3>
        <div className="flex flex-wrap items-center gap-2">
          <CustomButton
            variant="light"
            color="bg-emerald-500"
            rightIcon={Share}
          >
            Emerald
          </CustomButton>
          <CustomButton variant="light" color="bg-sky-500" loading>
            Sky
          </CustomButton>
          <CustomButton variant="light" color="bg-rose-500" leftIcon={Star}>
            Rose
          </CustomButton>
        </div>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-medium">Custom Colors (Outline)</h3>
        <div className="flex flex-wrap items-center gap-2">
          <CustomButton variant="outline" color="bg-emerald-500" loading>
            Emerald
          </CustomButton>
          <CustomButton variant="outline" color="bg-sky-500" leftIcon={Clock}>
            Sky
          </CustomButton>
          <CustomButton
            variant="outline"
            color="bg-rose-500"
            rightIcon={Pencil}
          >
            Rose
          </CustomButton>
        </div>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-medium">Custom Colors (Ghost)</h3>
        <div className="flex flex-wrap items-center gap-2">
          <CustomButton
            variant="ghost"
            color="bg-emerald-500"
            leftIcon={Settings}
          >
            Emerald
          </CustomButton>
          <CustomButton
            variant="ghost"
            color="bg-sky-500"
            rightIcon={ArrowRight}
          >
            Sky
          </CustomButton>
          <CustomButton variant="ghost" color="bg-rose-500" loading>
            Rose
          </CustomButton>
        </div>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-medium">Custom Colors (Link)</h3>
        <div className="flex flex-wrap items-center gap-2">
          <CustomButton variant="link" color="bg-emerald-500" rightIcon={Share}>
            Emerald Link
          </CustomButton>
          <CustomButton variant="link" color="bg-sky-500" leftIcon={Save}>
            Sky Link
          </CustomButton>
          <CustomButton variant="link" color="bg-rose-500" leftIcon={Trash}>
            Rose Link
          </CustomButton>
        </div>
      </div>
    </div>
  );
}
