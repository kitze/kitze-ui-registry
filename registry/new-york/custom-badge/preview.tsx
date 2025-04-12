import { CustomBadge, BadgeSize } from "./CustomBadge";
import {
  GridIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  PlusIcon,
  InfoIcon,
  BellIcon,
} from "lucide-react";
import { ComponentPropVariant } from "@/components/ui/ComponentPropVariant";

const Preview = () => {
  const sizes: BadgeSize[] = ["xs", "sm", "md", "lg", "xl"];

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h3 className="mb-2 text-sm font-medium">Default</h3>
        <ComponentPropVariant
          component={CustomBadge}
          variants={{
            prop: "size",
            values: sizes,
          }}
          componentProps={{
            color: "bg-emerald-500",
          }}
          className="flex flex-wrap items-center gap-2"
        >
          {(value) => value?.toUpperCase()}
        </ComponentPropVariant>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-medium">Outline</h3>
        <ComponentPropVariant
          component={CustomBadge}
          variants={{
            prop: "size",
            values: sizes,
          }}
          componentProps={{
            color: "bg-violet-500",
            variant: "outline",
          }}
          className="flex flex-wrap items-center gap-2"
        >
          {(value) => value?.toUpperCase()}
        </ComponentPropVariant>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-medium">With Icons</h3>
        <div className="flex flex-wrap items-center gap-2">
          <CustomBadge color="bg-blue-500" leftIcon={BellIcon}>
            Notifications
          </CustomBadge>

          <CustomBadge color="bg-indigo-500" icon={InfoIcon} />
        </div>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-medium">With Side Content</h3>
        <div className="flex flex-wrap items-center gap-2">
          <CustomBadge
            color="bg-rose-500"
            leftSide={<span className="font-bold">!</span>}
          >
            Important
          </CustomBadge>
          <CustomBadge
            color="bg-purple-500"
            rightSide={
              <span className="bg-purple-600 ml-1 rounded px-1 text-white">
                99+
              </span>
            }
            variant="ghost"
          >
            Messages
          </CustomBadge>
        </div>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-medium">Other Examples</h3>
        <div className="flex flex-wrap items-center gap-2">
          <CustomBadge color="bg-cyan-500" darkColor="bg-yellow-500">
            Cyan/Yellow
          </CustomBadge>
          <CustomBadge
            color="bg-gray-500"
            variant="outline"
            leftIcon={GridIcon}
          >
            With Icon
          </CustomBadge>
          <CustomBadge color="bg-red-500" icon={PlusIcon}>
            Go
          </CustomBadge>
        </div>
      </div>
    </div>
  );
};

export default Preview;
