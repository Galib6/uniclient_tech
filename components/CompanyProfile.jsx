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
      <h1 className="font-medium text-[20px] lg:text-[24px] text-white text-center">
        Trusted by nearly 5000+ paying customers
      </h1>
      <div className="flex justify-center items-center">
        <div className="grid lg:grid-cols-4 grid-cols-3 max-w-[941px] lg:mt-[75px] mt-[30px] gap-[20px]">
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
        <div className="lg:mt-[171px] mt-[50px] flex flex-col lg:flex-row justify-center items-center gap-[130px]">
          <div className="relative z-0">
            <img
              src="Ellipse 5.svg"
              className="absolute  top-[-100px] lg:left-[80px] left-[0px] top-0 z-10 "
              alt=""
            />
            <img
              src="Card 1.png"
              className="lg:w-[406px] lg:h-[450px] z-40 "
              alt=""
            />
            <img
              src="Card 2.png"
              className="absolute bottom-[10px] lg:left-[84px] right-[80px] z-30 "
              alt=""
            />
          </div>
          <div className="lg:my-[60px] my-[-80px]">
            <h1 className="lg:text-[42px] text-[30px] text-white leading-tight lg:text-left text-center">
              Create content efficiently <br /> and quickly with great AI <br />{" "}
              writing tools
            </h1>
            <p className="text-[#B7B8BB] my-[31px] lg:text-left text-center">
              150k+ users. No Credit Card Required. Pro designs and <br />{" "}
              writing at no cost. Start for free. Ai Writer Tool | Generate{" "}
              <br /> text for ecom, social media, website, sales, blogs etc.
            </p>
            <div className="flex justify-center lg:justify-start">
              <GradientButton
                text="Start 14 Days Free Trail"
                path=""
              ></GradientButton>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default CompanyProfile;
