import React from "react";
import Wrapper from "./Warpper";

const ExcitingTools = () => {
  const writingTools = [
    {
      id: 1,
      name: "Blog Headlines",
      des: "Write a better blog title with our A.I tool.",
      thumb: "4a.png",
    },
    {
      id: 2,
      name: "Blog Intros",
      des: "Generate a paragraph of blog content using Blog",
      thumb: "3a.svg",
    },
    {
      id: 3,
      name: "Blog Outline",
      des: "Need an attention-grabbing headline for your article?",
      thumb: "1a.png",
    },
    {
      id: 4,
      name: "Blog Conclusions",
      des: "Write a better conclusions with AI writing tool.",
      thumb: "4a.png",
    },
    {
      id: 5,
      name: "Content Rewriter",
      des: "Get AI writer to rewrite your sentence in a different way.",
      thumb: "2a.svg",
    },
    {
      id: 6,
      name: "Product Description",
      des: "Need an attention-grabbing headline for your article?",
      thumb: "3a.svg",
    },
    {
      id: 7,
      name: "Blog Headlines",
      des: "Write a better blog title with our A.I tool.",
      thumb: "1a.png",
    },
    {
      id: 8,
      name: "Blog Headlines",
      des: "Write a better blog title with our A.I tool.",
      thumb: "4a.png",
    },
  ];

  return (
    <div>
      <Wrapper>
        <div className=" lg:mt-[750px] mt-[50px]">
          <h1 className="text-center text-white lg:text-[42px] text-[25px]">
            54 exciting writing tools
          </h1>
          <p className="mt-[26px] text-[#B7B8BB] text-center">
            AI engines take information from various sources and read <br />{" "}
            them like a human would do.
          </p>
          <div className="mt-[61px] grid lg:grid-cols-4 grid-cols-1 gap-[26px]">
            {writingTools.map((tools) => (
              <div
                key={tools.id}
                className="flex bg-[#282A37] p-[21px] rounded-[10px] gap-[19px]"
              >
                <img
                  src={tools.thumb}
                  className="col-span-1 h-[34px] w-[34px]"
                  alt=""
                />
                <div className="col-span-5">
                  <h1 className="text-white font-semibold text-[16px]">
                    {tools.name}
                  </h1>
                  <p className="text-[#B7B8BB] mt-[14px] text-[14px]">
                    {tools.des}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-[16px] font-semibold text-white text-center mt-[68px]">
            See all 54 available tools
          </p>
        </div>
      </Wrapper>
      <hr className="w-full h-px my-8 bg-[#3B3D44] border-0  mt-[100px] lg:mt-[125px]" />
    </div>
  );
};

export default ExcitingTools;
