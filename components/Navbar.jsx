"use client";

import { Banana, Home, Compass, Info } from "lucide-react";
import { scrollTo } from "@/lib/useLenis";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-gray-200 backdrop-blur supports-backdrop-filter:bg-black/20 text-foreground">
      <div className="wrapper px-12">
        <div className="flex h-16 items-center justify-between">
          <div className="flex gap-2">
            <Banana />
            <span>Banana QR</span>
          </div>
          <nav className="flex items-center gap-1">
            <button
              onClick={() => scrollTo("#home")}
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover:bg-muted/50"
            >
              <Home className="size-4" />
              <span>Home</span>
            </button>

            <button
              onClick={() => scrollTo("#about")}
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover:bg-muted/50"
            >
              <Info className="size-4" />
              <span>About</span>
            </button>

            <button
              onClick={() => scrollTo("#workspace")}
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover:bg-muted/50"
            >
              <Compass className="size-4" />
              <span>WorkSpace</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
