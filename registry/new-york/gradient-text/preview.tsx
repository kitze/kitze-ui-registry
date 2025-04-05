"use client";

import React from "react";
import { GradientText } from "./GradientText";

export function Preview() {
  return (
    <div className="flex flex-col gap-8 max-w-md">
      <GradientText className="bg-gradient-to-r from-orange-500 to-blue-500">
        Animated Gradient Text
      </GradientText>

      <GradientText className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500">
        Larger Text Size
      </GradientText>

      <GradientText className="bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600">
        Different Font Weight
      </GradientText>

      <GradientText className="bg-gradient-to-r from-indigo-700 via-blue-600 to-cyan-400">
        Custom Combined Options
      </GradientText>
    </div>
  );
}
