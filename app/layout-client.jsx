'use client';

import Aurora from "@/components/Aurora";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLenis } from "@/lib/useLenis";

export default function RootLayoutClient({ children, className }) {
  useLenis();

  return (
    <body className={className}>
      <div className="fixed inset-0 top-0 z-[-1] min-h-screen"> 
        <Aurora
          colorStops={["#2054ff", "#b51fe0", "#3910f2"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      <Navbar />
      {children}
      <Footer />
    </body>
  );
}
