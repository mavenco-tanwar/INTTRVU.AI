"use client";


import Image from "next/image";
import React, { useRef } from "react";

function FloatCard() {
  const formRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();


    formRef.current.reset();

 
    window.location.href = "https://inttrvu.ai/thank-you-data-science/"; // <-- change link here
  }

  return (
    <div className="h-full w-[420px] lg:left-[67%] absolute top-0 p-4 hidden min-[1150px]:block">
      <div className="max-w-md w-full bg-white shadow-xl rounded-2xl p-6 sticky top-5 lg:left-[67%]">

        <h2 className="text-2xl sm:text-3xl font-semibold text-center text-black/80 mb-6">
          Free Counselling with Experts
        </h2>

        {/* FORM */}
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">

          {/* NAME */}
          <input
            type="text"
            placeholder="Enter your Full Name *"
            className="w-full border-b border-gray-300 py-3 text-[16px] outline-none placeholder:text-gray-400"
            required
          />

          {/* EMAIL */}
          <input
            type="email"
            placeholder="Enter your Email *"
            className="w-full border-b border-gray-300 py-3 text-[16px] outline-none placeholder:text-gray-400"
            required
          />

          {/* PHONE */}
          <div className="flex items-center gap-4 border-b border-gray-300 pb-3">
            <Image
              src="/indian.jpg"
              alt="India"
              width={32}
              height={20}
              className="rounded"
            />
            <span className="text-[16px] text-gray-700 font-medium">+91</span>

            <input
              type="tel"
              placeholder="Phone Number *"
              className="flex-1 outline-none text-[16px] placeholder:text-gray-400"
              required
            />
          </div>

          {/* WORK EXPERIENCE */}
          <div className="border-b border-gray-300 pb-3">
            <select
              className="w-full outline-none text-[16px] bg-transparent text-gray-700"
              defaultValue=""
              required
            >
              <option value="" disabled>Work Experience *</option>
              <option value="0">0 Years</option>
              <option value="1">1 Year</option>
              <option value="2">2 Years</option>
              <option value="3">3+ Years</option>
            </select>
          </div>

          {/* COURSE PREFERENCE */}
          <div className="border-b border-gray-300 pb-3">
            <select
              className="w-full outline-none text-[16px] bg-transparent text-gray-700"
              defaultValue=""
              required
            >
              <option value="" disabled>Select Course Preference *</option>
              <option value="ds">Data Science</option>
              <option value="ai">AI / ML</option>
              <option value="da">Data Analytics</option>
            </select>
          </div>

          {/* TERMS */}
          <p className="text-[12px] text-gray-500 text-center leading-snug">
            By submitting the form, you agree to our Terms & Conditions and Privacy Policy.
          </p>

          {/* BUTTON */}
          <button
            type="submit"
            className={"w-full bg-[#1472F2] hover:bg-[#0f5ccc] cursor-pointer text-white font-semibold py-3.5 rounded-lg text-[16px]"}
         
          >Apply For Counselling</button>
 
         

        </form>
      </div>
    </div>
  );
}

export default FloatCard;
