"use client";

import * as React from "react";

interface SectionTitleProps {
  children: React.ReactNode;
}

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="text-2xl font-bold tracking-tight mt-8 mb-4">{children}</h2>
  );
}
