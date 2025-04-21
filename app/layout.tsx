import type { Metadata } from "next";
import { AppSidebar } from "@/components/app-sidebar"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

import { Inter } from 'next/font/google'
import "./globals.css";
import Header from "@/components/layout/header";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Wowdash - Tailwind CSS Admin Dashboard HTML Template",
  description: "WowDash - Admin Dashboard Multipurpose Next.js, TypeScript, ShadCn UI & Tailwind Template",
  icons: {
    icon: "/assets/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
          <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
             <SidebarProvider>
              <AppSidebar />
              <main className="grow-[1]">
                <SidebarInset>
                  <Header/>
                </SidebarInset>
                <div className=" bg-neutral-50 p-0 lg:p-6 h-full">
                  {children}
                </div>
              </main>
            </SidebarProvider>
          </ThemeProvider>
      </body>
    </html>
  );
}
