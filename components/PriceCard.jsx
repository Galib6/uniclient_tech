import React from "react";
import Wrapper from "./Warpper";

const PriceCard = () => {
  return (
    <div>
      <Wrapper>
        <h1 className="text-center text-white lg:text-[42px] text-[25px] lg:pt-[40px] pt-[20px] leading-tight">
          Make the wise decision <br /> for your business
        </h1>
        <p className="mt-[20px] text-[#B7B8BB] text-center">
          Choose from our affordable 3 packages
        </p>
        <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-[24px] gap-[15px] ">
          <div className="lg:mt-[67px] mt-[16px] bg-[#282A37] p-[30px] rounded-[15px]">
            <p className="font-16px text-white">Starter Plan</p>
            <h1 className="mt-[28px] font-semibold text-[42px] text-white">
              $29<span className="text-[18px] font-normal">/month</span>
            </h1>
            <p className="mt-[14px] text-[#B7B8BB]">
              This package is suitable for teams <br /> 1-15 people.
            </p>
            <h1 className="mt-[42px] font-bold text-[16px] text-white">
              What’s included:
            </h1>
            <p className="mt-[15px] text-[#B7B8BB] leading-loose">
              10 GB Dedicated Hosting Free <br /> Best for Developers,
              Freelancers <br /> 1 Year Support{" "}
            </p>
            <button className="text-white p-[15px] border border-[#12141D] w-full flex justify-center rounded-lg gradient-seceondary mt-[98px]">
              Get Started
            </button>
          </div>

          <div className="lg:mt-[67px] mt-[16px] bg-[#282A37] p-[30px] rounded-[15px]">
            <p className="font-16px text-white">Starter Plan</p>
            <h1 className="mt-[28px] font-semibold text-[42px] text-white">
              $79<span className="text-[18px] font-normal">/month</span>
            </h1>
            <p className="mt-[14px] text-[#B7B8BB]">
              This package is suitable for teams <br /> 1-100 people.
            </p>
            <h1 className="mt-[42px] font-bold text-[16px] text-white">
              What’s included:
            </h1>
            <p className="mt-[15px] text-[#B7B8BB] leading-loose">
              15 GB Dedicated Hosting Free <br /> Best for Developers,
              Freelancers <br /> 5 Year Support <br /> Free Custom Domain <br />
              Basic Statistics
            </p>
            <button className="text-white p-[15px] border border-[#12141D] w-full flex justify-center rounded-lg gradient mt-[30px]">
              Get Started
            </button>
          </div>

          <div className="lg:mt-[67px] mt-[16px] bg-[#282A37] p-[30px] rounded-[15px]">
            <p className="font-16px text-white">Starter Plan</p>
            <h1 className="mt-[28px] font-semibold text-[42px] text-white">
              $129<span className="text-[18px] font-normal">/month</span>
            </h1>
            <p className="mt-[14px] text-[#B7B8BB]">
              This package is suitable for teams <br /> 1-15 people.
            </p>
            <h1 className="mt-[42px] font-bold text-[16px] text-white">
              What’s included:
            </h1>
            <p className="mt-[15px] text-[#B7B8BB] leading-loose">
              15 GB Dedicated Hosting Free <br /> Best for Developers,
              Freelancers <br /> Unlimited Year Support <br /> Free Custom
              Domain <br />
              Basic Statistics
            </p>
            <button className="text-white p-[15px] border border-[#12141D] w-full flex justify-center rounded-lg gradient-seceondary mt-[30px]">
              Get Started
            </button>
          </div>
        </div>
      </Wrapper>
      <hr className="w-full h-px my-8 bg-[#3B3D44] border-0  mt-[45px] lg:mt-[45px]" />
    </div>
  );
};

export default PriceCard;
