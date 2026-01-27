"use client";

import { useState } from "react";
import { Cookie, Home, Compass, Info, Menu, X } from "lucide-react";
import { scrollTo } from "@/lib/useLenis";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleScroll = (id) => {
    // Apply negative offset for #home to account for navbar height (64px)
    const offset = id === "#home" ? -64 : 0;
    scrollTo(id, { offset });
    setOpen(false); // close menu after click
  };

  return (
    <header className="sticky top-0 z-50 border-gray-200 backdrop-blur supports-backdrop-filter:bg-black/20 text-foreground">
      <div className="wrapper px-12">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleScroll("#home")}
            className="flex items-center gap-2 cursor-pointer"
          >
            <Cookie className="size-9" />
            <span className="text-xl font-bold">Cookie QR</span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            <button
              onClick={() => handleScroll("#home")}
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition hover:bg-muted/50"
            >
              <Home className="size-4" />
              Home
            </button>

            <button
              onClick={() => handleScroll("#about")}
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition hover:bg-muted/50"
            >
              <Info className="size-4" />
              About
            </button>

            <button
              onClick={() => handleScroll("#workspace")}
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition hover:bg-muted/50"
            >
              <Compass className="size-4" />
              WorkSpace
            </button>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-md hover:bg-muted/50 transition"
            aria-label="Open menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur">
          <div className="flex flex-col px-6 py-4 space-y-2">
            <button
              onClick={() => handleScroll("#home")}
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition"
            >
              <Home className="size-4" />
              Home
            </button>

            <button
              onClick={() => handleScroll("#about")}
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition"
            >
              <Info className="size-4" />
              About
            </button>

            <button
              onClick={() => handleScroll("#workspace")}
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition"
            >
              <Compass className="size-4" />
              WorkSpace
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
