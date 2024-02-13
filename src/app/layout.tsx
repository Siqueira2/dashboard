import type { Metadata } from "next";
import "./globals.css";

import Theme from "@/context/themeContext";
import { GlobalProvider } from "@/context/globalContext";

import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Generated by create next app",
};

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
        <GlobalProvider>
          <Theme>
            <Navbar />

            <main className="px-10 py-10 ml-16 h-full">{children}</main>
          </Theme>
        </GlobalProvider>
      </body>
    </html>
  );
}
