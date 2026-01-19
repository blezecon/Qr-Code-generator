"use client";

import { Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-24 border-t border-border/40">
      <div className="wrapper px-12 py-8">
        <div className="text-center">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} QR Workspace. All rights reserved.
          </div>
          <a
            href="https://github.com/blezecon/Qr-Code-generator"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-1 text-muted-foreground hover:text-foreground transition "
          >
            <Github className="h-4 w-4 inline" />
            <span>Built by Blezecon</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
