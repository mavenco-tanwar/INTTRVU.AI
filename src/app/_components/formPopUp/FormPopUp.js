"use client";

import { useEffect, useRef } from "react";

export default function FormPopUp({
  open = false,
  onClose = () => {},
  imageSrc = "/popup-left.jpg",
  text,
  widgetId = "6d50097018b6265f9de28709b4d645f9",
}) {
  const modalRef = useRef(null);
  const overlayRef = useRef(null);
  const containerRef = useRef(null);

  // Safely move the widget into the modal when open
  useEffect(() => {
    if (!open) return;

    const originalContainer = document.querySelector(`.npf_wgts[data-w="${widgetId}"]`);
    const modalContainer = containerRef.current;

    if (!originalContainer) {
      console.warn("[FormPopUp] Original widget container not found");
      return;
    }

    if (!modalContainer) return;

    // Avoid moving the modal into itself
    if (!modalContainer.contains(originalContainer)) {
      // Insert a placeholder so we can move it back later
      const placeholder = document.createElement("div");
      placeholder.id = "widget-placeholder";
      originalContainer.parentNode.insertBefore(placeholder, originalContainer);

      // Move widget into modal
      modalContainer.appendChild(originalContainer);
      console.log("[FormPopUp] Widget moved into modal");

      return () => {
        // Restore the widget to original place on modal close
        const ph = document.querySelector("#widget-placeholder");
        if (ph) {
          ph.parentNode.replaceChild(originalContainer, ph);
          console.log("[FormPopUp] Widget moved back to original container");
        }
      };
    }
  }, [open, widgetId]);

  // Focus trap + ESC close
  useEffect(() => {
    if (!open) return;

    const timeoutId = setTimeout(() => {
      modalRef.current?.querySelector(
        "input, select, button, [tabindex]:not([tabindex='-1'])"
      )?.focus();
    }, 100);

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
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
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={(e) => e.target === overlayRef.current && onClose()}
    >
      <div
        ref={modalRef}
        className="relative max-w-6xl bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col lg:flex-row align-items-center overflow-y-auto"
        style={{ alignItems: "center" }}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute cursor-pointer top-4 right-4 md:right-4 max-sm:right-2 z-20 w-8 h-8 rounded-full flex items-center justify-center border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
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

        <div className="hidden overflow-hidden lg:flex lg:w-1/2 bg-white items-center justify-center p-0">
          <div className="w-full">
            <img
              src={imageSrc}
              alt="Promo"
              className="h-auto object-cover w-full"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 px-8 py-12 lg:px-12 lg:py-10">
          <h3 className="text-2xl font-semibold text-slate-900 mb-6 text-center">
            {text}
          </h3>
          <div
            ref={containerRef}
            className="npf_wgts"
            data-height="400px"
            data-w={widgetId}
          />
        </div>
      </div>
    </div>
  );
}
