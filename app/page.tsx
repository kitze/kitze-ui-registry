"use client";
import * as React from "react";
import { Header } from "@/components/Header";
import { Sponsors } from "@/components/Sponsors";
import { SectionWelcome } from "@/components/SectionWelcome";
import { SectionComponentTypes } from "@/components/SectionComponentTypes";
import { SectionWhyKitzeUI } from "@/components/SectionWhyKitzeUI";
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
          <SectionWelcome />
          <Separator className="my-8" />
          <Sponsors />
          <Separator className="my-8" />
          <SectionComponentTypes />
          <Separator className="my-8" />
          <SectionWhyKitzeUI />
        </div>
      </div>
    </>
  );
}
