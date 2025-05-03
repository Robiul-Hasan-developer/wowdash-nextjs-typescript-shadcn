import type { Metadata } from "next";
import { cookies } from "next/headers"
import { AppSidebar } from "@/components/app-sidebar"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

import { Inter } from 'next/font/google'
import "./globals.css";
import Header from "@/components/layout/header";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/layout/footer";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true"
  
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
             <SidebarProvider defaultOpen={defaultOpen}>
              <AppSidebar />
              <main className="grow-[1]">
                <SidebarInset>
                  <Header/>
                </SidebarInset>
                <div className="bg-neutral-100 dark:bg-[#1f2937] md:p-6 p-4 min-h-[calc(100% - 300px)]">
                  {children}
                </div>
                <Footer/>
              </main>
            </SidebarProvider>
          </ThemeProvider>
      </body>
    </html>
  );
}
