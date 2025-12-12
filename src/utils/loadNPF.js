// /utils/loadNPF.js
// Custom loader with logs, retries and a promise that resolves only when window.cIframe is available.

export function loadNPF({ maxWaitMs = 10000, pollInterval = 150 } = {}) {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined") {
      console.warn("[NPF] loadNPF called on server — aborting");
      return reject(new Error("window is undefined"));
    }

    const scriptId = "npf-widget-js";
    const start = Date.now();

    console.log("[NPF] loadNPF() called", { maxWaitMs, pollInterval });

    // If cIframe already available -> done
    if (window.cIframe) {
      console.log("[NPF] window.cIframe already present -> resolving immediately");
      return resolve(true);
    }

    // If script tag already exists, don't append a second, just wait for cIframe
    if (document.getElementById(scriptId)) {
      console.log("[NPF] Script tag already present -> waiting for window.cIframe");
      const checkExisting = setInterval(() => {
        if (window.cIframe) {
          clearInterval(checkExisting);
          console.log("[NPF] cIframe detected (existing script) -> resolved");
          return resolve(true);
        }
        if (Date.now() - start > maxWaitMs) {
          clearInterval(checkExisting);
          console.error("[NPF] Timeout waiting for cIframe (existing script)");
          return reject(new Error("Timeout waiting for cIframe"));
        }
        console.log("[NPF] waiting for cIframe (existing)...");
      }, pollInterval);

      return;
    }

    // Otherwise create script
    console.log("[NPF] Injecting emwgts.js script tag...");
    const script = document.createElement("script");
    script.id = scriptId;
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://widgets.in8.nopaperforms.com/emwgts.js";

    // Modern approach: attach both load/error and also poll (handles immediate load before listener)
    let resolvedOrRejected = false;

    const finishResolve = () => {
      if (resolvedOrRejected) return;
      resolvedOrRejected = true;
      console.log("[NPF] loadNPF resolved (cIframe ready)");
      resolve(true);
    };

    const finishReject = (err) => {
      if (resolvedOrRejected) return;
      resolvedOrRejected = true;
      console.error("[NPF] loadNPF rejected:", err);
      reject(err);
    };

    // Polling for cIframe (covers edge cases where onload may not fire)
    const poll = setInterval(() => {
      if (window.cIframe) {
        clearInterval(poll);
        finishResolve();
      } else if (Date.now() - start > maxWaitMs) {
        clearInterval(poll);
        finishReject(new Error("Timeout waiting for cIframe (poll)"));
      } else {
        console.log("[NPF] poll: waiting for window.cIframe...");
      }
    }, pollInterval);

    script.addEventListener("load", () => {
      console.log("[NPF] script 'load' event fired — still waiting for cIframe to initialize");
      // do not resolve here — wait for cIframe via poll
    });

    script.addEventListener("error", (e) => {
      clearInterval(poll);
      finishReject(new Error("Failed to load emwgts.js"));
    });

    // Insert script at end of body (if body isn't ready, use head fallback)
    try {
      if (document.body) {
        document.body.appendChild(script);
      } else {
        document.head.appendChild(script);
      }
    } catch (err) {
      clearInterval(poll);
      finishReject(err);
    }
  });
}
