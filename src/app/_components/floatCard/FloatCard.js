"use client";

import { useEffect } from "react";
import { loadNPF } from "@/utils/loadNPF";

function FloatCard() {
  const widgetId = "6d50097018b6265f9de28709b4d645f9"; // make sure this matches your widget

  useEffect(() => {
    let mounted = true;
    console.log("[FloatCard] mount -> calling loadNPF");

    loadNPF({ maxWaitMs: 15000, pollInterval: 150 })
      .then(() => {
        if (!mounted) return;

        console.log(
          "[FloatCard] loadNPF resolved -> calling window.cIframe with selector",
          `[data-w="${widgetId}"]`
        );

        const target = document.querySelector(`.npf_wgts[data-w="${widgetId}"]`);
        if (!target) {
          console.warn("[FloatCard] No container found for widget");
          return;
        }

        // Clear previous content if any
        target.innerHTML = "";

        if (typeof window?.cIframe === "function") {
          // Small delay to ensure container is in DOM
          setTimeout(() => {
            window.cIframe(`[data-w="${widgetId}"]`);
            console.log("[FloatCard] window.cIframe called successfully");
          }, 50);
        } else {
          console.warn("[FloatCard] window.cIframe not available after loadNPF resolved");
        }
      })
      .catch((err) => {
        console.error("[FloatCard] loadNPF failed:", err);
      });

    return () => {
      mounted = false;
    };
  }, [widgetId]);

  return (
    <div className="h-full w-[420px] lg:left-[67%] absolute top-0 p-4 hidden min-[1150px]:block">
      <div className="max-w-md w-full bg-white shadow-xl rounded-2xl p-6 sticky top-5">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center text-black/80 mb-6">
          Free Counselling with Experts
        </h2>
        <div id="float-card-widget" className="npf_wgts" data-w="6d50097018b6265f9de28709b4d645f9" data-height="400px" />
      </div>
    </div>
  );
}

export default FloatCard;
