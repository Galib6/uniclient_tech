import Link from "next/link";
import React from "react";

const GradientButton = ({ text, path, classes }) => {
  return (
    <Link
      href={path}
      className=" text-white text-[10px] lg:text-[16px] gradient-primary rounded-[5px] py-[13px] px-[20px] "
    >
      <button>{text}</button>
    </Link>
  );
};

export default GradientButton;
