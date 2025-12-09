import Image from "next/image";
import React from "react";

import CertificateSlider from "./CertificateSlider";

function Certificate() {
  return (
 <section>
  <div className="py-10 bg-background-2">
    
    {/* <1200px full width, >=1200px centered max 1200px */}
    <div className="flex max-w-full   lg:max-w-[1280px] mx-auto px-4">
      
      <div className="lg:max-w-3xl w-full text-center md:text-left">

        <h2 className="text-3xl    lg:w-full  sm:text-4xl md:text-5xl leading-tight md:leading-16 mb-4 font-poppins font-semibold">
         Get Certified by INTTRVU & NASSCOM
        </h2>

        <p className="font-poppins font-normal  lg:w-full    mb-4 text-black/80 text-sm sm:text-base md:text-lg">
          On successful completion of the course, you will receive both NASSCOM and Inttrvu
certifications, empowering you to become a Data scientist and land high-paying job
opportunities in Data Science & AI.
        </p>

        <div className="py-10 w-full flex justify-center lg:justify-start">
          <div className="w-full md:max-w-full  xl:max-w-[768px] xl:mx-auto">
          <div className="relative w-full   max-w-[520px]   aspect-[520/367]">
          <Image
            src={"/certificate.jpeg"}
            alt=""
            fill
            className="object-cover rounded-lg w-full h-full"
          />
        </div>
          </div>
        </div>

      </div>

    </div>

  </div>
</section>

  );
}

export default Certificate;
