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
  metadataBase: new URL("https://cookieqr.vercel.app"),
  title: "Cookie QR - Free Image to QR & Text to QR Generator | Up to 30MB",
  description:
    "Free online QR code generator to convert images to QR codes (up to 30MB) and text to QR codes instantly. No signup required. Create custom, colorful QR codes with PNG/SVG export. Privacy-friendly, browser-based, and open-source.",
  keywords: [
    "Cookie QR",
    "cookieqr",
    "cookie qr generator",
    "cookieqr.vercel.app",
    "free qr code generator",
    "image to qr",
    "text to qr",
    "qr code maker",
    "custom qr code",
    "30mb image qr",
    "free image to qr",
    "qr code converter",
    "colorful qr code",
    "png qr code",
    "svg qr code",
    "no signup qr generator",
    "privacy qr code",
    "online qr generator",
    "url to qr",
    "link to qr code"
  ],
  alternates: {
    canonical: "https://cookieqr.vercel.app"
  },
  authors: [{ name: "Cookie QR" }],
  creator: "Cookie QR",
  publisher: "Cookie QR",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cookieqr.vercel.app",
    title: "Cookie QR - Free Image to QR & Text to QR Generator",
    description:
      "Generate QR codes from images (up to 30MB) and text for free. No signup, no tracking. Export as PNG or SVG. Privacy-friendly and open-source.",
    siteName: "Cookie QR",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cookie QR - Free QR Code Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookie QR - Free Image to QR & Text to QR Generator",
    description:
      "Generate QR codes from images (up to 30MB) and text for free. No signup, no tracking. Export as PNG or SVG.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  const className = `${geistSans.variable} ${geistMono.variable} antialiased`;

  // JSON-LD Structured Data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "@id": "https://cookieqr.vercel.app/#webapp",
        "name": "Cookie QR",
        "url": "https://cookieqr.vercel.app",
        "description": "Free online QR code generator to convert images to QR codes (up to 30MB) and text to QR codes instantly. No signup required.",
        "applicationCategory": "UtilitiesApplication",
        "operatingSystem": "Any",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "featureList": [
          "Convert images to QR codes (up to 30MB)",
          "Convert text and URLs to QR codes",
          "Custom color QR codes",
          "Export as PNG or SVG",
          "No signup or account required",
          "Privacy-friendly with no tracking",
          "Browser-based processing"
        ]
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://cookieqr.vercel.app/#software",
        "name": "Cookie QR - Free QR Code Generator",
        "applicationCategory": "DesignApplication",
        "operatingSystem": "Web Browser",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5",
          "ratingCount": "1"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://cookieqr.vercel.app/#organization",
        "name": "Cookie QR",
        "url": "https://cookieqr.vercel.app",
        "logo": {
          "@type": "ImageObject",
          "url": "https://cookieqr.vercel.app/logo.png"
        },
        "sameAs": [
          "https://github.com/yourusername/cookie-qr"
        ]
      }
    ]
  };

  return (
    // dont use light theme light theme is broken
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <RootLayoutClient className={className}>{children}</RootLayoutClient>
    </html>
  );
}
