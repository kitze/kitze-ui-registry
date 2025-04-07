import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Toaster } from "sonner";
import { ThemeWrapper } from "./ThemeWrapper";
import ClientLayout from "./ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kitze UI",
  description: "Set of shadcn compatible components for your next project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeWrapper>
          <ClientLayout>{children}</ClientLayout>
        </ThemeWrapper>
        <Toaster position="bottom-right" />
        <Script
          src="https://umami.server.kitze.io/script.js"
          data-website-id="7fb6209a-29cb-4e2c-81af-5bfbdc45b418"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
