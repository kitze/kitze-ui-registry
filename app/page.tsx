"use client";
import * as React from "react";
import { KitzeUIProvider } from "@/registry/new-york/KitzeUIContext/KitzeUIContext";
import { useMedia } from "use-media";
import { AlertProvider } from "@/registry/new-york/ui-alert";
import { Header } from "@/components/Header";
import { PageContent } from "@/components/PageContent";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { AppSidebar } from "@/components/app-sidebar";

export default function Home() {
  const isMobile = useMedia({ maxWidth: 768 });

  return (
    <KitzeUIProvider isMobile={isMobile}>
      <AlertProvider>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <header className="flex h-16 shrink-0 items-center gap-2 border-b">
              <div className="flex items-center gap-2 px-3">
                <SidebarTrigger />
                <Separator orientation="vertical" className="mr-2 h-4" />
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem className="hidden md:block">
                      <BreadcrumbLink href="#">Kitze UI</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="hidden md:block" />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Components</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            </header>
            <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
              <Header />
              <PageContent />
            </div>
          </SidebarInset>
        </SidebarProvider>
      </AlertProvider>
    </KitzeUIProvider>
  );
}
