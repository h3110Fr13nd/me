"use client";

import { ThemeProvider } from "@/components/theme-provider";
import NavBar  from "@/components/ui/navbar";
import { AnimatePresence } from "framer-motion";
import { PageTransition } from "@/components/ui/page-transition";
import { usePathname } from "next/navigation";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <NavBar />
      <main className="min-h-screen pt-16">
        <AnimatePresence mode="wait">
          <PageTransition key={pathname}>
            {children}
          </PageTransition>
        </AnimatePresence>
      </main>
    </ThemeProvider>
  );
}