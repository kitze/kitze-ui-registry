"use client";

import React from "react";
import { useMedia } from "use-media";
import { KitzeUIProvider } from "@/registry/new-york/kitze-ui-context/KitzeUIContext";
import { AlertProvider } from "@/registry/new-york/ui-alert";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isMobile = useMedia({ maxWidth: 768 });

  return (
    <KitzeUIProvider isMobile={isMobile}>
      <AlertProvider>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>{children}</SidebarInset>
        </SidebarProvider>
      </AlertProvider>
    </KitzeUIProvider>
  );
}
