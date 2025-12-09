"use client";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

export default function AlumniCard({
  companyLogo,
  review,
  userImage,
  userName,
  userRole,
  
}) {
  const contentRef = useRef(null);
  const [expanded, setExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    if (!contentRef.current) return;

    // Check if content height exceeds 72px
    const shouldShowButton = contentRef.current.scrollHeight > 72;
    setIsOverflowing(shouldShowButton);
  }, [review]);

  return (
    <div className="w-full max-[420px]:w-[320px] max-w-[420px] bg-white rounded-2xl shadow-xl p-6 flex flex-col gap-4">

      {/* Company Logo */}
     <div className="w-[104px] h-[40px] relative">
  <Image
    src={companyLogo}
    alt="company logo"
    fill
    className="object-contain"
  />
</div>


      {/* Review Text */}
      <div
        ref={contentRef}
        className={`text-[16px] leading-relaxed text-black/80 font-poppins transition-all duration-300 overflow-hidden ${
          expanded ? "max-h-[500px]" : "max-h-[72px]"
        }`}
      >
        {review}
      </div>

      {/* Read More / Less Button */}
      {isOverflowing && (
        <button
          onClick={() => setExpanded((prev) => !prev)}
          className="text-blue-600 font-medium text-sm font-poppins w-fit"
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      )}

      {/* User Info */}
      <div className="flex items-center gap-3 pt-3">
        <Image
          src={userImage}
          alt={userName}
          width={50}
          height={50}
          className="rounded-full object-cover"
        />
        <div>
          <p className="font-poppins font-semibold text-[16px]">{userName}</p>
          <p className="text-[#1a73e8] text-[14px] font-poppins">{userRole}</p>
        </div>
      </div>
    </div>
  );
}
