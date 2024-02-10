"use client";

import { ThemeProvider } from "next-themes";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export default function Theme({ children }: ThemeProviderProps) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
