import * as React from "react";
import {
  Puzzle,
  Sparkles,
  Zap,
  Smartphone,
  ClipboardCheck,
  Terminal,
  LucideIcon,
} from "lucide-react";

type SectionIconProps = {
  icon: LucideIcon;
  className?: string;
  gradient: string;
};

const SectionIcon = ({
  icon: Icon,
  className = "",
  gradient,
}: SectionIconProps) => {
  return (
    <div className={`mb-4 inline-flex p-3 rounded-lg ${gradient}`}>
      <Icon className="h-6 w-6 text-white" />
    </div>
  );
};

export function SectionComponentTypes() {
  return (
    <div className="my-10">
      <h3 className="text-2xl font-bold mb-8">Component Types</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="border rounded-lg p-6 shadow-sm">
          <SectionIcon
            icon={Puzzle}
            gradient="bg-gradient-to-br from-blue-500 to-indigo-600"
          />
          <h4 className="text-xl font-semibold mb-3">Original Components</h4>
          <p>
            Some components here are completely original and not dependent on
            existing shadcn/ui components, offering unique functionality.
          </p>
        </div>

        <div className="border rounded-lg p-6 shadow-sm">
          <SectionIcon
            icon={Sparkles}
            gradient="bg-gradient-to-br from-pink-500 to-rose-600"
          />
          <h4 className="text-xl font-semibold mb-3">Enhanced Alternatives</h4>
          <p>
            Components like CustomButton offer more variations and props than
            the standard shadcn/ui versions, giving you more flexibility and
            control.
          </p>
        </div>

        <div className="border rounded-lg p-6 shadow-sm">
          <SectionIcon
            icon={Zap}
            gradient="bg-gradient-to-br from-amber-500 to-orange-600"
          />
          <h4 className="text-xl font-semibold mb-3">Simplified API</h4>
          <p>
            Simplified versions built on top existing shadcn/ui components (like
            SimpleDialog, SimplePopover, SimpleTooltip) reduce boilerplate and
            allow you to achieve the same results with much less code.
          </p>
        </div>

        <div className="border rounded-lg p-6 shadow-sm">
          <SectionIcon
            icon={Smartphone}
            gradient="bg-gradient-to-br from-cyan-500 to-blue-600"
          />
          <h4 className="text-xl font-semibold mb-3">Responsive Components</h4>
          <p>
            Smart components that automatically adapt to screen size - rendering
            as popovers or dialogs on desktop but transforming into bottom
            drawers on mobile without requiring additional code.
          </p>
        </div>

        <div className="border rounded-lg p-6 shadow-sm">
          <SectionIcon
            icon={ClipboardCheck}
            gradient="bg-gradient-to-br from-emerald-500 to-green-600"
          />
          <h4 className="text-xl font-semibold mb-3">Form Components</h4>
          <p>
            Build forms with way less boilerplate, fully type-safe and wired to
            react-hook-form out of the box, making form handling simpler and
            more reliable.
          </p>
        </div>

        <div className="border rounded-lg p-6 shadow-sm">
          <SectionIcon
            icon={Terminal}
            gradient="bg-gradient-to-br from-violet-500 to-purple-600"
          />
          <h4 className="text-xl font-semibold mb-3">Imperative APIs</h4>
          <p>
            Useful functions like confirmAlert(), confirmDelete(), and
            openComponentInModal() that allow you to trigger UI components
            imperatively without complex state management.
          </p>
        </div>
      </div>
    </div>
  );
}
