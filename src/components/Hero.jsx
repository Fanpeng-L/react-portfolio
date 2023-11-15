import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Profile from "../assets/profile_picture.png";

const Hero = () => {
  return (
    <main className="w-full h-screen bg-slate-900 text-gray-100 pt-12 sm:pt-0 ">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p>Hi, my name is</p>
        <h1 className="pt-1 text-4xl sm:text-6xl font-bold text-[#92D4E0]">
          Fanpeng Li
        </h1>
        <h2 className="pt-2 text-3xl sm:text-5xl font-bold">
          👩🏻‍💻 Web Developer
        </h2>
        <div className="flex flex-col-reverse items-center justify-around sm:flex-row mt-6 sm:mt-0">
          <p className="py-4 max-w-[600px]">
            I am ambitious and have a strong passion for technologies! I love
            challenges and learning new things everyday. myself and strive to
            learn every day. I'm proficient in ReactJS, Node.js, Express.js,
            MongoDB, and more. My objective is simply to be the best developer
            that I can be and contribute positively to the tech industry.
          </p>
          <div className="w-36 sm:w-48">
            <img src={Profile} alt="profile" />
          </div>
        </div>
        <div>
          <button className="group text-white border-2 px-6 py-3 my-2 flex items-center rounded-md hover:bg-[#92D4E0] hover:text-[#272727] hover:border-[#92D4E0]">
            View My Works
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </main>
  );
};

export default Hero;
