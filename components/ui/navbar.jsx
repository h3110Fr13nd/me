"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ModeToggle } from "./mode-toggle"

const NavBar = () => {
  const pathname = usePathname()
  
  const routes = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
    },
    {
      href: "/about",
      label: "About",
      active: pathname === "/about",
    },
    {
      href: "/skills",
      label: "Skills",
      active: pathname === "/skills",
    },
    {
      href: "/projects",
      label: "Projects",
      active: pathname === "/projects",
    },
    {
      href: "/contact",
      label: "Contact",
      active: pathname === "/contact",
    },
  ]

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="glass-effect container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-xl hover-lift">
            Portfolio
          </Link>
          <div className="hidden md:flex space-x-8">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "subtle-link",
                  route.active ? "text-foreground" : "text-foreground/60"
                )}
              >
                {route.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <ModeToggle />
            <MobileNav routes={routes} />
          </div>
        </div>
      </div>
    </nav>
  );
};

function MobileNav({ routes }) {
  return (
    <div className="md:hidden">
      <button 
        className="flex flex-col justify-center items-center h-10 w-10 space-y-1.5 focus:outline-none"
        aria-label="Toggle menu"
        onClick={() => {
          const mobileMenu = document.getElementById("mobile-menu")
          mobileMenu.classList.toggle("hidden")
        }}
      >
        <span className="block h-0.5 w-6 bg-foreground"></span>
        <span className="block h-0.5 w-6 bg-foreground"></span>
        <span className="block h-0.5 w-6 bg-foreground"></span>
      </button>
      <div id="mobile-menu" className="hidden absolute top-16 left-0 w-full border-b border-zinc-200 dark:border-zinc-800 pb-4" style={{ backgroundColor: 'hsl(var(--background))' }}>
        <nav className="flex flex-col px-4 pt-2 space-y-3">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                route.active ? "bg-accent text-accent-foreground" : "hover:bg-accent/50"
              )}
            >
              {route.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default NavBar;