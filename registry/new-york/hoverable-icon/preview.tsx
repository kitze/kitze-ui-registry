import React from "react";
import { HoverableIcon } from "./HoverableIcon";
import { Github, Twitter, Mail, ExternalLink, Star } from "lucide-react";

export default function Preview() {
  return (
    <div className="flex flex-col gap-8 p-4">
      {/* Size variants */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Size Variants</h3>
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <HoverableIcon Icon={Star} size="xs" tooltip="Extra Small (xs)" />
            <span className="text-xs text-muted-foreground">xs</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <HoverableIcon Icon={Star} size="sm" tooltip="Small (sm)" />
            <span className="text-xs text-muted-foreground">sm</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <HoverableIcon Icon={Star} size="md" tooltip="Medium (md)" />
            <span className="text-xs text-muted-foreground">md</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <HoverableIcon Icon={Star} size="lg" tooltip="Large (lg)" />
            <span className="text-xs text-muted-foreground">lg</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <HoverableIcon Icon={Star} size={32} tooltip="Custom Size (32px)" />
            <span className="text-xs text-muted-foreground">custom</span>
          </div>
        </div>
      </div>

      {/* Different icons with links */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Icons with Links</h3>
        <div className="flex flex-wrap gap-6">
          <HoverableIcon
            Icon={Github}
            href="https://github.com"
            size="lg"
            tooltip="GitHub"
          />

          <HoverableIcon
            Icon={Twitter}
            href="https://twitter.com"
            size="lg"
            tooltip="Twitter"
          />

          <HoverableIcon
            Icon={Mail}
            href="mailto:example@example.com"
            size="lg"
            tooltip="Send Email"
          />

          <HoverableIcon
            Icon={ExternalLink}
            href="https://example.com"
            size="lg"
            tooltip="External Link"
          />
        </div>
      </div>
    </div>
  );
}
