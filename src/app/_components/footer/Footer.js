import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <section>
      <div className="py-10 bg-background-2">
        <div className="flex max-w-7xl m-auto px-4 md:px-0">
          <div className="lg:max-w-3xl w-full text-center md:text-left">
            <div className="py-14">
              <div className="max-w-6xl mx-auto px-4">
                {/* Heading */}
                <h2 className="text-3xl sm:text-4xl md:text-4xl font-semibold font-poppins mb-10">
                  Delivered in Collaboration with:
                </h2>

                {/* Logo and text */}
                <div className="flex-col md:flex-row gap-6 md:gap-12 items-start">
                  {/* LOGO */}
                  <div className="w-[180px] sm:w-[220px] md:w-[260px] mb-4  shrink-0">
                    <Image
                      src="/logo.png" // <-- change this URL only
                      alt="Great Learning"
                      width={260}
                      height={120}
                      className="w-full h-auto object-contain"
                    />
                  </div>

                  {/* TEXT */}
                  <p className="text-black/70 text-[16px] leading-7 font-poppins max-w-3xl">
                At INTTRVU.AI, we&apos;re comrnitted to preparing today&apos;s workforce for tomorrow&apos;s technology demands.
We empower learners to upskill in Data Science, Generative Al, Data Analytics, and Al through
immersive, project-based programs. By fostering a strong community of learners and industry
experts, we aim to create a future where everyone has the skills to succeed in an ever-evolving tech
landscape,
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
