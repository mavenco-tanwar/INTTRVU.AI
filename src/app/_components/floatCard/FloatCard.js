"use client";

import { useEffect } from "react";
import { loadNPF } from "@/utils/loadNPF";

function FloatCard() {
  useEffect(() => {
    let mounted = true;
    console.log("[FloatCard] mount -> calling loadNPF");

    loadNPF({ maxWaitMs: 15000, pollInterval: 150 })
      .then(() => {
        if (!mounted) return;
        console.log("[FloatCard] loadNPF resolved -> calling window.cIframe if available");
        try {
          if (typeof window?.cIframe === "function") {
            window.cIframe();
            console.log("[FloatCard] window.cIframe() called");
          } else {
            console.warn("[FloatCard] window.cIframe not available after loadNPF resolved");
          }
        } catch (err) {
          console.error("[FloatCard] error calling window.cIframe():", err);
        }
      })
      .catch((err) => {
        console.error("[FloatCard] loadNPF failed:", err);
      });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="h-full w-[420px] lg:left-[67%] absolute top-0 p-4 hidden min-[1150px]:block">
      <div className="max-w-md w-full bg-white shadow-xl rounded-2xl p-6 sticky top-5">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center text-black/80 mb-6">
          Free Counselling with Experts
        </h2>

        <div
          className="npf_wgts"
          data-height="400px"
          data-w="6d50097018b6265f9de28709b4d645f9"
        />
      </div>
    </div>
  );
}

export default FloatCard;
