"use client";
import { useState, useEffect } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import Wrapper from "./Warpper";
import Link from "next/link";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("-translate-y-[80px]");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`w-full h-[50px] md:h-[80px] bg-transparent flex items-center justify-between z-20 sticky top-0 transition-transform duration-300  ${show}`}
    >
      <Wrapper className="h-[60px] flex justify-between items-center">
        <div className="flex justify-center items-center">
          <Link href="/">
            <img src="company.png" className="mr-[58px]" />
          </Link>

          <Menu />
        </div>

        {mobileMenu && <MenuMobile />}

        <div className="flex items-center gap-2 ml-[-120px] ">
          <Link href="" className="  custom-btn py-[13px] px-[20px]">
            <button>Sign in</button>
          </Link>
          <Link
            href=""
            className=" text-white text-[16px] gradient-primary rounded-[5px] py-[13px] px-[20px] "
          >
            <button>Get Started Free</button>
          </Link>

          {/* Mobile icon start */}
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2">
            {mobileMenu ? (
              <VscChromeClose
                className="text-[16px]"
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <BiMenuAltRight
                className="text-[20px]"
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div>
          {/* Mobile icon end */}
        </div>
      </Wrapper>
    </header>
  );
};

export default Navbar;
