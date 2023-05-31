import React from "react";
import Wrapper from "./Warpper";
import TwitterCard from "./TwitterCard";

const Testimonial = () => {
  const twitterData = [
    {
      id: 1,
      thumb: "https://i.ibb.co/q5qrW6b/Ellipse-14.png",
      name: "Darrell Steward",
      userName: "@darrels",
      post: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.",
      hashTag: "#another",
    },
    {
      id: 2,
      thumb: "https://i.ibb.co/2KLLCB8/Ellipse-14-1.png",
      name: "Leslie Alexander",
      userName: "@lesslie",
      post: "Simply the best. Better than all  he rest. I’d recommend this  product to beginners and  advanced users ",
      hashTag: "#postcrafts",
    },
    {
      id: 3,
      thumb: "https://i.ibb.co/8g6msZJ/Ellipse-14-2.png",
      name: "Jenny Wilson",
      userName: "@jennywilson",
      post: "This is a top quality product. No  need to think twice before making   it live on web.  ",
      hashTag: "#make_it_fast",
    },
    {
      id: 4,
      thumb: "https://i.ibb.co/Q8HH0CC/Ellipse-14-3.png",
      name: "Kristin Watson",
      userName: "@kristinwatson2",
      post: "Finally, I’ve found a template that covers all bases for a bootstrapped startup. We were able to launch in days, not months.",
      hashTag: "#postcrafts",
    },
    {
      id: 5,
      thumb: "https://i.ibb.co/tQtqzjh/Ellipse-14-4.png",
      name: "Guy Hawkins",
      userName: "@jennywilson",
      post: "This is a top quality product. No need to think twice before making it live on web.",
      hashTag: "#make_it_fast",
    },
    {
      id: 6,
      thumb: "https://i.ibb.co/cXwWV67/Ellipse-14-5.png",
      name: "Marvin McKinney",
      userName: "@jennywilson",
      post: "With Postcrafts, it’s quicker with the customer, the customer is more ensured of getting exactly what they ordered, and I’m all for the efficiency.",
      hashTag: "#dev #tools",
    },
    {
      id: 7,
      thumb: "https://i.ibb.co/qrV53jT/Ellipse-14-6.png",
      name: "Annette Black",
      userName: "@jennywilson",
      post: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.",
      hashTag: "#another",
    },
    {
      id: 8,
      thumb: "https://i.ibb.co/Pgwp8v5/Ellipse-14-7.png",
      name: "Floyd Miles",
      userName: "@jennywilson",
      post: "My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.",
      hashTag: "#postcrafts",
    },
  ];
  return (
    <div className="gradient-background">
      <Wrapper>
        <h1 className="text-center text-white text-[42px] pt-[40px]">
          What our customers say
        </h1>
        <p className="mt-[26px] text-[#B7B8BB] text-center">
          Read why thousands of marketers, writers, and <br /> entrepreneurs
          love us so much.
        </p>
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-[28px] mt-[109px]">
          <div className="space-y-[29px]">
            <TwitterCard data={twitterData[0]}></TwitterCard>
            <TwitterCard data={twitterData[4]}></TwitterCard>
          </div>
          <div className="space-y-[29px]">
            <TwitterCard data={twitterData[1]}></TwitterCard>
            <TwitterCard data={twitterData[5]}></TwitterCard>
          </div>
          <div className="space-y-[29px]">
            <TwitterCard data={twitterData[2]}></TwitterCard>
            <TwitterCard data={twitterData[6]}></TwitterCard>
          </div>
          <div className="space-y-[29px]">
            <TwitterCard data={twitterData[3]}></TwitterCard>
            <TwitterCard data={twitterData[7]}></TwitterCard>
          </div>
        </div>
      </Wrapper>
      <hr className="w-full h-px my-8 bg-[#3B3D44] border-0  mt-[120px] lg:mt-[125px]" />
    </div>
  );
};

export default Testimonial;
