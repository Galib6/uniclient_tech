import React from "react";
import Link from "next/link";

const data = [
  { id: 1, name: "Demos", url: "/" },
  { id: 3, name: "About", url: "/about" },
  { id: 4, name: "Blog", url: "/blog" },
  { id: 5, name: "Pages", url: "/pages" },
  { id: 6, name: "Contact", url: "/contact" },
];

const Menu = () => {
  return (
    <ul className="hidden md:flex items-center gap-[40px] font-medium text-[16px] text-white">
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <Link href={item.url}>
              <li className="cursor-pointer flex items-center gap-2 relative">
                {item.name}
              </li>
            </Link>
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default Menu;
