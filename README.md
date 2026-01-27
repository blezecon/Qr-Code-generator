# Cookie QR

A modern, open-source, web-based tool for generating custom QR codes from images and text. Cookie QR focuses on simplicity, performance, and clean UI, allowing users to convert images (up to 30MB) and text to QR codes instantly without signup, tracking, or unnecessary complexity.

## Preview
<p>
  <img
    src="https://i.postimg.cc/9fY20Jh6/Screenshot-20260119-203251.png"
    alt="Cookie QR Workspace"
    width="720"
  />
</p>

## Features

- **Image to QR Code** – Convert images (up to 30MB) to QR codes with automatic hosting via ImgBB API
- **Text to QR Code** – Generate QR codes from any text, URL, or link instantly
- **Color Customization** – Customize foreground and background colors with an intuitive color picker
- **Size Selection** – Choose from multiple QR code resolutions (150×150, 250×250, 500×500, 750×750, 1000×1000)
- **Multiple Export Formats** – Download QR codes as PNG or SVG
- **Privacy-Friendly** – No user accounts, no signup required, no tracking, no data collection
- **Browser-Based Processing** – All QR generation happens directly in your browser for maximum privacy
- **Open-Source** – MIT License; free to use, modify, and distribute
- **Responsive Design** – Works seamlessly on desktop, tablet, and mobile devices
- **Interactive FAQ** – Comprehensive answers to common questions about QR code generation


## Tech Stack

- **[Next.js](https://nextjs.org/)** – React framework with App Router and React Compiler enabled
- **[React](https://react.dev/)** – UI library for building interactive components
- **[Tailwind CSS](https://tailwindcss.com/)** – Utility-first CSS framework for styling
- **[shadcn/ui](https://ui.shadcn.com/)** – High-quality, accessible React components
- **[lucide-react](https://lucide.dev/)** – Beautiful, consistent icon library
- **[Lenis](https://lenis.studiofreight.com/)** – Smooth scrolling experience
- **[react-colorful](https://omgovich.github.io/react-colorful/)** – Lightweight, accessible color picker
- **[OGL](https://github.com/oframe/ogl)** – Minimal WebGL library for Aurora background effect
- **[ImgBB API](https://api.imgbb.com/)** – Image hosting service for image-to-QR feature

## QR Code Generation

Cookie QR uses the **[QR Server API](https://goqr.me/api/)** to generate QR codes and **[ImgBB API](https://api.imgbb.com/)** for image hosting.

### Text to QR
- Enter any text, URL, or link
- QR code generates instantly in your browser
- Customize colors and size
- Download as PNG or SVG

### Image to QR
- Upload images up to 30MB
- Image is securely hosted on ImgBB (180-day expiration)
- QR code links to the hosted image URL
- Perfect for sharing photos, artwork, or graphics

**Supported Formats:**
- PNG (raster image, ideal for digital use)
- SVG (vector image, perfect for print and scaling)

**Privacy & Data:**
- Text QR codes are generated client-side
- Images are hosted temporarily on ImgBB (180 days)
- No user data is stored by Cookie QR
- No tracking or analytics are collected

## Getting Started

### Prerequisites

- **Node.js** (LTS version recommended)
- **npm**, **pnpm**, or **yarn** package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/blezecon/Qr-Code-generator.git
   cd cookie-qr
   ```

2. Install dependencies:
   ```bash
   pnpm install
   # or: npm install / yarn install
   ```

3. Set up environment variables (for image upload feature):
   ```bash
   # Create a .env.local file in the root directory
   IMGBB_API_KEY=your_imgbb_api_key_here
   ```
   
   Get your free ImgBB API key at [https://api.imgbb.com/](https://api.imgbb.com/)

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
│   ├── globals.css           # Global styles and Tailwind configuration
│   ├── layout.jsx            # Root layout with metadata and SEO
│   ├── layout-client.jsx     # Client-side layout with Aurora background
│   ├── page.jsx              # Home page with all sections
│   └── api/
│       └── upload/
│           └── route.js      # Image upload API endpoint
├── components/
│   ├── AboutPage.jsx         # About section
│   ├── Aurora.jsx            # WebGL Aurora background effect
│   ├── FAQ.jsx               # Frequently Asked Questions section
│   ├── Footer.jsx            # Footer component
│   ├── Hero.jsx              # Hero section
│   ├── Navbar.jsx            # Navigation bar with smooth scroll
│   ├── WorkSpace.jsx         # Main QR generator interface (Text + Image modes)
│   └── ui/
│       ├── button.jsx        # Button component (shadcn/ui)
│       └── colorPicker.jsx   # Color picker component
├── lib/
│   ├── useLenis.js           # Lenis smooth scrolling hook
│   └── utils.js              # Utility functions (cn helper)
├── public/                    # Static assets (robots.txt, sitemap.xml)
├── package.json              # Dependencies and scripts
├── next.config.mjs           # Next.js configuration with React Compiler
├── components.json           # shadcn/ui configuration
├── postcss.config.mjs        # PostCSS configuration
└── README.md                 # This file
```

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

## Links

- **[Live Demo](https://cookieqr.vercel.app/)** – Try Cookie QR now
- **[GitHub Repository](https://github.com/blezecon/Qr-Code-generator)** – View the source code
- **[Old Cookie QR (v1)](https://cookieqr.xo.je/)** – Previous version

---

Built by [Blezecon](https://github.com/blezecon) with ❤️
