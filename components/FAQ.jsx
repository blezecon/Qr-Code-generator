"use client";

import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is Cookie QR a free QR code generator?",
      answer:
        "Yes, Cookie QR is completely free to use, open-source, and requires no signup or account creation. Generate unlimited QR codes from text, URLs, or images at no cost.",
    },
    {
      question: "Can I convert text to QR code without creating an account?",
      answer:
        "Absolutely! Simply enter your text or URL in the workspace, and your QR code generates instantly with no registration required. Cookie QR is designed to work without any barriers.",
    },
    {
      question: "How do I create a QR code from an image?",
      answer:
        "Switch to 'Image' mode in the workspace, upload your image (up to 30MB), and Cookie QR will automatically host it and generate a QR code containing the image URL. Perfect for sharing photos, artwork, or graphics.",
    },
    {
      question: "What is the maximum image size I can upload?",
      answer:
        "Cookie QR supports image uploads up to 30MB, making it suitable for high-resolution photos and detailed graphics. This is significantly larger than most free QR generators.",
    },
    {
      question: "Can I export QR codes as PNG or SVG?",
      answer:
        "Yes! You can download your QR codes in both PNG (raster) and SVG (vector) formats. PNG is perfect for digital use, while SVG is ideal for print and scaling without quality loss.",
    },
    {
      question: "Is my data private when generating QR codes?",
      answer:
        "Your privacy is protected. Cookie QR doesn't store your data, track users, or require accounts. All QR code generation happens directly in your browser for maximum privacy and security.",
    },
    {
      question: "Can I customize QR code colors?",
      answer:
        "Yes! Cookie QR includes a color picker for both foreground and background colors, letting you create branded or colorful QR codes that match your design needs.",
    },
    {
      question: "What QR code sizes are available?",
      answer:
        "You can generate QR codes in five resolutions: 150x150px, 250x250px, 500x500px, 750x750px, and 1000x1000px. Choose the size that best matches your quality requirements and use case.",
    },
    {
      question: "Do I need to install anything to use Cookie QR?",
      answer:
        "No installation needed! Cookie QR is a web-based tool that works directly in your browser. Just visit the site and start creating QR codes immediately on any device.",
    },
    {
      question: "Is Cookie QR open source?",
      answer:
        "Yes, Cookie QR is fully open-source under the MIT License. You can view, modify, and contribute to the code on GitHub. We believe in transparency and community collaboration.",
    },
    {
      question: "Can I generate QR codes for URLs and links?",
      answer:
        "Yes! Simply paste any URL or link into the text field in 'Text' mode, and Cookie QR will generate a scannable QR code instantly. Perfect for websites, social media, or any online destination.",
    },
    {
      question: "Does Cookie QR work on mobile devices?",
      answer:
        "Yes, Cookie QR is fully responsive and works seamlessly on smartphones, tablets, and desktop computers. Create and download QR codes on any device with a modern web browser.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="min-h-screen flex justify-center items-center">
      <div className="wrapper px-12">
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about generating QR codes from images
            and text
          </p>
        </div>

        <div className="space-y-4  mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl border border-border/40 backdrop-blur supports-backdrop-filter:bg-black/20 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-4 flex items-center justify-between hover:bg-muted/10 transition"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-base sm:text-lg font-semibold pr-4">
                  {faq.question}
                </h3>
                <span className="text-2xl text-muted-foreground shrink-0">
                  {openIndex === index ? "-" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-muted-foreground">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
