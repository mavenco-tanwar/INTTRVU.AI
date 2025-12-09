"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function FormPopUp({
  open = false,
  onClose = () => {},
  imageSrc = "/popup-left.jpg",
  submitRedirect = undefined,
  text
}) {
  const overlayRef = useRef(null);
  const modalRef = useRef(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [workExp, setWorkExp] = useState("");
  const [course, setCourse] = useState("");

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => {
        modalRef.current?.querySelector("input, select, button")?.focus();
      }, 50);

      const onKey = (e) => {
        if (e.key === "Escape") onClose();
      };

      document.addEventListener("keydown", onKey);
      return () => {
        clearTimeout(t);
        document.removeEventListener("keydown", onKey);
      };
    }
  }, [open, onClose]);

  useEffect(() => {
    const handler = (e) => {
      if (!open) return;
      if (overlayRef.current && e.target === overlayRef.current) onClose();
    };
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, [open, onClose]);

  if (!open) return null;

  function resetForm() {
    setName("");
    setEmail("");
    setPhone("");
    setWorkExp("");
    setCourse("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    resetForm();

    if (submitRedirect) {
      window.location.href = submitRedirect;
    } else {
      onClose();
    }
  }

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6"
      role="dialog"
      aria-modal="true"
    >
      <div
        ref={modalRef}
        className="
          relative max-w-6xl bg-white rounded-xl shadow-2xl 
          overflow-hidden flex flex-col lg:flex-row 
          align-items-center
          max-h-[75vh] overflow-y-auto
        "
        style={{ minHeight: 520, alignItems: "center" }}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="
            absolute cursor-pointer top-4 
            right-4 md:right-4 
            max-sm:right-2    /* More right on mobile */
            z-20 w-8 h-8 rounded-full 
            flex items-center justify-center 
            border border-slate-200 bg-white text-slate-600 
            hover:bg-slate-50
          "
        >
          <svg width="16" height="16" viewBox="0 0 24 24">
            <path
              d="M18 6 L6 18 M6 6 L18 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </button>

        {/* LEFT IMAGE — hidden on mobile */}
        <div className="hidden overflow-hidden lg:flex lg:w-1/2 bg-white items-center justify-center p-0">
          <div className="w-full">
            <Image
              src={imageSrc}
              alt="Promo"
              width={480}
              height={300}
              className="h-auto object-cover"   // MATCH HEIGHT PERFECTLY
            />
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="w-full lg:w-1/2 p-8 lg:px-12 lg:py-10">
          <h3 className="text-2xl font-semibold text-slate-900 mb-6 text-center">
            {text}
          </h3>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your Full Name *"
              required
              className="w-full text-black border-b border-slate-200 py-3 placeholder:text-slate-400 outline-none"
            />

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email *"
              type="email"
              required
              className="w-full border-b text-black border-slate-200 py-3 placeholder:text-slate-400 outline-none"
            />

            {/* PHONE FIELD */}
            <div className="flex items-center gap-3 border-b border-slate-200 pb-2">

              {/* HIDDEN BELOW 350px */}
              <div className="flex items-center gap-2 max-[350px]:hidden">
                <Image src="/indian.jpg" alt="IN" width={28} height={20} />
                <span className="text-slate-700">+91</span>
              </div>

              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Number *"
                type="tel"
                required
                className="flex-1 text-black outline-none py-2 placeholder:text-slate-400"
              />
            </div>

            <select
              value={workExp}
              onChange={(e) => setWorkExp(e.target.value)}
              required
              className="w-full border-b border-slate-200 py-3 text-black bg-transparent outline-none"
            >
              <option value="" disabled>
                Work Experience *
              </option>
              <option value="0">0 Years</option>
              <option value="1">1 Year</option>
              <option value="2">2 Years</option>
              <option value="3">3+ Years</option>
            </select>

            <select
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              required
              className="w-full border-b text-black border-slate-200 py-3 bg-transparent outline-none"
            >
              <option value="" disabled>
                Select Course Preference *
              </option>
              <option value="ds">Data Science</option>
              <option value="ai">AI / ML</option>
              <option value="da">Data Analytics</option>
            </select>

            <p className="text-xs text-slate-500 text-center lg:text-left mt-2">
              By submitting the form, you agree to our Terms and Conditions and our Privacy Policy.
            </p>

            <button
              type="submit"
              className="mt-4 w-full bg-[#1472F2] hover:bg-[#0f5ccc] text-white font-semibold py-3.5 rounded-lg cursor-pointer"
            >
              Apply For Counselling
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
