"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function CertificateSlider({ images = [], peek = 170 }) {
  return (
<div className="relative w-full max-w-[768px] mx-auto">

  <button className="cert-prev absolute md:-left-2 left-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/50 rounded-full">
    <svg width="16" height="16" viewBox="0 0 16 16">
      <path d="M15 9H3.83L8.71 13.88C9.1 14.27 9.1 14.91 8.71 15.3C8.32 15.69 7.69 15.69 7.3 15.3L0.709999 8.71C0.319999 8.32 0.319999 7.69 0.709999 7.3L7.29 0.700001C7.68 0.310001 8.31 0.310001 8.7 0.700001C9.09 1.09 9.09 1.72 8.7 2.11L3.83 7H15C15.55 7 16 7.45 16 8C16 8.55 15.55 9 15 9Z" fill="#323232"></path>
    </svg>
  </button>

  <button className="cert-next absolute md:-right-4 right-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/50 rounded-full">
    <svg width="16" height="16" viewBox="0 0 16 16">
      <path d="M1.4175 9H12.5875L7.7075 13.88C7.3175 14.27 7.3175 14.91 7.7075 15.3C8.0975 15.69 8.72749 15.69 9.11749 15.3L15.7075 8.71C16.0975 8.32 16.0975 7.69 15.7075 7.3L9.12749 0.700001C8.73749 0.310001 8.1075 0.310001 7.7175 0.700001C7.3275 1.09 7.3275 1.72 7.7175 2.11L12.5875 7H1.4175C0.867496 7 0.417496 7.45 0.417496 8C0.417496 8.55 0.867496 9 1.4175 9Z" fill="#323232"></path>
    </svg>
  </button>

  <style jsx global>{`
    @media (max-width: 1199px) {
      .certificate-slide {
        width: 100% !important;
      }
    }

    @media (min-width: 1200px) {
      .certificate-slide {
        width: calc(100% - ${peek}px) !important;
      }
    }
  `}</style>

  <Swiper
    modules={[Navigation]}
    spaceBetween={40}
    slidesPerView={"auto"}
    centeredSlides={false}
    onSwiper={(swiper) => {
      setTimeout(() => {
        swiper.params.navigation.prevEl = ".cert-prev";
        swiper.params.navigation.nextEl = ".cert-next";
        swiper.navigation.destroy();
        swiper.navigation.init();
        swiper.navigation.update();
      });
    }}
    navigation={{
      prevEl: ".cert-prev",
      nextEl: ".cert-next",
    }}
    className="mt-4"
  >
    {images.map((src, i) => (
      <SwiperSlide
        key={i}
        className="!w-[520px] certificate-slide"
        style={{ width: "520px" }}
      >
       
      </SwiperSlide>
    ))}
  </Swiper>
</div>

  );
}
