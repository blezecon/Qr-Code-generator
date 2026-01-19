import { Github, Info } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-24 border-t border-border/40">
      <div className="wrapper px-12 py-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Left */}
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} QR Workspace. All rights reserved.
          </div>

          {/* Center */}
          <div className="flex items-center gap-4 text-sm">
            <a
              href="/about"
              className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition"
            >
              <Info className="h-4 w-4" />
              About
            </a>

            <a
              href="https://github.com/blezecon"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </div>

          {/* Right */}
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            Built by blezecon
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
