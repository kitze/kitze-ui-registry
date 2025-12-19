"use client";

import { Sparkles } from "lucide-react";
import { MetaImage } from "./MetaImage";

export function Preview() {
  return (
    <div className="scale-[0.4] origin-top-left">
      <MetaImage
        title="AppName"
        tagline="Your amazing app tagline here."
        description="Short description of what your app does."
        descriptionHighlight="And why it's awesome."
        icon={<Sparkles className="h-full w-full text-purple-400" />}
        accentGradient="from-blue-500 via-purple-500 to-blue-500"
        gradientBlurs={[
          {
            position: "top-[-20%] left-[-10%]",
            size: "h-[500px] w-[500px]",
            color: "bg-blue-600/15",
            blur: "blur-[120px]",
          },
          {
            position: "bottom-[-20%] right-[-10%]",
            size: "h-[400px] w-[400px]",
            color: "bg-purple-600/15",
            blur: "blur-[100px]",
          },
          {
            position: "top-[30%] right-[20%]",
            size: "h-[300px] w-[300px]",
            color: "bg-indigo-600/10",
            blur: "blur-[80px]",
          },
        ]}
      />
    </div>
  );
}
