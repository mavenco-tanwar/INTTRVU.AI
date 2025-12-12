"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { loadNPF } from "@/utils/loadNPF";

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

  // When modal opens, ensure script is loaded and then initialize widget
  useEffect(() => {
    if (!open) return;

    console.log("[FormPopUp] Modal opened -> initializing/loadNPF");

    let mounted = true;

    loadNPF({ maxWaitMs: 15000, pollInterval: 150 })
      .then(() => {
        if (!mounted) return;

        console.log("[FormPopUp] loadNPF resolved -> preparing widget container");

        const target =
          containerRef.current ||
          document.querySelector(`.npf_wgts[data-w="${widgetId}"]`);
        if (!target) {
          console.warn("[FormPopUp] No container found for widget");
          return;
        }

        // Clear any previous content
        target.innerHTML = "";

        if (typeof window?.cIframe === "function") {
          // small delay to ensure container is in DOM
          setTimeout(() => {
            console.log(
              `[FormPopUp] Calling window.cIframe('[data-w="${widgetId}"]')`
            );
            window.cIframe(`[data-w="${widgetId}"]`);
          }, 50);
        } else {
          console.warn(
            "[FormPopUp] window.cIframe is not a function after loadNPF resolved"
          );
        }
      })
      .catch((err) => {
        console.error("[FormPopUp] loadNPF failed:", err);
      });

    return () => {
      mounted = false;
    };
  }, [open, widgetId]);

  // Focus trap + ESC close
  useEffect(() => {
    if (!open) return;

    const timeoutId = setTimeout(() => {
      modalRef.current
        ?.querySelector(
          "input, select, button, [tabindex]:not([tabindex='-1'])"
        )
        ?.focus();
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
        className="relative max-w-6xl bg-white rounded-xl shadow-2xl overflow-y-auto flex flex-col lg:flex-row items-center"
      >
        {/* Close Button */}
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

        {/* Left Image */}
        <div className="hidden lg:flex lg:w-1/2 bg-white items-center justify-center p-0">
          <div className="w-full">
            <Image
              src={imageSrc}
              alt="Promo"
              width={480}
              height={300}
              className="h-auto object-cover"
              priority
            />
          </div>
        </div>

        {/* Right Content / Widget */}
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
