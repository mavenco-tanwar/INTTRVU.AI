"use client"
import React, { useState } from "react";
import Button from "@/app/ui/button/Button";
import FormPopUp from "../formPopUp/FormPopUp";

function StudentCard() {
  const [open, setOpen] = useState(false);
  
  return (
    <section>
      <div className="py-10">
        <div className="flex max-w-7xl m-auto px-4">
          <div className="lg:max-w-3xl   w-full text-center md:text-left">
            <div
              className="relative bg-[#BF6625] rounded-2xl p-10 text-white overflow-hidden before:content-[''] before:absolute before:-right-24 before:-top-24 before:w-[300px] before:h-[300px] before:bg-[#FE9F0F] before:rounded-full before:z-0 after:content-[''] after:absolute after:-left-24 after:bottom-0 after:w-[350px] after:h-[350px] after:bg-[#A0511D] after:rounded-full after:z-0"
            >
              {/* CONTENT ABOVE SHAPES */}
              <div className="relative z-10">
                <h2 className="md:text-4xl text-3xl font-bold leading-tight">
                  Become a Data Scientist.
                  <br />
                  Gear up for the future.
                </h2>

                <p className="mt-3">
                  Learn from India&apos;s Most Trusted Program in Data
                  Science with Generative AI
                </p>

               <Button click={() => {
           setOpen(true)
        }
        } text={"START NOW"} reff={"#"} clas={"mt-6 bg-white text-black font-semibold px-8 py-3 rounded-xl"}/>
          {/* <FormPopUp open={open} text="Apply For Counselling" onClose={() => setOpen(false)} imageSrc="/emloy.png" submitRedirect="https://inttrvu.ai/thank-you-data-science/" /> */}
          <FormPopUp 
              open={open}
              onClose={() => setOpen(false)}
              text="Apply For Counselling"
              imageSrc="/emloy.png"
              widgetId="6d50097018b6265f9de28709b4d645f9"
            />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StudentCard;