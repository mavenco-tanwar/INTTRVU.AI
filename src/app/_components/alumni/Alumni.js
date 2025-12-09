"use client";

import React from "react";
import AlumniCard from "./AlumniCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const alumniData = [
  {
    companyLogo: "/person1comp.png",
    review:
      "I enrolled in the Data Science and Machine Learning course at Inttrvu, which provided comprehensive coverage of all aspects of DS, ML, and AI. The course was highly beneficial in enhancing my understanding and significantly contributed to my interview success. Rohit Sir, with his extensive experience, explained each concept with great clarity, making the learning process highly effective. It helped me in landing an excellent job offer with around 145% hike on my previous CTC.",
    userImage: "/person1.png",
    userName: "Kunal Takalkhede",
    userRole: "Data Scientist",
  },
  {
    companyLogo: "/person2comp.png",
    review:
      "The course material was comprehensive and straightforward, directly addressing today’s job market needs. Rohit was always on hand, providing personalized feedback that was crucial for improvement. Mock interviews felt incredibly authentic, boosting my confidence and skill significantly. One of the most astonishing outcomes of this journey was the significant salary hike I achieved, thanks to the negotiation skills learned through the program. I secured a position with a 130% higher salary than my previous role. The number of offers (10+) I received allowed me to choose a role that was not just financially rewarding but also aligned with my career aspirations and values. ",
    userImage: "/person2.png",
    userName: "Nitin Jethwani",
    userRole: "Data Scientist",
  },
  {
    companyLogo: "/person3comp.png",
    review:
      "Rohit sir helped me in the preparation for cracking the product based company in data science with 125% hike. He had provided the immense material on the Golden standard which helped me to crack the interview and one of the most important aspects is the mock Interview. The gaps will be identified and you can feel immense confident while appearing for the next interview.",
    userImage: "/person3.png",
    userName: "Valli Raja Sekar",
    userRole: "Data Scientist II ",
  },
  {
    companyLogo: "/person4comp.png",
    review:
      "Great learning experience!! I successfully secured a new offer with a 300% Salary Hike. The learning experience was structured, practical, and deeply insightful, helping me build strong foundational and advanced skills. Mentors provided exceptional support, ensuring clarity at every step. The focused preparation boosted my confidence and readiness for interviews. ",
    userImage: "/person4.png",
    userName: "Ninad Lambat",
    userRole: "Senior Software Engineer",
  },
  {
    companyLogo: "/person5comp.png",
    review:
      "I received 4 offers from top MNCs with 100% Hike and chose to join NTT DATA, thanks to this exceptional platform for Data Science, Machine Learning, and Generative AI. It offers personalized mentorship, structured learning paths, hands-on projects, and real-world coding exercises. The content is regularly updated to reflect the latest AI advancements, making it ideal for both beginners and professionals. With a strong focus on practical skills and career growth, this platform is highly recommended. ",
    userImage: "/person5.png",
    userName: "Hitesh Patil",
    userRole: "Data Scientist",
  },
  {
    companyLogo: "/person6comp.png",
    review:
      "I attended a data science course offered by INTTRVU.ai and had an excellent experience. The course content is very streamlined and focuses on the most relevant topics for today’s job market and advancements. The pace of teaching is excellent. Mr. Rohit frequently takes feedback from students to ensure everyone is keeping up. There are separate sessions each week dedicated to solving doubts. Through the support of INTTRVU.ai , I received a 100% hike in my first offer from an MNC. Highly recommended for those looking to transition into the data science space. The course is great value for money and time well spent.  ",
    userImage: "/person6.png",
    userName: "Shivam Agrawal",
    userRole: "Data Scientist",
  },
  {
    companyLogo: "/person7comp.png",
    review:
      "I recommend the Intrrvu.ai Data Science course especially for professionals looking to transition into core data science roles from non-technical backgrounds. With 7 years of experience in the finance domain and a commerce degree, I initially thought moving into data science would be an uphill battle. However, this course turned out to be a game-changer for my career. From Hands -On Projects to Exceptional Mentorship and Placement support from Rohit sir and the team , today I am working in the core data science domain with an 80% salary hike.",
    userImage: "/person7.png",
    userName: "Mukul Raman",
    userRole: "Data Scientist",
  },
  {
    companyLogo: "/person8comp.jpg",
    review:
      "I have taken an Interview Preparation course with Inttrvu. The preparation material is very well defined with most likely interview questions, python, SQL coding. I have most likely used interview questions material every time I used to sit for an interview. Also, resume review and feedback discussion with Rohit was really really helpful as he pointed out improvement areas and suggested tips for resume shortlist. With the help of this course, I was able to get an offer for the role of Data Scientist with an 80 % hike.",
    userImage: "/person8.png",
    userName: "Omkar Mirji",
    userRole: "Data Scientist",
  },
  {
    companyLogo: "/person9comp.png",
    review:
      "An excellent online platform for mastering AI and analytics. The lessons are engaging, well-structured and full of real-world applications and thrilled to share that with help of correct guidance and contents , I am able to grab a data analyst role with hike of approx. 70%. A big thankyou to everyone who played a role in this journey ( specially Rohit Mande and my onboarding coordinator Pratik). I wish Rohit and team, a good luck for future as well.",
    userImage: "/person9.png",
    userName: "Sarabjeet Kour",
    userRole: "Business Insight Analyst",
  },
  {
    companyLogo: "/person10comp.png",
    review:
      "I feel fortunate to have discovered Inttrvu.ai. Their study material is updated with current AI/ML trends, it is precise and crisp, which helps you prepare quickly for interviews. They also provide mock interviews which is a crucial part, where you learn to answer questions confidently. The staff and faculty are always available. Rohit Sir, the head of the institute, guides you through every phase, from understanding technical concepts to interview preparation. He keeps you motivated in this competitive field. Thanks to Rohit Sir, under his guidance I secured a data science role with a 70% salary hike!",
    userImage: "/person10.png",
    userName: "Rudesh More",
    userRole: "AI/ML Specialist",
  },
];

function Alumni() {
  
  return (
    <section>
      <div className="py-10 bg-background-2">
        <div className="flex max-w-7xl m-auto max-[400px]:px-4  min-[450px]:px-4 ">
          <div className="lg:max-w-3xl w-full text-center md:text-left">

            {/* Header + Buttons */}
            <div className="flex justify-center md:justify-between   items-center">
              <div className="max-w-[480px]">
                <h2 className="text-3xl sm:text-4xl md:text-5xl leading-tight md:leading-16 mb-6 font-poppins font-semibold">
                  Our alumni experience of the program
                </h2>
              </div>

              {/* Buttons only on desktop */}
             <div className="hidden md:flex gap-3">
  
  {/* PREV BUTTON */}
  <button className="swiper-button-prev-custom cursor-pointer shadow bg-white rounded-full w-[72px] h-[72px] flex justify-center items-center transition-all duration-200 hover:bg-gray-100 active:scale-95 active:bg-gray-200">
    <svg width="16" height="16" viewBox="0 0 16 16">
      <path
        d="M15 9H3.83L8.71 13.88C9.1 14.27 9.1 14.91 8.71 15.3C8.32 15.69 7.69 15.69 7.3 15.3L0.709999 8.71C0.319999 8.32 0.319999 7.69 0.709999 7.3L7.29 0.700001C7.68 0.310001 8.31 0.310001 8.7 0.700001C9.09 1.09 9.09 1.72 8.7 2.11L3.83 7H15C15.55 7 16 7.45 16 8C16 8.55 15.55 9 15 9Z"
        fill="#323232"
      ></path>
    </svg>
  </button>

  {/* NEXT BUTTON */}
  <button
    className="swiper-button-next-custom cursor-pointer shadow bg-white rounded-full w-[72px] h-[72px] flex justify-center items-center transition-all duration-200 hover:bg-gray-100 active:scale-95 active:bg-gray-200"
  >
    <svg width="16" height="16" viewBox="0 0 16 16">
      <path
        d="M1.4175 9H12.5875L7.7075 13.88C7.3175 14.27 7.3175 14.91 7.7075 15.3C8.0975 15.69 8.72749 15.69 9.11749 15.3L15.7075 8.71C16.0975 8.32 16.0975 7.69 15.7075 7.3L9.12749 0.700001C8.73749 0.310001 8.1075 0.310001 7.7175 0.700001C7.3275 1.09 7.3275 1.72 7.7175 2.11L12.5875 7H1.4175C0.867496 7 0.417496 7.45 0.417496 8C0.417496 8.55 0.867496 9 1.4175 9Z"
        fill="#323232"
      ></path>
    </svg>
  </button>

</div>

            </div>

            {/* Slider */}
<Swiper
  modules={[Navigation]}
  // slidesPerView={"auto"}
  spaceBetween={24}
  centeredSlides={false}

  onSwiper={(swiper) => {
    setTimeout(() => {
      swiper.params.navigation.prevEl = ".swiper-button-prev-custom";
      swiper.params.navigation.nextEl = ".swiper-button-next-custom";
      swiper.navigation.destroy();
      swiper.navigation.init();
      swiper.navigation.update();
    });
  }}

  breakpoints={{
    0: {
      spaceBetween: "-20px",
    },
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: "auto", // desktop
    },
  }}

  navigation={{
    prevEl: ".swiper-button-prev-custom",
    nextEl: ".swiper-button-next-custom",
  }}

  className="mt-6"
>
  {alumniData.map((item, index) => (
    <SwiperSlide
      key={index}
      className="lg:!w-[420px] md:!w-[420px] !flex-shrink-0"
      // style={{ width: "420px" }}   // FIXED width (like your 520px example)
    >
      <AlumniCard
        companyLogo={item.companyLogo}
        review={item.review}
        userImage={item.userImage}
        userName={item.userName}
        userRole={item.userRole}
      />
    </SwiperSlide>
  ))}
</Swiper>



          </div>
        </div>
      </div>
    </section>
  );
}

export default Alumni;
