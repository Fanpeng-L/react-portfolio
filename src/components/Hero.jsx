import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import profile from "../assets/profile.png";

const Hero = () => {
  return (
    <main
      id="hero"
      className="w-full h-screen bg-slate-900 text-gray-100 pt-12 sm:pt-0 text-md sm:text-xl "
    >
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p>Hi, my name is</p>
        <h1 className="pt-1 text-4xl sm:text-6xl font-bold text-[#92D4E0]">
          Fanpeng Li
        </h1>
        <h2 className="pt-2 text-3xl sm:text-5xl font-bold">
          A Web Developer 👩🏻‍💻
        </h2>
        <div className="flex flex-col-reverse items-center justify-between sm:flex-row mt-6 sm:mt-0">
          <p className="py-4 max-w-[600px]">
            I am ambitious and have a strong passion for technologies. I love
            challenges and learning new things.
          </p>
          <div className="w-36 sm:w-48">
            <img
              src={profile}
              alt="profile"
              className="transition ease-in duration-300 hover:-translate-y-1"
            />
          </div>
        </div>
        <div>
          <a href="#work">
            <button
              className="group text-white border-2 px-6 py-3 my-2 flex items-center 
          rounded-md transition ease-in duration-300 hover:-translate-y-2 hover:bg-[#92D4E0] hover:text-[#272727] hover:border-[#92D4E0]"
            >
              View My Works
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </a>
        </div>
      </div>
    </main>
  );
};

export default Hero;
