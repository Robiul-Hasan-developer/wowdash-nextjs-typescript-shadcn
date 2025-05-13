// import { ReactNode } from "react";
// import "../globals.css";

// export default function AuthLayout({ children }: { children: ReactNode }) {
//   return (
//     <html lang="en">
//       <body className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-900">
//         <main className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
//           {children}
//         </main>
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wowdash - Next Js, TypeScript, ShadCn UI & Tailwind Admin Dashboard",
  description:
    "WowDash - Admin Dashboard Multipurpose Next.js, TypeScript, ShadCn UI & Tailwind Template",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen">{children}</main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

// suppressHydrationWarning
