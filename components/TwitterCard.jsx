import React from "react";

const TwitterCard = ({ data }) => {
  const { thumb, name, userName, post, hashTag } = data;
  return (
    <div className=" bg-white p-[20px] rounded-lg">
      <div className="flex justify-between items-center">
        <div className="flex justify-start items-center">
          <img
            src={thumb}
            alt=""
            className="h-[43px] w-[43px] rounded-full mr-[11px]"
          />
          <div>
            <h1 className="font-semibold text-[16px] text-black">{name}</h1>
            <p className="text-[13px] opacity-70 mt-[-2px]">{userName}</p>
          </div>
        </div>
        <img src="twitter.png" alt="" />
      </div>
      <p className="text-[#12141D] text-[16px] mt-[19px]">{post}</p>
      <p className="text-[#0EA5E9]">{hashTag}</p>
    </div>
  );
};

export default TwitterCard;
