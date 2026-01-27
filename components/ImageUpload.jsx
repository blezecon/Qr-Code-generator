"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Upload, X, AlertCircle, CheckCircle, Loader2 } from "lucide-react";

const ImageUpload = () => {
  const [uploadState, setUploadState] = useState("idle"); // idle, loading, success, error
  const [uploadedImage, setUploadedImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [dragActive, setDragActive] = useState(false);

  const MAX_FILE_SIZE = 30 * 1024 * 1024; // 30MB

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
      setErrorMessage(`File size exceeds 30MB limit (${(file.size / (1024 * 1024)).toFixed(2)}MB)`);
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

      // Extract image data from imgbb response
      const imageData = {
        url: data.data.url,
        displayUrl: data.data.display_url,
        thumbUrl: data.data.thumb.url,
        id: data.data.id,
        size: file.size,
        uploadedAt: new Date(),
        deleteIn: "180 days",
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

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const file = e.dataTransfer.files?.[0];
    if (file) {
      uploadImage(file);
    }
  };

  const resetUpload = () => {
    setUploadState("idle");
    setUploadedImage(null);
    setErrorMessage("");
  };

  return (
    <div className="space-y-6">
      {/* Upload Area or Success State */}
      {uploadState !== "success" ? (
        <div
          className={`rounded-xl backdrop-blur supports-backdrop-filter:bg-black/20 p-6 shadow-lg ${
            dragActive ? "bg-muted/50 border-2 border-foreground" : ""
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <h2 className="mb-6 text-sm font-semibold">Upload Image</h2>

          <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/20 bg-background p-8 transition-all">
            {uploadState === "loading" ? (
              <div className="flex flex-col items-center gap-3">
                <Loader2 className="h-10 w-10 animate-spin text-foreground" />
                <p className="text-sm font-medium">Uploading...</p>
              </div>
            ) : (
              <>
                <Upload className="mb-3 h-8 w-8 text-muted-foreground" />
                <p className="mb-1 text-center text-sm font-medium">
                  Drag and drop your image here
                </p>
                <p className="mb-4 text-xs text-muted-foreground">
                  or click to select (max 30MB)
                </p>

                <label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileSelect}
                    disabled={uploadState === "loading"}
                    className="hidden cursor-pointer"
                  />
                  <Button
                    asChild
                    className="cursor-pointer"
                    disabled={uploadState === "loading"}
                  >
                    <span>Select Image</span>
                  </Button>
                </label>
              </>
            )}
          </div>

          {/* Error State */}
          {uploadState === "error" && errorMessage && (
            <div className="mt-4 flex items-start gap-3 rounded-lg bg-destructive/10 p-4">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
              <div className="flex-1">
                <p className="text-sm font-medium text-destructive">
                  Upload Failed
                </p>
                <p className="text-xs text-destructive/80">{errorMessage}</p>
              </div>
              <button
                onClick={resetUpload}
                className="text-destructive/80 hover:text-destructive"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      ) : null}

      {/* Success State - Display Uploaded Image */}
      {uploadState === "success" && uploadedImage && (
        <div className="space-y-4">
          {/* Success Message */}
          <div className="flex items-center gap-3 rounded-lg bg-green-500/10 p-4">
            <CheckCircle className="h-5 w-5 shrink-0 text-green-600" />
            <div className="flex-1">
              <p className="text-sm font-medium text-green-700">
                Image uploaded successfully!
              </p>
              <p className="text-xs text-green-600">
                Will be automatically deleted after 180 days
              </p>
            </div>
          </div>

          {/* Image Preview Card */}
          <div className="rounded-xl backdrop-blur supports-backdrop-filter:bg-black/20 p-6 shadow-lg">
            <h2 className="mb-4 text-sm font-semibold">Uploaded Image</h2>

            <div className="mb-4 flex justify-center rounded-lg border border-border bg-background p-4">
              <Image
                src={uploadedImage.displayUrl}
                alt="Uploaded image"
                width={300}
                height={300}
                className="max-h-96 w-auto rounded-lg"
              />
            </div>

            {/* Image Metadata */}
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">File Size:</span>
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
              <div className="flex justify-between">
                <span className="text-muted-foreground">Auto-Delete:</span>
                <span className="font-medium">{uploadedImage.deleteIn}</span>
              </div>

              {/* Image URL */}
              <div className="mt-4 space-y-2">
                <label className="text-xs text-muted-foreground">Image URL:</label>
                <input
                  type="text"
                  value={uploadedImage.url}
                  readOnly
                  className="w-full rounded-md border bg-background px-3 py-2 text-xs font-mono"
                />
              </div>
            </div>

            {/* Clear Button */}
            <Button
              onClick={resetUpload}
              variant="secondary"
              className="mt-4 w-full cursor-pointer"
            >
              Upload Another Image
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
