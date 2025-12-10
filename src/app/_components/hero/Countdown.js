"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const targetDate = new Date("2025-12-25T00:00:00");

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    mins: "00",
    secs: "00",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        clearInterval(timer);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
        .toString()
        .padStart(2, "0");

      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
        .toString()
        .padStart(2, "0");

      const mins = Math.floor((diff / (1000 * 60)) % 60)
        .toString()
        .padStart(2, "0");

      const secs = Math.floor((diff / 1000) % 60)
        .toString()
        .padStart(2, "0");

      setTimeLeft({ days, hours, mins, secs });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col self-end text-center">

      {/* TOP NUMBERS */}
      <div className="flex items-center justify-center gap-2">

        {/* DAYS */}
        <div className="w-[24px]">
          <p className="text-[#C1272D] bg-gray-100/60  text-[16px] font-semibold font-poppins">
            {timeLeft.days}
          </p>
        </div>

        <span>:</span>

        {/* HOURS */}
        <div className="w-[24px]">
          <p className="text-[#C1272D] bg-gray-100/60  text-[16px] font-semibold font-poppins">
            {timeLeft.hours}
          </p>
        </div>

        <span>:</span>

        {/* MINUTES */}
        <div className="w-[24px]">
          <p className="text-[#C1272D] bg-gray-100/60  text-[16px] font-semibold font-poppins">
            {timeLeft.mins}
          </p>
        </div>

        <span>:</span>

        {/* SECONDS */}
        <div className="w-[24px]">
          <p className="text-[#C1272D] bg-gray-100/60  text-[16px] font-semibold font-poppins">
            {timeLeft.secs}
          </p>
        </div>

      </div>

      {/* LABELS */}
      <div className="flex items-center justify-center gap-5 mt-1">
        <p className="w-[24px] text-[10px] text-gray-600 uppercase tracking-wide">Day</p>
        <p className="w-[24px] text-[10px] text-gray-600 uppercase tracking-wide">Hr</p>
        <p className="w-[24px] text-[10px] text-gray-600 uppercase tracking-wide">Mins</p>
        <p className="w-[24px] text-[10px] text-gray-600 uppercase tracking-wide">Secs</p>
      </div>

    </div>
  );
}
