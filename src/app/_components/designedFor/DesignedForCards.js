import Image from "next/image";
import React from "react";

function DesignedForCards({ icon, heading, subHeading, clas }) {
  return (
    <div className="p-6 flex flex-col max-[730px]:items-center gap-4 shadow-xl max-w-[336px] w-full sm:w-[336px]">
      <div
        className={`${clas} w-12 h-12 rounded-full flex justify-center items-center`}
      >
        <Image src={icon} alt="icon" width={24} height={24} />
      </div>
      <h2 className="font-poppins text-2xl font-semibold">{heading}</h2>
      <p className="font-poppins font-medium text-black/70 mb-6">
        {subHeading}
      </p>
    </div>
  );
}

export default DesignedForCards;
