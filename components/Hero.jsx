'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowUpRight, Compass, Github } from "lucide-react";
import { scrollTo } from "@/lib/useLenis";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-start justify-center overflow-hidden">
      {/* Top offset to account for navbar + visual balance */}
      <div className="wrapper w-full pt-32 sm:pt-36 lg:pt-40 px-12">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Hi, I&apos;m Blezecon.
            <br className="hidden sm:block" />I Build Simple, Useful Tools
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            This QR Code Generator is a lightweight, privacy-friendly project
            built to create, scan, and share QR codes instantly. No accounts, no
            tracking, no unnecessary complexity—just fast tools that work
            directly in your browser.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="px-8 text-base shadow-lg" onClick={() => scrollTo('#workspace')}>
              <Compass className="size-5" />
              Workspace
            </Button>

            <Button
              asChild
              size="lg"
              variant="secondary"
              className="px-8 text-base shadow-lg"
            >
              <Link
                href="https://github.com/blezecon/Qr-Code-generator"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="size-5" />
                GitHub
                <ArrowUpRight className="size-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
