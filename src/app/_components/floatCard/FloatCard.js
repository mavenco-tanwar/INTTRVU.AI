"use client";
import { useEffect } from "react";

function FloatCard() {

  useEffect(() => {
    const scriptId = "npf-widget-js";

    // Load script only once
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.type = "text/javascript";
      script.async = true;
      script.src = "https://widgets.in8.nopaperforms.com/emwgts.js";
      document.body.appendChild(script);
    }
  }, []); // IMPORTANT: Always include this from the start

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
        ></div>
      </div>
    </div>
  );
}

export default FloatCard;