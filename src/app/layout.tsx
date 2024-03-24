import type { Metadata } from "next";

import "./globals.css";

import Theme from "@/context/themeContext";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import Navbar from "@/components/navbar";

export const metadata: Metadata = { title: "Dashboard" };
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="bg-gray-200 text-gray-900 dark:bg-gray-950 dark:text-gray-50 w-screen h-screen"
        suppressHydrationWarning
      >
        <QueryClientProvider client={new QueryClient()}>
          <Theme>
            <Navbar />

            <main className="pl-24 pr-10 py-10 h-full max-w-full overflow-x-hidden">
              {children}
            </main>
          </Theme>
        </QueryClientProvider>
      </body>
    </html>
  );
}
