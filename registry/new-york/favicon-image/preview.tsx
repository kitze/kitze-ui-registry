"use client";

import { FaviconImage } from "./FaviconImage";
import { Zap, Lock, MessageSquare } from "lucide-react";

export function Preview() {
  return (
    <div className="flex gap-6 items-end">
      <FaviconImage
        icon={<Zap className="w-full h-full" />}
        gradient="from-amber-500 to-orange-600"
        size={128}
      />
      <FaviconImage
        icon={<Lock className="w-full h-full" />}
        gradient="from-blue-500 to-cyan-500"
        size={128}
      />
      <FaviconImage
        icon={<MessageSquare className="w-full h-full" />}
        gradient="from-indigo-500 to-purple-600"
        size={128}
      />
    </div>
  );
}
