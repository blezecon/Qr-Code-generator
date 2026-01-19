import { Code, Layers, Palette, Zap, Info } from "lucide-react";

const AboutPage = () => {
  return (
    <section className="min-h-screen flex justify-center items-start pt-24">
      <div className="wrapper px-12 ">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              About
            </h1>
          </div>

          <p className="text-muted-foreground text-lg leading-relaxed">
            QR Workspace is a modern, web-based tool for generating customizable
            QR codes. It focuses on simplicity, performance, and clean UI,
            allowing users to generate and export QR codes quickly without
            unnecessary complexity.
          </p>
        </div>

        {/* About the Website */}
        <div className="mb-12 space-y-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Zap className="h-5 w-5 text-muted-foreground" />
            What is QR Workspace?
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            QR Workspace is designed as a lightweight QR code generator where
            users can control content, resolution, foreground and background
            colors, and export the result in PNG or SVG formats. The goal is to
            provide a fast and distraction-free experience with a polished,
            dashboard-style interface.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            The project emphasizes good UI structure, predictable state
            management, and a clean separation of concerns, making it both
            user-friendly and developer-friendly.
          </p>
        </div>

        {/* Tools Used */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Layers className="h-5 w-5 text-muted-foreground" />
            Tools & Technologies Used
          </h2>

          <ul className="space-y-4 text-muted-foreground">
            <li className="flex items-start gap-3">
              <Code className="h-5 w-5 mt-1" />
              <span>
                <strong>Next.js</strong> — Used as the core framework for routing,
                rendering, and overall application structure, enabling a modern
                React-based architecture.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <Palette className="h-5 w-5 mt-1" />
              <span>
                <strong>Tailwind CSS</strong> — Provides utility-first styling,
                allowing rapid UI development with consistent spacing,
                typography, and responsive design.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <Layers className="h-5 w-5 mt-1" />
              <span>
                <strong>shadcn/ui</strong> — Used for reusable, accessible UI
                primitives such as buttons and form elements, built on top of
                Tailwind CSS.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <Zap className="h-5 w-5 mt-1" />
              <span>
                <strong>lucide-react</strong> — Supplies a clean, consistent icon
                set that integrates seamlessly with the design system.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <Zap className="h-5 w-5 mt-1" />
              <span>
                <strong>Lenis</strong> — Adds smooth scrolling behavior for a
                more refined and fluid user experience across the application.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
