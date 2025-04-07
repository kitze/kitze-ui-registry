import * as React from "react";

export function SectionWhyKitzeUI() {
  return (
    <div className="my-10">
      <h3 className="text-2xl font-bold mb-6">Why Kitze UI?</h3>
      <ul className="space-y-3 mb-10">
        <li className="flex gap-2 items-start">
          <div className="rounded-full bg-primary w-1.5 h-1.5 mt-2.5" />
          <span>
            Compatible with the shadcn CLI for high-quality, accessible
            components
          </span>
        </li>
        <li className="flex gap-2 items-start">
          <div className="rounded-full bg-primary w-1.5 h-1.5 mt-2.5" />
          <span>
            Simplified APIs to reduce boilerplate and increase productivity
          </span>
        </li>
        <li className="flex gap-2 items-start">
          <div className="rounded-full bg-primary w-1.5 h-1.5 mt-2.5" />
          <span>Fully responsive with mobile-first design</span>
        </li>
        <li className="flex gap-2 items-start">
          <div className="rounded-full bg-primary w-1.5 h-1.5 mt-2.5" />
          <span>Dark and light mode support out of the box</span>
        </li>
        <li className="flex gap-2 items-start">
          <div className="rounded-full bg-primary w-1.5 h-1.5 mt-2.5" />
          <span>Typescript support for better developer experience</span>
        </li>
      </ul>
    </div>
  );
}
