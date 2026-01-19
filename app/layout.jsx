import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import RootLayoutClient from "./layout-client";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Cookie QR",
  description:
    "Cookie QR is a lightweight, privacy-friendly project built to create, scan, and download colorful QR codes instantly. No accounts, no tracking, no unnecessary complexity—just fast tools that work directly in your browser.",
};

export default function RootLayout({ children }) {
  const className = `${geistSans.variable} ${geistMono.variable} antialiased`;

  return (
    // dont use light theme light theme is broken
    <html lang="en" className="dark">
      <RootLayoutClient className={className}>{children}</RootLayoutClient>
    </html>
  );
}
