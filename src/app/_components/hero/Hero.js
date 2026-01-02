"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "@/app/ui/button/Button";
import CompreLine from "./CompreLine";
import Countdown from "./Countdown";
import FormPopUp from "../formPopUp/FormPopUp";
import {
  ClockIcon,
  GlobeAltIcon,
  StarIcon,
} from "@heroicons/react/24/solid";

function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <main>
      <div className="py-10">
        <div className="bg-background-1 m-auto max-w-7xl flex flex-col lg:flex-row gap-6 items-center lg:items-start">
          {/* LEFT CONTENT */}
          <div className="w-full px-4 lg:pt-10">
            <div className="text-center lg:text-left">
              <span className="text-black/60 inline-block text-sm font-medium mb-2.5 bg-[#e8f0fc] py-1.5 px-2 font-poppins">
                Transform Your Career With Inttrvu&apos;s Data Science
                Certification Course
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4 font-poppins font-semibold">
                Data Science and GenAI Course
              </h1>

              <p className="text-[#444] mb-5 font-poppins">
                Become a Data Scientist or Data Analyst . No coding knowledge
                required.
              </p>

              <p className="flex flex-wrap items-start gap-x-6 gap-y-4 text-[#444] mb-5 font-poppins font-medium tracking-[0.15px] leading-tight">
                <span className="flex flex-col lg:flex-row items-center gap-1.5">
                  <ClockIcon className="w-6 h-6 md:w-8 md:h-8 text-gray-500" />
                  <span className="text-sm">7.5 Months</span>
                </span>

                <span className="flex flex-col lg:flex-row items-center gap-1.5">
                  <GlobeAltIcon className="w-6 h-6 md:w-8 md:h-8 text-gray-500" />
                  <span className="text-sm">Online Certificate</span>
                </span>

                <span className="flex flex-col lg:flex-row items-center gap-1.5">
                  <StarIcon className="w-6 h-6 md:w-8 md:h-8 text-yellow-500" />
                  <span className="text-sm">Rated 4.7/5</span>
                </span>
              </p>

              <div className="flex justify-center lg:justify-start">
                <Button
                  click={() => {
                    setOpen(true);
                  }}
                  text={"DOWNLOAD BROCHURE"}
                  reff="#"
                  clas={
                    "rounded-lg font-poppins font-medium tracking-[1.25px] leading-6 text-white   py-4 px-10 hover:bg-[#0f4cd1]"
                  }
                />
                <FormPopUp 
                  open={open}
                  onClose={() => setOpen(false)}
                  text="Apply For Counselling"
                  imageSrc="/emloy.png"
                  widgetId="6d50097018b6265f9de28709b4d645f9" // ✅ Works!
                />
              </div>
            </div>

            {/* <div className="flex flex-col md:flex-row items-center lg:items-start md:gap-3 gap-1 lg:justify-start justify-center mt-6 text-center md:text-left">
              <div>
                <p className="text-sm text-black/80 font-medium font-poppins">
                  Application closes on
                </p>

                <p className="mt-1 text-[#C1272D] font-semibold font-poppins">
                  25th Dec 2025
                </p>
              </div>

              <div className="md:ml-3">
                <Countdown targetDate="2025-12-07T00:00:00" />
              </div>
            </div> */}
          </div>

          {/* RIGHT IMAGE — hidden on small screens */}
          <div className="relative w-[340px] lg:w-full h-[250px] lg:h-[450px] mr-0 lg:mr-3.5">
            <Image
              src="/header-image.png"
              alt="image"
              fill
              className="rounded-xl lg:object-cover"
            />
          </div>
          {/* DEADLINE SECTION */}
        </div>
      </div>

      <CompreLine />
    </main>
  );
}

export default Hero;
