import Link from "next/link";
import { Banana, Home, Compass, BadgeInfo } from "lucide-react";
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
            <Link
              href="/"
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover:bg-muted/50"
            >
              <Home className="size-4" />
              <span>Home</span>
            </Link>

            <Link
              href="/workspace"
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover:bg-muted/50"
            >
              <Compass className="size-4" />
              <span>WorkSpace</span>
            </Link>
            <Link
              href="/workspace"
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover:bg-muted/50"
            >
              <BadgeInfo className="size-4" />
              <span>About</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
