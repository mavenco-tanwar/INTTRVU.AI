export function loadNPF() {
  return new Promise((resolve) => {
    const scriptId = "npf-widget-js";

    // Already loaded?
    if (typeof window !== "undefined" && window.cIframe) return resolve(true);

    // Script exists but not loaded yet
    if (document.getElementById(scriptId)) {
      const check = setInterval(() => {
        if (window.cIframe) {
          clearInterval(check);
          resolve(true);
        }
      }, 100);
      return;
    }

    // Create script
    const script = document.createElement("script");
    script.id = scriptId;
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://widgets.in8.nopaperforms.com/emwgts.js";

    script.onload = () => {
      const check = setInterval(() => {
        if (window.cIframe) {
          clearInterval(check);
          resolve(true);
        }
      }, 100);
    };

    document.body.appendChild(script);
  });
}
