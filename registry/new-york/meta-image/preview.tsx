"use client";

import { MetaImage } from "./MetaImage";

export default function MetaImagePreview() {
  return (
    <div className="scale-50 origin-top-left">
      <MetaImage
        title="AppName"
        tagline="Your amazing app tagline here."
        description="Short description of what your app does."
        descriptionHighlight="And why it's awesome."
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
