"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function FormPopUp({
  open = false,
  onClose = () => {},
  imageSrc = "/popup-left.jpg",
  text,
}) {
  const modalRef = useRef(null);
  const overlayRef = useRef(null);

  const [result, setResult] = useState("");

  // Focus trap + ESC close
  useEffect(() => {
    if (open) {
      const t = setTimeout(() => {
        modalRef.current?.querySelector("input, select, button")?.focus();
      }, 80);

      const onKey = (e) => {
        if (e.key === "Escape") onClose();
      };

      document.addEventListener("keydown", onKey);
      return () => {
        clearTimeout(t);
        document.removeEventListener("keydown", onKey);
      };
    }
  }, [open, onClose]);

  if (!open) return null;

  // Web3Forms submit handler
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "6e46627e-66a1-4662-86f6-f25fc529e8b9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Error submitting form");
    }
  };

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6"
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      <div
        ref={modalRef}
        className="
          relative max-w-6xl bg-white rounded-xl shadow-2xl 
          overflow-hidden flex flex-col lg:flex-row 
          align-items-center
          max-h-[70vh] overflow-y-auto
        "
        style={{ maxHeight: 450, alignItems: "center" }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="
            absolute cursor-pointer top-4 
            right-4 md:right-4 
            max-sm:right-2
            z-20 w-8 h-8 rounded-full 
            flex items-center justify-center 
            border border-slate-200 bg-white text-slate-600 
            hover:bg-slate-50
          "
        >
          <svg width="16" height="16" viewBox="0 0 24 24">
            <path
              d="M18 6 L6 18 M6 6 L18 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </button>

        {/* Left image */}
        <div className="hidden overflow-hidden lg:flex lg:w-1/2 bg-white items-center justify-center p-0">
          <div className="w-full">
          <Image
            src={imageSrc}
            alt="Promo"
            width={480}
            height={300}
            className="h-auto object-cover"
            />
          </div>
        </div>

        {/* Right Form */}
        <div className="w-full lg:w-1/2 px-8 py-12 lg:px-12 lg:py-10">
          <h3 className="text-2xl font-semibold text-slate-900 mb-6 text-center">
            {text}
          </h3>

          <form className="flex flex-col gap-5" onSubmit={onSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="w-full text-black border-b border-slate-200 py-3 placeholder:text-slate-400 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full text-black border-b border-slate-200 py-3 placeholder:text-slate-400 outline-none"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full text-black border-b border-slate-200 py-3 placeholder:text-slate-400 outline-none"
            ></textarea>

            <button
              type="submit"
              className="mt-4 w-full bg-[#1472F2] hover:bg-[#0f5ccc] text-white font-semibold py-3.5 rounded-lg cursor-pointer"
            >
              Submit
            </button>

            <p className="text-sm text-center text-slate-500 mt-2">{result}</p>
          </form>
        </div>
      </div>
    </div>
  );
}
