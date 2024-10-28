import React from "react";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "../styles/globals.css";

import { cn } from '@/lib/utils';
import {ThemeProvider} from "next-themes";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: "Elaka Care",
  description: "Promouvoir la santé et le bien-être de nos proches",
  icons: {
    icon: "/assets/icons/logo-icon.svg",
  },
};

export default function RootLayout({children,}:
    Readonly<{ children: React.ReactNode; }>) {
  return (
      <html lang="fr" suppressHydrationWarning>
      <body
          className={cn(
              "min-h-screen bg-dark-300 font-sans antialiased",
              fontSans.variable
          )}
      >
      <ThemeProvider
          attribute="class"
          defaultTheme="dark"
      >
        {children}
      </ThemeProvider>
      </body>
      </html>
  );
}
