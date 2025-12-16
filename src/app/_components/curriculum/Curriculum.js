"use client";
import Button from "@/app/ui/button/Button";
import Image from "next/image";
import React, { useState } from "react";
import FormPopUp from "../formPopUp/FormPopUp";

function Curriculum() {
  const [open, setOpen] = useState(false);

  return (
    <section>
      <div className="py-10 bg-background-2">
        <div className="flex max-w-7xl m-auto px-4">
          <div className="lg:max-w-3xl w-full text-center md:text-left">
            <span className="text-sec-heading font-poppins font-medium text-[12px] leading-4 tracking-[2.4px] mb-2 inline-block uppercase">
              Comprehensive curriculum to help
            </span>

            <h2 className="text-3xl lg:w-full  md:w-[600px]  sm:text-4xl md:text-5xl leading-tight md:leading-16 mb-4 font-poppins font-semibold">
              Master industry-valued skills
            </h2>

            {/* ICON GRID */}
            <div className="flex flex-wrap gap-5 mb-4 justify-center md:justify-start">
              {/* Every skill card becomes full width on mobile */}
              <div className="flex gap-2.5 items-center w-full sm:w-[48%]">
                <Image
                  src={"/py-ico.png"}
                  alt="python"
                  width={72}
                  height={72}
                />
                <p className="text-xl sm:text-2xl font-poppins font-medium text-left">
                  Python
                </p>
              </div>
              <div className="flex gap-2.5 items-center w-full sm:w-[48%]">
                <Image
                  src={"/mysql-ico.png"}
                  alt="mysql"
                  width={72}
                  height={72}
                />
                <p className="text-xl sm:text-2xl font-poppins font-medium text-left">
                  SQL
                </p>
              </div>

              <div className="flex gap-2.5 items-center w-full sm:w-[48%]">
                <Image
                  src={"/tableau-ico.png"}
                  alt="tableau"
                  width={72}
                  height={72}
                />
                <p className="text-xl sm:text-2xl font-poppins font-medium text-left">
                  Tableau
                </p>
              </div>

              <div className="flex gap-2.5 items-center w-full sm:w-[48%]">
                <Image
                  src={"/nlp_gen_ai.png"}
                  alt="nlp_gen_ai"
                  width={72}
                  height={72}
                />
                <p className="text-xl sm:text-2xl font-poppins font-medium text-left">
                  Power BI
                </p>
              </div>

              <div className="flex gap-2.5 items-center w-full sm:w-[48%]">
                <Image
                  src={"/m_l.png"}
                  alt="Machine Learning"
                  width={72}
                  height={72}
                />
                <p className="text-xl sm:text-2xl font-poppins font-medium text-left">
                  Machine Learning
                </p>
              </div>

              <div className="flex gap-2.5 items-center w-full sm:w-[48%]">
                <Image
                  src={"/b_a.png"}
                  alt="Business Analytics"
                  width={72}
                  height={72}
                />
                <p className="text-xl sm:text-2xl font-poppins font-medium text-left">
                  Deep Learning
                </p>
              </div>

              <div className="flex gap-2.5 items-center h-[72px]  w-full sm:w-[48%]">
                <Image
                  src={"/p_m.png"}
                  alt="Predictive Modelling"
                  width={72}
                  height={72}
                />
                <p className="text-xl sm:text-2xl font-poppins font-medium text-left">
                  Natural Language Processing
                </p>
              </div>

              <div className="flex gap-2.5 items-center w-full sm:w-[48%]">
                <Image
                  src={"/network-ico.png"}
                  alt="Neural Networks & Computer Vision"
                  width={72}
                  height={72}
                />
                <p className="text-xl sm:text-2xl font-poppins font-medium text-left">
                  Generative AI
                </p>
              </div>
            </div>

            {/* STATS BOXES */}
            <div className="flex gap-6 mb-8 flex-row overflow-x-scroll w-full justify-start sm:flex-row sm:overflow-visible sm:justify-center lg:justify-start">
              <div className="p-2 flex gap-4 justify-center items-center  bg-white rounded-lg w-full sm:w-auto">
                <div className="p-2 text-[16px] bg-[#ffbc4c] rounded-4xl font-poppins sm:py-2 sm:px-4 sm:text-[20px]">
                  15+
                </div>
                <p className="text-[16px] sm:text-[20px] font-semibold font-poppins">
                  Tools
                </p>
              </div>

              <div className="p-2 flex gap-4 justify-center items-center bg-white rounded-lg w-full sm:w-auto">
                <div className="p-2 text-[16px] bg-[#ffbc4c] rounded-4xl font-poppins sm:py-2 sm:px-4 sm:text-[20px]">
                  15+
                </div>
                <p className="text-[16px] sm:text-[20px] font-semibold font-poppins">
                  Case Studies
                </p>
              </div>

              <div className="p-2 flex gap-4 justify-center items-center bg-white rounded-lg w-full sm:w-auto">
                <div className="p-2 text-[16px] bg-[#ffbc4c] rounded-4xl font-poppins sm:py-2 sm:px-4 sm:text-[20px]">
                  20+
                </div>
                <p className="text-[16px] sm:text-[20px] font-semibold font-poppins">
                  Projects
                </p>
              </div>
            </div>

            <div className="flex justify-center lg:justify-start">
              <Button
                click={() => {
                  setOpen(true);
                }}
                text={"DOWNLOAD CURRICULUM"}
                reff={"#"}
                clas={
                  "rounded-lg font-poppins font-medium tracking-[1.25px] leading-6  py-4 px-10 text-white hover:bg-[#0f4cd1]"
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
        </div>
      </div>
    </section>
  );
}

export default Curriculum;
