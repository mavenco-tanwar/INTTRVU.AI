import React from "react";
import CareerCards from "./CareerCards";

function CareerSupport() {
  return (
 <section>
  <div className="py-10">
    <div className="flex max-w-7xl m-auto px-4 "> 
      <div className="lg:max-w-3xl w-full text-center md:text-left">

        <span className="text-sec-heading font-poppins font-medium text-[12px] leading-4 tracking-[2.4px] mb-2 inline-block">
          GET ACCESS TO CURATED JOBS WITH
        </span>

        <h2 className="text-3xl  lg:w-full    sm:text-4xl md:text-5xl leading-tight md:leading-16 mb-6 font-poppins font-semibold">
          Dedicated Career Support
        </h2>

        <div className="flex flex-wrap gap-6 justify-center md:justify-start">
          <CareerCards
            text={"Best Placement Assistance"}
            image={"/job-postings.jpg"}
          />
          <CareerCards
            text={"1-1 guidance for any questions"}
            image={"/resume.jpg"}
          />
          <CareerCards
            text={"Detailed Feedback and plan of action to crack the interviews"}
            image={"/emloy.jpeg"}
          />
          <CareerCards
            text={"Course Completion Certificate"}
            image={"/emloies.jpeg"}
          />
        </div>

      </div>
    </div>
  </div>
</section>

  );
}

export default CareerSupport;
