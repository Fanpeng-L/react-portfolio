import React from "react";
import githubsearch from "../assets/github-search.png";
import realEstate from "../assets/realestate.jpg";

const Work = () => {
  return (
    <section
      id="work"
      className="text-md sm:text-xl w-full mb-20 bg-slate-900 text-gray-100 "
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p
            className="text-4xl sm:text-6xl font-bold inline-block border-b-4 pb-1 border-[#92D4E0]
          transition ease-in duration-300 hover:-translate-y-1"
          >
            Work
          </p>
          <p className="py-6">Check out my recent work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div
            style={{ backgroundImage: `url(${githubsearch})` }}
            className="shadow-lg shadow-slate-800 group container rounded-md flex 
            justify-center items-center mx-auto content-div transition ease-in duration-500
            hover:-translate-y-2"
          >
            <div className="opacity-0 transition ease-in group-hover:opacity-100 ">
              <span
                className="text-2xl font-bold text-gray-100 tracking-wider flex 
              justify-center items-center"
              >
                Github Profile Search
              </span>
              <div className="pt-4 text-center">
                <a
                  href="https://fanpeng-l.github.io/search-github-profile/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2 bg-white
                   text-slate-700 text-lg transition ease-in duration-300 
                   hover:scale-105 hover:font-bold"
                  >
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Fanpeng-L/search-github-profile"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2 bg-white
                   text-slate-700 transition ease-in duration-300 hover:font-bold 
                   hover:scale-105 text-lg"
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${realEstate})` }}
            className="shadow-lg shadow-slate-800 group container rounded-md flex 
            justify-center items-center mx-auto content-div transition ease-in duration-500
            hover:-translate-y-2"
          >
            <div className="opacity-0 transition ease-in group-hover:opacity-100">
              <span
                className="text-2xl font-bold text-gray-100 tracking-wider flex 
              justify-center items-center"
              >
                Real Estate App
              </span>
              <div className="pt-4 text-center">
                <a href="/">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2 bg-white
                    text-slate-700 transition ease-in duration-300 hover:font-bold 
                    hover:scale-105 text-lg"
                  >
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2 bg-white
                    text-slate-700 transition ease-in duration-300 hover:font-bold 
                    hover:scale-105 text-lg"
                  >
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
