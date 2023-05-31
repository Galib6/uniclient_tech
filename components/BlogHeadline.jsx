"use client";
import React, { useState } from "react";
import Wrapper from "./Warpper";

const BlogHeadline = () => {
  const [headlines, setHeadline] = useState("Blog Headlines");

  const handleCangleTitle = (value) => {
    setHeadline(value);
  };

  return (
    <div>
      <Wrapper>
        <h1 className="lg:text-[42px] text-[25px] text-center text-white mt-[28px] leading-tight">
          Mixland helps you <br /> build beautiful website
        </h1>
        <div className="grid lg:grid-cols-3 grid-cols-1 mt-[83px] gap-[49px] mb-[126px]">
          <div className="col-span-1 space-y-[10px] place-content-center ">
            <button
              className={`text-white p-[15px] border border-[#282A37] w-full flex justify-start rounded-lg ${
                headlines === "Blog Headlines"
                  ? "gradient"
                  : "gradient-seceondary"
              }`}
              onClick={() => handleCangleTitle("Blog Headlines")}
            >
              Blog Headlines
            </button>
            <button
              className={`text-white p-[15px] border border-[#282A37] w-full flex justify-start rounded-lg ${
                headlines === "Blog Intros" ? "gradient" : "gradient-seceondary"
              }`}
              onClick={() => handleCangleTitle("Blog Intros")}
            >
              Blog Intros
            </button>
            <button
              className={`text-white p-[15px] border border-[#282A37] w-full flex justify-start rounded-lg ${
                headlines === "Content Rewriter"
                  ? "gradient"
                  : "gradient-seceondary"
              }`}
              onClick={() => handleCangleTitle("Content Rewriter")}
            >
              Content Rewriter
            </button>
            <button
              className={`text-white p-[15px] border border-[#282A37] w-full flex justify-start rounded-lg ${
                headlines === "Facebook Ads"
                  ? "gradient"
                  : "gradient-seceondary"
              }`}
              onClick={() => handleCangleTitle("Facebook Ads")}
            >
              Facebook Ads
            </button>
            <button
              className={`text-white p-[15px] border border-[#282A37] w-full flex justify-start rounded-lg ${
                headlines === "Product Description"
                  ? "gradient"
                  : "gradient-seceondary"
              }`}
              onClick={() => handleCangleTitle("Product Description")}
            >
              Product Description
            </button>
            <button
              className={`text-white p-[15px] border border-[#282A37] w-full flex justify-start rounded-lg ${
                headlines === "PAS Copywriting Formula"
                  ? "gradient"
                  : "gradient-seceondary"
              }`}
              onClick={() => handleCangleTitle("PAS Copywriting Formula")}
            >
              PAS Copywriting Formula
            </button>
          </div>
          <div className="col-span-2">
            <div className="max-w-2xl transition-colors ease-linear shadow-md">
              <div className="w-full h-12 rounded-t-lg bg-[#282A37] flex justify-start items-center space-x-1.5 px-4">
                <span className="w-3 h-3 border-2 border-transparent border-red-400 rounded-full bg-red-400  "></span>
                <span className="w-3 h-3 border-2 border-transparent border-yellow-400 rounded-full bg-yellow-400 "></span>
                <span className="w-3 h-3 border-2 border-transparent border-green-400 rounded-full bg-green-400 "></span>
              </div>
              <div className="bg-[#282A37] border-t-0 w-full p-[29px] rounded-b-lg">
                <p className="text-[#B7B8BB] text-[16px] font-semibold border-b border-[#313342] pb-[20px]">
                  4 {headlines} Genarated
                </p>
                <h1 className="text-[18px] text-white my-[22px] font-semibold border-b pb-[20px] border-[#313342]">
                  Create original content that ranks for SEO
                </h1>
                <h1 className="text-[18px] text-white my-[22px] font-semibold border-b pb-[20px] border-[#313342]">
                  Any mechanical keyboard enthusiasts in design?
                </h1>
                <h1 className="text-[18px] text-white my-[22px] font-semibold border-b pb-[20px] border-[#313342]">
                  The More Important the Work, the More Important the Rest
                </h1>
                <h1 className="text-[18px] text-white my-[22px] font-semibold border-b pb-[20px] border-[#313342]">
                  How to design a product that can grow itself 10x in year
                </h1>
                <h1 className="text-[18px] text-white mt-[22px] font-semibold ">
                  Any mechanical keyboard enthusiasts in design?
                </h1>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default BlogHeadline;
