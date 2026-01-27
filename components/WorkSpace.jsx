"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ColorPicker from "@/components/ui/colorPicker";
import { CloudDownload, Upload, AlertCircle, Loader2 } from "lucide-react";

const WorkSpace = () => {
  const [mode, setMode] = useState("text"); // "text" or "image"
  const [text, setText] = useState("");
  const [size, setSize] = useState("256x256");
  const [fg, setFg] = useState("#000000");
  const [bg, setBg] = useState("#ffffff");

  // Image upload states
  const [uploadState, setUploadState] = useState("idle");
  const [uploadedImage, setUploadedImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const MAX_FILE_SIZE = 30 * 1024 * 1024; // 30MB

  // 🔑 Always derive URLs from CURRENT state
  const buildQrUrls = () => {
    if (!text) return null;

    const baseParams = `size=${size}&data=${encodeURIComponent(
      text,
    )}&color=${fg.replace("#", "")}&bgcolor=${bg.replace("#", "")}`;

    return {
      png: `https://api.qrserver.com/v1/create-qr-code/?${baseParams}&ecc=Q&qzone=4`,
      svg: `https://api.qrserver.com/v1/create-qr-code/?${baseParams}&format=svg&ecc=Q&qzone=4`,
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

  // Image upload functions
  const validateFile = (file) => {
    if (!file) {
      setErrorMessage("No file selected");
      return false;
    }

    if (!file.type.startsWith("image/")) {
      setErrorMessage("Please select a valid image file");
      return false;
    }

    if (file.size > MAX_FILE_SIZE) {
      setErrorMessage(
        `File size exceeds 30MB limit (${(file.size / (1024 * 1024)).toFixed(2)}MB)`,
      );
      return false;
    }

    return true;
  };

  const uploadImage = async (file) => {
    if (!validateFile(file)) {
      setUploadState("error");
      return;
    }

    try {
      setUploadState("loading");
      setErrorMessage("");

      const formData = new FormData();
      formData.append("image", file);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Upload failed");
      }

      const data = await response.json();

      const imageData = {
        url: data.data.url,
        displayUrl: data.data.display_url,
        id: data.data.id,
        size: file.size,
        uploadedAt: new Date(),
      };

      setUploadedImage(imageData);
      setUploadState("success");
    } catch (error) {
      console.error("Upload error:", error);
      setErrorMessage(error.message || "Upload failed. Please try again.");
      setUploadState("error");
    }
  };

  const handleFileSelect = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      uploadImage(file);
    }
  };

  const resetUpload = () => {
    setUploadState("idle");
    setUploadedImage(null);
    setErrorMessage("");
  };

  const urls = buildQrUrls();
  const [w, h] = size.split("x").map(Number);

  return (
    <section
      id="workspace"
      className="min-h-screen flex justify-center items-center"
    >
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

            {/* Mode Selector */}
            <div>
              <label className="block mb-2 text-xs text-muted-foreground">
                Mode
              </label>
              <div className="grid grid-cols-2 gap-2">
                <Button
                  onClick={() => setMode("text")}
                  variant={mode === "text" ? "default" : "secondary"}
                  className="cursor-pointer"
                >
                  Text
                </Button>
                <Button
                  onClick={() => setMode("image")}
                  variant={mode === "image" ? "default" : "secondary"}
                  className="cursor-pointer"
                >
                  Image
                </Button>
              </div>
            </div>

            {/* Text Mode Controls */}
            {mode === "text" && (
              <>
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
                  <ColorPicker label="Foreground" value={fg} onChange={setFg} />
                  <ColorPicker label="Background" value={bg} onChange={setBg} />
                </div>
              </>
            )}

            {/* Image Mode Controls */}
            {mode === "image" && (
              <>
                {uploadState === "idle" || uploadState === "error" ? (
                  <div>
                    <label className="block mb-2 text-xs text-muted-foreground">
                      Upload Image (max 30MB)
                    </label>
                    <label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileSelect}
                        disabled={uploadState === "loading"}
                        className="hidden"
                      />
                      <Button
                        asChild
                        className="w-full cursor-pointer"
                        disabled={uploadState === "loading"}
                      >
                        <span>
                          <Upload className="h-4 w-4 mr-2" />
                          Select Image
                        </span>
                      </Button>
                    </label>
                  </div>
                ) : null}

                {uploadState === "loading" && (
                  <div className="flex flex-col items-center gap-3 p-8">
                    <Loader2 className="h-10 w-10 animate-spin text-foreground" />
                    <p className="text-sm font-medium">Uploading...</p>
                  </div>
                )}

                {uploadState === "success" && uploadedImage && (
                  <div className="space-y-4">
                    <div className="rounded-lg bg-green-500/10 p-4">
                      <p className="text-sm font-medium text-green-700">
                        Upload successful!
                      </p>
                      <p className="text-xs text-green-600 mt-1">
                        Auto-deletes in 180 days
                      </p>
                    </div>

                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Size:</span>
                        <span className="font-medium">
                          {(uploadedImage.size / (1024 * 1024)).toFixed(2)} MB
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Uploaded:</span>
                        <span className="font-medium">
                          {uploadedImage.uploadedAt.toLocaleString()}
                        </span>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs text-muted-foreground">
                          Image URL:
                        </label>
                        <input
                          type="text"
                          value={uploadedImage.url}
                          readOnly
                          className="w-full rounded-md border bg-background px-3 py-2 text-xs font-mono"
                        />
                      </div>
                    </div>

                    <Button
                      onClick={resetUpload}
                      variant="secondary"
                      className="w-full cursor-pointer"
                    >
                      Upload Another
                    </Button>
                  </div>
                )}

                {uploadState === "error" && errorMessage && (
                  <div className="mt-4 flex items-start gap-3 rounded-lg bg-destructive/10 p-4">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-destructive">
                        Upload Failed
                      </p>
                      <p className="text-xs text-destructive/80">
                        {errorMessage}
                      </p>
                    </div>
                  </div>
                )}
              </>
            )}
          </section>

          {/* ================= PREVIEW (QR Only) ================= */}
          <section className="rounded-xl backdrop-blur supports-backdrop-filter:bg-black/20 p-6 shadow-lg flex flex-col">
            <h2 className="mb-4 text-sm font-semibold">Preview</h2>

            {mode === "text" && (
              <>
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
                    className="flex-1 cursor-pointer"
                  >
                    PNG
                    <CloudDownload className="h-4 w-4" />
                  </Button>

                  <Button
                    onClick={downloadSVG}
                    variant="secondary"
                    disabled={!urls}
                    className="flex-1 cursor-pointer"
                  >
                    SVG
                    <CloudDownload className="h-4 w-4" />
                  </Button>
                </div>
              </>
            )}

            {mode === "image" && (
              <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed bg-background p-6">
                <span className="text-xs text-muted-foreground">
                  No preview for image uploads
                </span>
              </div>
            )}
          </section>
        </div>
      </div>
    </section>
  );
};

export default WorkSpace;
