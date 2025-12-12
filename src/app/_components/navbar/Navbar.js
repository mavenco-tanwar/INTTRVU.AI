"use client"
import React, { useState } from "react";
import Image from "next/image";
import Button from "@/app/ui/button/Button";
import FormPopUp from "../formPopUp/FormPopUp";
function Navbar() {
    const [open, setOpen] = useState(false);

  return (
    <header className="shadow-xl  px-[26px] pt-[5px]">
      <nav className="py-3  m-auto max-w-7xl flex justify-between items-center">
        <Image
          src={"/logo.png"}
          className=""
          width={102}
          height={32}
          alt="great learning logo"
        />

        <Button click={() => {
           setOpen(true)
        }
        } text={"Apply For Counselling"} reff={"#"} clas={"sm:px-5 sm:py-2.5 sm:text-[16px]  text-[14px]  px-3 py-1.5 rounded-lg font-poppins font-normal text-white cursor-pointer hover:bg-[#0f4cd1] "}/>


{/* <FormPopUp open={open} text="Apply For Counselling" onClose={() => setOpen(false)} imageSrc="/emloy.jpeg" submitRedirect="https://inttrvu.ai/thank-you-data-science/" /> */}
          <FormPopUp 
  open={open}
  onClose={() => setOpen(false)}
  text="Apply For Counselling"
  imageSrc="/emloy.jpeg"
  widgetId="6d50097018b6265f9de28709b4d645f9" // ✅ Works!
/>
      </nav>
    </header>
  );
}

export default Navbar;