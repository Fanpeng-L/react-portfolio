import React from "react";
import workImg from "../assets/workImg.jpeg";
import realEstate from "../assets/realestate.jpg";

const Work = () => {
  return (
    <section className="bg-slate-900 text-gray-100">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#92D4E0]">
            Work
          </p>
          <p className="py-6">Check out my recent work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3">
          <div
            style={{ backgroundImage: `url(${workImg})` }}
            className="shadow-lg shadow-slate-800 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-gray-100 tracking-wider">
                React App
              </span>
              <div className="pt-4 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
