# Cookie QR

A modern, open-source, web-based tool for generating customizable QR codes. Cookie QR focuses on simplicity, performance, and clean UI, allowing users to generate and export QR codes quickly without unnecessary complexity or friction.

## Features

- **QR Code Generation** – Generate QR codes from any text or URL using the goQR public API
- **Color Customization** – Customize foreground and background colors with an intuitive color picker
- **Size Selection** – Choose from multiple QR code sizes (128×128, 256×256, 512×512, and more)
- **Multiple Export Formats** – Download QR codes as PNG or SVG
- **Client-Side Processing** – All interactions happen in your browser; no server uploads
- **Privacy-Friendly** – No user accounts, no tracking, no data collection
- **Open-Source** – MIT License; free to use, modify, and distribute

## Tech Stack

- **[Next.js](https://nextjs.org/)** – React framework with App Router for building the web application
- **[React](https://react.dev/)** – UI library for building interactive components
- **[Tailwind CSS](https://tailwindcss.com/)** – Utility-first CSS framework for styling
- **[shadcn/ui](https://ui.shadcn.com/)** – High-quality, accessible React components
- **[React Bits](https://reactbits.dev/)** – Good, Unique, accessible React components
- **[lucide-react](https://lucide.dev/)** – Beautiful, consistent icon library
- **[Lenis](https://lenis.studiofreight.com/)** – Smooth scrolling experience
- **[react-colorful](https://omgovich.github.io/react-colorful/)** – Lightweight, accessible color picker

## QR Code Generation

Cookie QR uses the **[goQR public API](https://goqr.me/api/)** to generate QR codes. The API endpoint accepts your input parameters and returns a QR code image in your requested format.

**Supported Formats:**
- PNG (raster image)
- SVG (vector image)

**Privacy & Data:**
- The project does not store any user data
- QR code generation requests are made directly to the goQR API
- No tracking or analytics are collected

## Getting Started

### Prerequisites

- **Node.js** (LTS version recommended)
- **npm**, **pnpm**, or **yarn** package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/cookie-qr.git
   cd cookie-qr
   ```

2. Install dependencies:
   ```bash
   pnpm install
   # or: npm install / yarn install
   ```

### Running Locally

Start the development server:

```bash
pnpm dev
# or: npm run dev / yarn dev
```

Open your browser and navigate to:

```
http://localhost:3000
```

The application will automatically reload as you make changes.

## Project Structure

```
cookie-qr/
├── app/
│   ├── globals.css           # Global styles
│   ├── layout.jsx            # Root layout
│   ├── layout-client.jsx     # Client-side layout
│   └── page.jsx              # Home page
├── components/
│   ├── AboutPage.jsx         # About section
│   ├── Aurora.jsx            # Aurora background component
│   ├── Footer.jsx            # Footer component
│   ├── Hero.jsx              # Hero section
│   ├── Navbar.jsx            # Navigation bar
│   ├── WorkSpace.jsx         # Main QR generator interface
│   └── ui/
│       ├── button.jsx        # Button component (shadcn/ui)
│       └── colorPicker.jsx   # Color picker component
├── lib/
│   ├── useLenis.js           # Lenis smooth scrolling hook
│   └── utils.js              # Utility functions
├── public/                    # Static assets
├── package.json              # Dependencies and scripts
├── next.config.mjs           # Next.js configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── postcss.config.mjs        # PostCSS configuration
└── README.md                 # This file
```

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---
