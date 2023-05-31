import React from "react";
import Wrapper from "./Warpper";

const Footer = () => {
  return (
    <div>
      <footer class="text-gray-600 body-font">
        <div className="max-w-[1295px] mx-auto lg:mt-[90px] mt-[20px]">
          <div class="gradient rounded-lg">
            <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
              <p class="lg:text-[32px] text-[18px] font-semibold  text-white sm:ml-6 sm:mt-0 mt-4">
                It will help you improve your writing <br /> & bring ideas more
                clearly.
              </p>
              <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                <button className="lg:px-[18px] lg:py-[20.5px] px-[10px] py-[12px] bg-white rounded-lg text-[16px] font-semibold">
                  Start 14 Days Free Trail
                </button>
              </span>
            </div>
          </div>
        </div>
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap md:text-left text-center order-first">
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-mediu text-white tracking-widest text-[16px] mb-3">
                Company
              </h2>
              <nav class="list-none text-[14px] mb-10 space-y-4 opacity-[0.8]">
                <li>
                  <a class=" text-white hover:text-gray-800">About</a>
                </li>
                <li>
                  <a class=" text-white hover:text-gray-800">Feature</a>
                </li>
                <li>
                  <a class=" text-white hover:text-gray-800">Works</a>
                </li>
                <li>
                  <a class=" text-white hover:text-gray-800">Career</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-mediu text-white tracking-widest text-[16px] mb-3">
                Help
              </h2>
              <nav class="list-none text-[14px] mb-10 space-y-4 opacity-[0.8]">
                <li>
                  <a class=" text-white hover:text-gray-800">
                    Customer Support
                  </a>
                </li>
                <li>
                  <a class=" text-white hover:text-gray-800">
                    Delivery Details
                  </a>
                </li>
                <li>
                  <a class=" text-white hover:text-gray-800">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a class=" text-white hover:text-gray-800">Privecy Policy</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-mediu text-white tracking-widest text-[16px] mb-3">
                Resource
              </h2>
              <nav class="list-none text-[14px] mb-10 space-y-4 opacity-[0.8]">
                <li>
                  <a class=" text-white hover:text-gray-800">Free eBooks</a>
                </li>
                <li>
                  <a class=" text-white hover:text-gray-800">
                    Development Tutorial
                  </a>
                </li>
                <li>
                  <a class=" text-white hover:text-gray-800">How to - Blog</a>
                </li>
                <li>
                  <a class=" text-white hover:text-gray-800">
                    Youtube Playlist
                  </a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-mediu text-white tracking-widest text-[16px] mb-3">
                Links
              </h2>
              <nav class="list-none text-[14px] mb-10 space-y-4 opacity-[0.8]">
                <li>
                  <a class=" text-white hover:text-gray-800">Free eBooks</a>
                </li>
                <li>
                  <a class=" text-white hover:text-gray-800">
                    Development Tutorial
                  </a>
                </li>
                <li>
                  <a class=" text-white hover:text-gray-800">How to - Blog</a>
                </li>
                <li>
                  <a class=" text-white hover:text-gray-800">
                    Youtube Playlist
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
