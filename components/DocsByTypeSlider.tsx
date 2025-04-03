"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";

const categories = [
  "Accounting", "Algebra", "Analysis", "Anthropology", "Archaeology", "Chemistry Tutors",
  "Coding Tutors", "Computer Science", "Elementary Tutors", "French Tutors",
  "Geometry Tutors", "Writing Tutor", "Geometry Tutors", "German Tutors", "GMAT Tutors"
];

interface ArrowProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute -bottom-20 sm:-bottom-16 md:-bottom-26 left-[50%] transform -translate-x-8 sm:-translate-x-10 md:-translate-x-12 bg-white px-2 sm:px-3 md:px-4 py-2 sm:py-3 rounded-md shadow-md text-sm sm:text-base"
    aria-label="Previous"
  >
    {"←"}
  </button>
);

const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute -bottom-20 sm:-bottom-16 md:-bottom-26 right-[50%] transform translate-x-8 sm:translate-x-10 md:translate-x-12 bg-white px-2 sm:px-3 md:px-4 py-2 sm:py-3 rounded-md shadow-md text-sm sm:text-base"
    aria-label="Next"
  >
    {"→"}
  </button>
);

export default function DocsByTypeSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    rows: 5,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    afterChange: (current: number) => setActiveIndex(current),
    responsive: [
      { 
        breakpoint: 1024, 
        settings: { 
          slidesToShow: 3,
          rows: 5
        } 
      },
      { 
        breakpoint: 768, 
        settings: { 
          slidesToShow: 2,
          rows: 4
        } 
      },
      { 
        breakpoint: 640, 
        settings: { 
          slidesToShow: 1,
          rows: 3
        } 
      },
    ],
  };

  return (
    <div className="w-[310px] md:w-[90%] lg:w-[80%] xl:w-[58%] py-10 sm:py-14 md:py-20 mx-4 sm:mx-6 lg:mx-8 xl:mx-30 relative">
      <Image
        src="/vector.svg"
        alt="Vector"
        width={60}
        height={80}
        className="absolute top-4 sm:top-6 md:top-10 left-6 sm:left-16 md:left-24 w-12 sm:w-16 md:w-20"
      />
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 md:mb-7 text-center">
        Documents By Type
      </h1>
      <Slider {...settings}>
        {categories.map((category, index) => (
          <div key={index} className="px-2 sm:px-3 py-2 sm:py-3">
            <div className="bg-white p-4 sm:p-5 md:p-6 rounded-[12px] sm:rounded-[16px] md:rounded-[20px] shadow-md text-center font-bold text-gray-900 text-sm sm:text-base md:text-lg">
              {category}
            </div>
          </div>
        ))}
      </Slider>

      {/* Custom Pagination Dots */}
      <div className="flex justify-center items-center mt-4 sm:mt-5 md:mt-6 gap-1 sm:gap-2">
        {categories.slice(0, Math.ceil(categories.length / 5)).map((_, index) => (
          <span
            key={index}
            className={`w-2 sm:w-3 h-1 sm:h-2 rounded-full transition-all ${
              index === activeIndex ? "bg-gray-900 w-4 sm:w-6" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}