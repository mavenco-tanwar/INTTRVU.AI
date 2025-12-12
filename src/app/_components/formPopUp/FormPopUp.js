"use client";

import { useEffect, useRef, useState } from "react";
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
  const [loadState, setLoadState] = useState("idle"); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState("");

  // When modal opens, ensure script is loaded and then initialize widget
  useEffect(() => {
    if (!open) {
      setLoadState("idle");
      setErrorMessage("");
      return;
    }

    console.log("[FormPopUp] Modal opened -> initializing/loadNPF");
    console.log("[FormPopUp] Environment:", process.env.NODE_ENV);
    console.log("[FormPopUp] Widget ID:", widgetId);
    
    setLoadState("loading");
    let mounted = true;

    loadNPF({ maxWaitMs: 20000, pollInterval: 150 })
      .then(() => {
        if (!mounted) return;

        console.log("[FormPopUp] loadNPF resolved -> preparing widget container");
        console.log("[FormPopUp] window.cIframe available:", !!window.cIframe);

        const target =
          containerRef.current ||
          document.querySelector(`.npf_wgts[data-w="${widgetId}"]`);
        
        if (!target) {
          console.error("[FormPopUp] No container found for widget");
          setLoadState("error");
          setErrorMessage("Widget container not found");
          return;
        }

        console.log("[FormPopUp] Target element found:", target);

        // Clear any previous content
        target.innerHTML = "";

        if (typeof window?.cIframe === "function") {
          // small delay to ensure container is in DOM
          setTimeout(() => {
            try {
              console.log(
                `[FormPopUp] Calling window.cIframe('[data-w="${widgetId}"]')`
              );
              window.cIframe(`[data-w="${widgetId}"]`);
              
              // Check if widget actually rendered
              setTimeout(() => {
                const iframe = target.querySelector('iframe');
                if (iframe) {
                  console.log("[FormPopUp] Widget iframe detected successfully");
                  setLoadState("success");
                } else {
                  console.warn("[FormPopUp] No iframe found after cIframe call");
                  setLoadState("error");
                  setErrorMessage("Widget failed to render");
                }
              }, 1000);
            } catch (error) {
              console.error("[FormPopUp] Error calling cIframe:", error);
              setLoadState("error");
              setErrorMessage(error.message);
            }
          }, 50);
        } else {
          console.error(
            "[FormPopUp] window.cIframe is not a function after loadNPF resolved"
          );
          setLoadState("error");
          setErrorMessage("Widget initialization failed");
        }
      })
      .catch((err) => {
        console.error("[FormPopUp] loadNPF failed:", err);
        if (mounted) {
          setLoadState("error");
          setErrorMessage(err.message || "Failed to load form");
        }
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

          {/* Loading State */}
          {loadState === "loading" && (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
              <p className="text-slate-600">Loading form...</p>
            </div>
          )}

          {/* Error State */}
          {loadState === "error" && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
              <svg
                className="w-12 h-12 text-red-500 mx-auto mb-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <p className="text-red-800 font-medium mb-2">
                Failed to load form
              </p>
              <p className="text-red-600 text-sm mb-4">{errorMessage}</p>
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
              >
                Reload Page
              </button>
            </div>
          )}

          {/* Widget Container - always rendered */}
          <div
            ref={containerRef}
            className="npf_wgts"
            data-height="400px"
            data-w={widgetId}
            style={{
              display: loadState === "loading" || loadState === "error" ? "none" : "block",
              minHeight: "400px"
            }}
          />
        </div>
      </div>
    </div>
  );
}