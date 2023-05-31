"use client";
import React, { useRef, useState } from "react";
import GradientButton from "./GradientButton";
import Link from "next/link";

const TopBanner = () => {
  const [color, setColor] = useState("fill-white");
  const iconRef = useRef(null);

  const handleMouseEnter = () => {
    if (iconRef.current) {
      setColor("fill-blue-600");
    }
  };

  const handleMouseLeave = () => {
    if (iconRef.current) {
      setColor("fill-white");
    }
  };

  return (
    <div className="mt-[50px] lg:mb-[50px] mb-0 lg:mt-[125px] relative">
      <h1 className="text-[30px] lg:text-[60px] leading-tight text-center text-white">
        Write better <br /> content for your <br />
        <span className="gradient-text ">Facebook Ads</span>
      </h1>
      <p className="mt-[29px] text-[12px] lg:text-[18px]  text-center text-[#FAFAFA] opacity-[0.7]">
        Artificial intelligence writting tool helps you create blogs, <br />{" "}
        social media websites and much more.
      </p>
      <div className="mt-[20px] lg:mt-[46px] flex flex-col items-center justify-center">
        <GradientButton
          text="Start 14 days Free Trial"
          path=""
        ></GradientButton>
        <Link href="" className="   ">
          <button
            className="flex justify-center items-center text-[8] lg:text-[16px] custom-btn-without-border py-[6.5px] px-[41px] mt-[13px]"
            ref={iconRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {" "}
            <span className="mr-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className={`bi bi-play-circle-fill ${color} `}
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />{" "}
              </svg>
            </span>
            Watch Demo
          </button>
        </Link>
        <hr className="w-full h-px my-8 bg-[#3B3D44] border-0  mt-[50px] lg:mt-[125px]" />
      </div>
    </div>
  );
};

export default TopBanner;
