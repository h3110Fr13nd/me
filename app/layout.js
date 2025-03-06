"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "./layout-wrapper";
import { metadata as baseMetadata } from "./metadata";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

// export const metadata = baseMetadata;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
