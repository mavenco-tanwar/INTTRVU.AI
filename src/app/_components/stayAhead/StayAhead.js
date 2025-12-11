import React from "react";

function StayAhead() {
  return (
<section>
  <div className="py-10">
    <div className="flex max-w-7xl m-auto px-4">

      {/* MAIN CONTENT */}
      <div className="lg:max-w-3xl w-full text-center md:text-left">

        {/* TOP SMALL HEADING */}
        <span className="text-sec-heading font-poppins font-medium text-[12px] leading-4 tracking-[2.4px] mb-2 inline-block">
          STAY AHEAD
        </span>

        {/* MAIN HEADING */}
        <h2 className="
          text-3xl sm:text-4xl md:text-5xl 
          leading-tight md:leading-[64px] 
           lg:w-full 
          mb-4 font-semibold font-poppins text-black/80
        ">
          Build a future-ready career in Data Science with GenAI
        </h2>

        {/* BOXES */}
        <div className="
          flex flex-col sm:flex-row 
          justify-center md:justify-start 
          gap-[18px]
        ">

          {/* BOX 1 */}
          <div className="py-[34px] w-full sm:w-[300px] px-5 shadow-xl rounded-lg">
            <p className="text-[#0041b2] text-4xl md:text-5xl font-semibold leading-[1.33] font-poppins">
              70%
            </p>
            <p className="text-[18px] md:text-[20px] font-medium leading-[1.4] tracking-[0.15px] font-poppins">
              Average Salary Hike*
            </p>
          </div>

          {/* BOX 2 */}
          <div className="py-[34px] w-full sm:w-[300px] px-5 shadow-xl rounded-lg">
            <p className="text-[#066665] text-4xl md:text-5xl font-semibold leading-[1.33] font-poppins">
              120+
            </p>
            <p className="text-[18px] md:text-[20px] font-medium leading-[1.4] tracking-[0.15px] font-poppins">
              Hiring Partners
            </p>
          </div>

        </div>

        {/* FOOTNOTE */}
        <p className="
          mt-[15px] 
          text-[12px] md:text-[14px] 
          leading-3.5 font-poppins
          text-center md:text-left
        ">
          *Across all INTTRVU programs
        </p>
      </div>

    </div>
  </div>
</section>


  );
}

export default StayAhead;
