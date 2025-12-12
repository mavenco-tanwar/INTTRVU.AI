"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

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
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  // Load the NPF script once on mount
  useEffect(() => {
    const scriptId = "npf-widget-script";
    
    // Check if script already exists
    if (document.getElementById(scriptId)) {
      setIsScriptLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://widgets.in8.nopaperforms.com/emwgts.js";

    script.onload = () => {
      console.log("[FormPopUp] NPF script loaded successfully");
      setIsScriptLoaded(true);
    };

    script.onerror = () => {
      console.error("[FormPopUp] Failed to load NPF script");
    };

    document.body.appendChild(script);
  }, []);

  // Initialize widget when modal opens
  useEffect(() => {
    if (!open || !isScriptLoaded) return;

    console.log("[FormPopUp] Modal opened, initializing widget...");

    const initializeWidget = () => {
      const container = containerRef.current;
      if (!container) {
        console.error("[FormPopUp] Container not found");
        return;
      }

      // Clear container
      container.innerHTML = "";

      // Ensure data attributes are set
      container.setAttribute("data-w", widgetId);
      container.setAttribute("data-height", "400px");
      container.className = "npf_wgts";

      // Add a loading indicator
      container.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: center; min-height: 400px; color: #666;">
          <div style="text-align: center;">
            <div style="width: 40px; height: 40px; border: 3px solid #f3f3f3; border-top: 3px solid #3498db; border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto 10px;"></div>
            <p>Loading form...</p>
          </div>
        </div>
        <style>
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        </style>
      `;

      console.log("[FormPopUp] Container prepared:", container);
      console.log("[FormPopUp] window.cIframe available:", !!window.cIframe);

      if (typeof window.cIframe !== "function") {
        console.error("[FormPopUp] window.cIframe is not available");
        setTimeout(() => setRetryCount(c => c + 1), 1000);
        return;
      }

      // Call cIframe with different selector formats
      try {
        console.log("[FormPopUp] Calling cIframe...");
        
        // Try multiple selector formats
        const selectors = [
          `[data-w="${widgetId}"]`,
          `.npf_wgts[data-w="${widgetId}"]`,
          `#${container.id || 'float-card-widget'}`
        ];

        selectors.forEach((selector, index) => {
          setTimeout(() => {
            console.log(`[FormPopUp] Attempt ${index + 1} with selector: ${selector}`);
            window.cIframe(selector);
            
            // Clear loading indicator after first call
            if (index === 0) {
              container.innerHTML = "";
            }
          }, index * 500);
        });

        // Check if iframe was created
        setTimeout(() => {
          const iframe = container.querySelector("iframe");
          if (iframe) {
            console.log("[FormPopUp] ✅ Widget iframe successfully created");
            console.log("[FormPopUp] Iframe src:", iframe.src);
            console.log("[FormPopUp] Iframe dimensions:", {
              width: iframe.style.width || iframe.width,
              height: iframe.style.height || iframe.height,
              display: iframe.style.display,
              visibility: iframe.style.visibility
            });
            
            // Force iframe to be visible with proper dimensions
            if (!iframe.style.height || iframe.style.height === '0px') {
              iframe.style.height = '400px';
              iframe.style.minHeight = '400px';
            }
            if (!iframe.style.width || iframe.style.width === '0px') {
              iframe.style.width = '100%';
            }
            iframe.style.display = 'block';
            iframe.style.visibility = 'visible';
            iframe.style.border = '1px solid #e5e7eb'; // Temporary debug border
            
            console.log("[FormPopUp] Iframe dimensions after fix:", {
              width: iframe.style.width,
              height: iframe.style.height
            });

            // Check if iframe loads
            iframe.addEventListener('load', () => {
              console.log("[FormPopUp] 🎉 Iframe content loaded successfully");
              iframe.style.border = 'none'; // Remove debug border
              
              // Additional check: verify iframe has actual content height
              setTimeout(() => {
                try {
                  const iframeWindow = iframe.contentWindow;
                  if (iframeWindow) {
                    console.log("[FormPopUp] Iframe window accessible");
                    
                    // Try to get iframe content height
                    const iframeHeight = iframeWindow.document?.body?.scrollHeight;
                    if (iframeHeight) {
                      console.log("[FormPopUp] Iframe content height:", iframeHeight);
                      if (iframeHeight > 100) {
                        console.log("[FormPopUp] ✅ Iframe has content");
                      } else {
                        console.warn("[FormPopUp] ⚠️ Iframe content seems empty (height < 100px)");
                      }
                    }
                  }
                } catch (e) {
                  // Cross-origin, can't access - that's fine
                  console.log("[FormPopUp] Cross-origin iframe (expected)");
                }
              }, 1000);
            });

            iframe.addEventListener('error', () => {
              console.error("[FormPopUp] ❌ Iframe failed to load content");
            });

            // Check computed dimensions
            setTimeout(() => {
              const rect = iframe.getBoundingClientRect();
              console.log("[FormPopUp] Iframe computed dimensions:", {
                width: rect.width,
                height: rect.height,
                top: rect.top,
                left: rect.left,
                visible: rect.width > 0 && rect.height > 0
              });
              
              if (rect.height === 0) {
                console.error("[FormPopUp] ⚠️ Iframe has zero height!");
                iframe.style.height = '500px';
                iframe.style.minHeight = '500px';
              }
            }, 500);
          } else {
            console.warn("[FormPopUp] ⚠️ No iframe found after initialization");
            console.log("[FormPopUp] Container HTML:", container.innerHTML);
            
            // One more retry
            if (retryCount < 3) {
              setTimeout(() => setRetryCount(c => c + 1), 2000);
            }
          }
        }, 2000);
      } catch (error) {
        console.error("[FormPopUp] Error initializing widget:", error);
      }
    };

    // Delay to ensure DOM is ready
    const timer = setTimeout(initializeWidget, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [open, isScriptLoaded, widgetId, retryCount]);

  // Focus trap + ESC close
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
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
        className="relative max-w-6xl bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col lg:flex-row"
        style={{ maxHeight: "90vh" }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute cursor-pointer top-4 right-4 md:right-4 max-sm:right-2 z-20 w-8 h-8 rounded-full flex items-center justify-center border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 transition-colors"
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
        <div className="w-full lg:w-1/2 px-8 py-12 lg:px-12 lg:py-10 overflow-y-auto">
          <h3 
            id="modal-title"
            className="text-2xl font-semibold text-slate-900 mb-6 text-center"
          >
            {text}
          </h3>

          {/* Loading indicator */}
          {!isScriptLoaded && (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
            </div>
          )}

          {/* Widget Container */}
          <div
            ref={containerRef}
            id="float-card-widget"
            className="npf_wgts"
            data-w={widgetId}
            data-height="400px"
            style={{ 
              minHeight: "400px",
              width: "100%",
              opacity: isScriptLoaded ? 1 : 0.5,
              transition: "opacity 0.3s",
              position: "relative",
              overflow: "visible"
            }}
          />

          {/* Force iframe visibility with global styles */}
          <style jsx global>{`
            #float-card-widget.npf_wgts {
              display: block !important;
              width: 100% !important;
              min-height: 400px !important;
              position: relative !important;
            }
            
            .npf_wgts iframe {
              width: 100% !important;
              min-height: 400px !important;
              height: 400px !important;
              display: block !important;
              visibility: visible !important;
              opacity: 1 !important;
              border: none !important;
              position: relative !important;
              z-index: 1 !important;
            }

            /* Ensure modal content area allows overflow */
            .npf_wgts {
              overflow: visible !important;
            }
          `}</style>

          {/* Fallback message after retries */}
          {retryCount >= 3 && (
            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-center">
              <p className="text-yellow-800 text-sm mb-2">
                Having trouble loading the form?
              </p>
              <button
                onClick={() => window.location.reload()}
                className="text-sm text-yellow-700 underline hover:text-yellow-900"
              >
                Try refreshing the page
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}