import React from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

const data = [
  { id: 1, name: "Demos", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Blog" },
  { id: 4, name: "Pages", url: "/contact" },
  { id: 4, name: "Contact", url: "/contact" },
];

const MenuMobile = ({}) => {
  return (
    <ul className="flex flex-col md:hidden  absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-[#12141D] border-t text-black">
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <li className="cursor-pointer  py-4 px-5 border-b flex flex-col relative">
              <div className="flex justify-between items-center text-white">
                {item.name}
              </div>
            </li>
          </React.Fragment>
        );
      })}
      <li className="cursor-pointer  py-4 px-5 border-b flex flex-col relative">
        <div className="flex justify-between items-center text-white">
          Sign in
        </div>
      </li>
      <li className="cursor-pointer  py-4 px-5 border-b flex flex-col relative">
        <div className="flex justify-between items-center text-white">
          Get Started Free
        </div>
      </li>
    </ul>
  );
};

export default MenuMobile;
