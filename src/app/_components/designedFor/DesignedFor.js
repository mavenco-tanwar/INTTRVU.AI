import React from "react";
import DesignedForCards from "./DesignedForCards";

function DesignedFor() {
  return (
  <section>
  <div className="py-10">
    <div className="flex max-w-7xl m-auto px-4 ">
      <div className="lg:max-w-3xl w-full text-center md:text-left">

        <h2 className="text-3xl sm:text-4xl md:text-5xl leading-tight md:leading-16 mb-8 font-poppins font-semibold">
          Designed for Working Professionals like you
        </h2>

        {/* CARDS WRAPPER */}
        <div className="flex flex-wrap gap-6 justify-center md:justify-start">
          <DesignedForCards
            icon={"/work_outline.svg"}
            heading={"Weekly Online mentorship by experts"}
            subHeading={"Get assistance on projects and reinforce concepts through weekly sessions"}
            clas={"bg-[#ec0044]"}
          />

          <DesignedForCards
            icon={"/person_add.svg"}
            heading={"Dedicated program support"}
            subHeading={"Get access to a dedicated program manager to help you with queries."}
            clas={"bg-[#f6b221]"}
          />

          <DesignedForCards
            icon={"/cast_for.svg"}
            heading={"Learn anytime anywhere"}
            subHeading={"Learn through Online videos by world class faculties at your own convenience"}
            clas={"bg-[#00698e]"}
          />

          <DesignedForCards
            icon={"/verified.svg"}
            heading={"Network with people of similar interest"}
            subHeading={"Interact with peers to grow your professional network"}
            clas={"bg-[#288dc0]"}
          />
        </div>

      </div>
    </div>
  </div>
</section>

  );
}

export default DesignedFor;
