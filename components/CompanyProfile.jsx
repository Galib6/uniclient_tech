import React from "react";
import Wrapper from "./Warpper";
import GradientButton from "./GradientButton";

const CompanyProfile = () => {
  const company = [
    {
      id: 1,
      path: "Logo-1.png",
    },
    {
      id: 2,
      path: "Logo-2.png",
    },
    {
      id: 3,
      path: "Logo-3.png",
    },
    {
      id: 4,
      path: "Logo-4.png",
    },
    {
      id: 5,
      path: "Logo-5.png",
    },
    {
      id: 6,
      path: "Logo-6.png",
    },
    {
      id: 7,
      path: "Logo-7.png",
    },
    {
      id: 8,
      path: "Logo-8.png",
    },
  ];

  return (
    <div className="">
      <h1 className="font-medium text-[24px] text-white text-center">
        Trusted by nearly 5000+ paying customers
      </h1>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-4 max-w-[941px] mt-[75px] gap-[20px]">
          {company.map((comp) => (
            <img
              key={comp.id}
              className="h-auto w-auto p-2  filter brightness-50 invert"
              src={comp.path}
              alt=""
            />
          ))}
        </div>
      </div>
      <Wrapper>
        <div className="mt-[171px] flex justify-center items-center gap-[130px]">
          <div className="relative">
            <img
              src="Ellipse 5.svg"
              className="absolute right-[-200px] top-[-50px] z-10"
              alt=""
            />
            <img src="Card 1.png" className="w-[406px] h-[450px] z-20" alt="" />
            <img
              src="Card 2.png"
              className="absolute bottom-[10px] left-[84px] z-30"
              alt=""
            />
          </div>
          <div className="my-[60px]">
            <h1 className="text-[42px] text-white leading-tight">
              Create content efficiently <br /> and quickly with great AI <br />{" "}
              writing tools
            </h1>
            <p className="text-[#B7B8BB] my-[31px]">
              150k+ users. No Credit Card Required. Pro designs and <br />{" "}
              writing at no cost. Start for free. Ai Writer Tool | Generate{" "}
              <br /> text for ecom, social media, website, sales, blogs etc.
            </p>
            <GradientButton
              text="Start 14 Days Free Trail"
              path=""
            ></GradientButton>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default CompanyProfile;
