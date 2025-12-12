"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

export default function FormPopUp({
  open = false,
  onClose = () => {},
  imageSrc = "/popup-left.jpg",
  text,
  widgetId = "6d50097018b6265f9de28709b4d645f9", // data-w value
}) {
  const modalRef = useRef(null);
  const scriptRef = useRef(null);
  const containerRef = useRef(null);
  const [widgetLoaded, setWidgetLoaded] = useState(false);

  // Load NoPaperForms widget script
  const loadWidgetScript = useCallback(() => {
    if (scriptRef.current || !open) return;

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://widgets.in8.nopaperforms.com/emwgts.js";
    script.onload = () => setWidgetLoaded(true);
    script.onerror = () => console.error("Failed to load NoPaperForms widget");
    
    document.body.appendChild(script);
    scriptRef.current = script;
  }, [open]);

  // Cleanup script and iframe when closing
  const cleanupWidget = useCallback(() => {
    // Remove widget container content
    if (containerRef.current) {
      containerRef.current.innerHTML = "";
    }
    
    // Remove script if exists
    if (scriptRef.current) {
      document.body.removeChild(scriptRef.current);
      scriptRef.current = null;
    }
    
    setWidgetLoaded(false);
  }, []);

  // Handle modal open/close
  useEffect(() => {
    if (open) {
      loadWidgetScript();
    } else {
      cleanupWidget();
    }

    return () => {
      if (!open) cleanupWidget();
    };
  }, [open, loadWidgetScript, cleanupWidget]);

  // Focus trap + ESC close
  useEffect(() => {
    if (!open || !modalRef.current) return;

    const firstFocusable = modalRef.current.querySelector(
      'button:not([aria-label="Close"]), [tabindex]:not([tabindex="-1"])'
    );
    
    const timeoutId = setTimeout(() => firstFocusable?.focus(), 100);

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row max-lg:max-w-md"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full flex items-center justify-center border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#1472F2] focus:ring-offset-2 transition-all"
          aria-label="Close dialog"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M18 6 L6 18 M6 6 L18 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Left image */}
        <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-50 to-indigo-100 items-center justify-center p-8">
          <Image
            src={imageSrc}
            alt="Contact us"
            width={500}
            height={400}
            className="w-full h-64 object-cover rounded-lg shadow-lg"
            priority
          />
        </div>

        {/* Right side - Title + Widget Container */}
        <div className="w-full lg:w-1/2 p-6 lg:p-12 flex flex-col">
          <h3 id="modal-title" className="text-2xl lg:text-3xl font-bold text-slate-900 mb-8 text-center lg:text-left">
            {text}
          </h3>

          <div 
            ref={containerRef}
            className="npf_wgts flex-1 min-h-[300px] w-full"
            data-height="100%"
            data-w={widgetId}
          />

          {!widgetLoaded && (
            <div className="flex items-center justify-center h-64 bg-slate-50 rounded-xl border-2 border-dashed border-slate-200">
              <div className="text-center text-slate-500">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-slate-200 flex items-center justify-center">
                  <svg className="w-6 h-6 text-slate-400 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                </div>
                <p className="text-sm">Loading contact form...</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
