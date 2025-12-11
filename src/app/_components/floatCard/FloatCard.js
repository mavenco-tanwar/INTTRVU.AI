"use client";
import { useEffect, useRef, useState } from "react";

function FloatCard() {
  const [result, setResult] = useState("");
  
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "6e46627e-66a1-4662-86f6-f25fc529e8b9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Error submitting form");
    }
  };

  return (
    <div className="h-full w-[420px] lg:left-[67%] absolute top-0 p-4 hidden min-[1150px]:block">
      <div className="max-w-md w-full bg-white shadow-xl rounded-2xl p-6 sticky top-5 lg:left-[67%]">

        <h2 className="text-2xl sm:text-3xl font-semibold text-center text-black/80 mb-6">
          Free Counselling with Experts
        </h2>

        {/* FORM */}
          <form className="flex flex-col gap-5" onSubmit={onSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="w-full text-black border-b border-slate-200 py-3 placeholder:text-slate-400 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full text-black border-b border-slate-200 py-3 placeholder:text-slate-400 outline-none"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full text-black border-b border-slate-200 py-3 placeholder:text-slate-400 outline-none"
            ></textarea>

            <button
              type="submit"
              className="mt-4 w-full bg-[#1472F2] hover:bg-[#0f5ccc] text-white font-semibold py-3.5 rounded-lg cursor-pointer"
            >
              Submit
            </button>

            <p className="text-sm text-center text-slate-500 mt-2">{result}</p>
          </form>
      </div>
    </div>
  );
}

export default FloatCard;
