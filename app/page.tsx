"use client";
import * as React from "react";
import { Header } from "@/components/Header";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function Home() {
  return (
    <>
      <header className="flex h-16 shrink-0 items-center gap-2 border-b">
        <div className="flex items-center gap-2 px-3">
          <SidebarTrigger />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage>Kitze UI</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
        <Header />
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg mb-6">
            Kitze UI is a collection of reusable components compatible with the
            shadcn CLI, designed to make building beautiful and functional
            interfaces easier, and with much less boilerplate.
          </p>
          <p className="text-lg mb-10">
            Browse the components using the sidebar to find the right tools for
            your next project. Each component comes with a live preview and
            usage examples.
          </p>

          <Separator className="my-8" />

          <h3 className="text-2xl font-bold mb-8">Component Types</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="border rounded-lg p-6 shadow-sm">
              <h4 className="text-xl font-semibold mb-3">
                Original Components
              </h4>
              <p>
                Some components here are completely original and not dependent
                on existing shadcn/ui components, offering unique functionality.
              </p>
            </div>

            <div className="border rounded-lg p-6 shadow-sm">
              <h4 className="text-xl font-semibold mb-3">
                Enhanced Alternatives
              </h4>
              <p>
                Components like CustomButton offer more variations and props
                than the standard shadcn/ui versions, giving you more
                flexibility and control.
              </p>
            </div>

            <div className="border rounded-lg p-6 shadow-sm">
              <h4 className="text-xl font-semibold mb-3">Simplified API</h4>
              <p>
                Simplified versions built on top existing shadcn/ui components
                (like SimpleDialog, SimplePopover, SimpleTooltip) reduce
                boilerplate and allow you to achieve the same results with much
                less code.
              </p>
            </div>

            <div className="border rounded-lg p-6 shadow-sm">
              <h4 className="text-xl font-semibold mb-3">
                Responsive Components
              </h4>
              <p>
                Smart components that automatically adapt to screen size -
                rendering as popovers or dialogs on desktop but transforming
                into bottom drawers on mobile without requiring additional code.
              </p>
            </div>
          </div>

          <Separator className="my-8" />

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

          <div className="bg-muted/50 p-6 rounded-lg text-center mt-8">
            <p className="text-lg font-medium">
              Get started by selecting a component category from the sidebar.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
