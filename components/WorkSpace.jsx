"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ColorPicker from "@/components/ui/colorPicker";

const WorkSpace = () => {
  const [text, setText] = useState("");
  const [size, setSize] = useState("256x256");
  const [fg, setFg] = useState("#ff00ff");
  const [bg, setBg] = useState("#00aaff");

  // 🔑 Always derive URLs from CURRENT state
  const buildQrUrls = () => {
    if (!text) return null;

    const baseParams = `size=${size}&data=${encodeURIComponent(
      text
    )}&color=${fg.replace("#", "")}&bgcolor=${bg.replace("#", "")}`;

    return {
      png: `https://api.qrserver.com/v1/create-qr-code/?${baseParams}`,
      svg: `https://api.qrserver.com/v1/create-qr-code/?${baseParams}&format=svg`,
    };
  };

  const downloadPNG = async () => {
    const urls = buildQrUrls();
    if (!urls) return;

    const res = await fetch(urls.png);
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `qr-${size}.png`;
    a.click();

    URL.revokeObjectURL(url);
  };

  const downloadSVG = async () => {
    const urls = buildQrUrls();
    if (!urls) return;

    const res = await fetch(urls.svg);
    const svgText = await res.text();
    const blob = new Blob([svgText], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `qr-${size}.svg`;
    a.click();

    URL.revokeObjectURL(url);
  };

  const urls = buildQrUrls();
  const [w, h] = size.split("x").map(Number);

  return (
    <section id="workspace" className="min-h-screen flex justify-center items-center">
      <div className="wrapper px-12 ">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            WorkSpace
          </h1>
          <p className="text-muted-foreground text-lg">
            Design and export high-quality QR codes for various use cases with
            ease.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* ================= CONTROLS ================= */}
          <section className="rounded-xl backdrop-blur supports-backdrop-filter:bg-black/20 p-6 shadow-lg space-y-6">
            <h2 className="text-sm font-semibold">Controls Panel</h2>

            {/* Target Content */}
            <div>
              <label className="block mb-2 text-xs text-muted-foreground">
                Target Content
              </label>
              <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="https://example.com"
                className="w-full rounded-md border bg-background px-3 py-2 text-sm"
              />
            </div>

            {/* Resolution */}
            <div>
              <label className="block mb-2 text-xs text-muted-foreground">
                Resolution
              </label>
              <select
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className="w-full rounded-md border bg-background px-3 py-2 text-sm"
              >
                <option value="128x128">128 x 128 px</option>
                <option value="256x256">256 x 256 px</option>
                <option value="512x512">512 x 512 px</option>
              </select>
            </div>

            {/* Colors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ColorPicker
                label="Foreground"
                value={fg}
                onChange={setFg}
              />
              <ColorPicker
                label="Background"
                value={bg}
                onChange={setBg}
              />
            </div>
          </section>

          {/* ================= PREVIEW ================= */}
          <section className="rounded-xl backdrop-blur supports-backdrop-filter:bg-black/20 p-6 shadow-lg flex flex-col">
            <h2 className="mb-4 text-sm font-semibold">Preview</h2>

            <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed bg-background p-6">
              {urls ? (
                <Image
                  src={urls.png}
                  alt="QR Code"
                  width={w}
                  height={h}
                  unoptimized
                />
              ) : (
                <span className="text-xs text-muted-foreground">
                  Enter content to generate QR
                </span>
              )}
            </div>

            <div className="mt-4 flex gap-3">
              <Button
                onClick={downloadPNG}
                disabled={!urls}
                className="flex-1"
              >
                PNG
              </Button>

              <Button
                onClick={downloadSVG}
                variant="secondary"
                disabled={!urls}
                className="flex-1"
              >
                SVG
              </Button>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default WorkSpace;
