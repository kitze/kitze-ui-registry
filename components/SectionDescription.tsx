"use client";

import * as React from "react";

interface SectionDescriptionProps {
  children: React.ReactNode;
}

export function SectionDescription({ children }: SectionDescriptionProps) {
  return <p className="text-sm text-muted-foreground mb-6">{children}</p>;
}
