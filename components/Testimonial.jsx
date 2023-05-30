import React from "react";
import Wrapper from "./Warpper";

const Testimonial = () => {
  return (
    <div className="gradient-background">
      <Wrapper>
        <h1 className="text-center text-white text-[42px] pt-[40px]">
          What our customers say
        </h1>
        <p className="mt-[26px] text-[#B7B8BB] text-center">
          Read why thousands of marketers, writers, and <br /> entrepreneurs
          love us so much.
        </p>
        <div>
          <div className="w-[306px] bg-white p-[20px] rounded-lg">
            <div className="flex justify-between items-center">
              <div className="flex justify-start items-center">
                <img
                  src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                  alt=""
                  className="h-[43px] w-[43px] rounded-full mr-[11px]"
                />
                <div>
                  <h1 className="font-semibold text-[16px] text-black">
                    Darrell Steward
                  </h1>
                  <p className="text-[13px] opacity-70 mt-[-2px]">@darrels</p>
                </div>
              </div>
              <img src="twitter.png" alt="" />
            </div>
            <p className="text-[#12141D] text-[16px] mt-[19px]">
              Simply the best. Better than all <br /> the rest. I’d recommend
              this <br />
              product to beginners and <br /> advanced users. <br />{" "}
              <span className="text-[#0EA5E9]">#postcrafts</span>
            </p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Testimonial;
