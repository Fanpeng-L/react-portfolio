import React from "react";

const Card = ({ id, image, title, demoLink, codeLink }) => {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="shadow-lg shadow-slate-700 group container rounded-md flex 
        justify-center items-center mx-auto content-div transition ease-in duration-500
        hover:-translate-y-2"
    >
      <div className="opacity-0 transition ease-in group-hover:opacity-100 ">
        <span
          className="text-2xl font-bold text-gray-100 tracking-wider flex 
          justify-center items-center"
        >
          {title}
        </span>
        <div className="pt-4 text-center">
          <a href={demoLink} target="_blank" rel="noreferrer">
            <button
              className="text-center rounded-lg px-4 py-3 m-2 bg-white
               text-slate-700 text-lg transition ease-in duration-300 
               hover:scale-105 hover:font-bold"
            >
              Demo
            </button>
          </a>
          <a href={codeLink} target="_blank" rel="noreferrer">
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
  );
};

export default Card;
