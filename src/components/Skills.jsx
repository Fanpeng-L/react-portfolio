import React from "react";
import css from "../assets/css.png";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import node from "../assets/node.png";
import python from "../assets/python.png";
import mongo from "../assets/mongo.png";
import git from "../assets/git.png";
import express from "../assets/express.png";

const Skills = () => {
  return (
    <section
      id="skills"
      className="text-md sm:text-xl w-full mb-20 bg-slate-900 text-gray-100"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p
            className="text-4xl sm:text-6xl  font-bold inline-block border-b-4 pb-1 border-[#92D4E0] 
          transition ease-in duration-300 hover:-translate-y-1"
          >
            Skills
          </p>
          <p className="py-4">These are the skills that I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-3 sm:grid-cols-6 gap-4 text-center py-8">
          <div className="hover:scale-110 duration-300">
            <img className="w-16 mx-auto" src={html} alt="html icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="hover:scale-110 duration-300">
            <img className="w-16 mx-auto" src={css} alt="css icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="hover:scale-110 duration-300">
            <img
              className="w-16 mx-auto"
              src={javascript}
              alt="javascript icon"
            />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="hover:scale-110 duration-300">
            <img className="w-16 mx-auto" src={react} alt="react icon" />
            <p className="my-4">React</p>
          </div>
          <div className="hover:scale-110 duration-300">
            <img className="w-16 mx-auto" src={python} alt="html icon" />
            <p className="my-4">Python</p>
          </div>
          <div className="hover:scale-110 duration-300">
            <img className="w-16 mx-auto" src={node} alt="html icon" />
            <p className="my-4">Node</p>
          </div>
          <div className="hover:scale-110 duration-300">
            <img className="w-16 mx-auto" src={express} alt="express icon" />
            <p className="my-4">Express</p>
          </div>
          <div className="hover:scale-110 duration-300">
            <img className="w-16 mx-auto" src={mongo} alt="html icon" />
            <p className="my-4">Mongodb</p>
          </div>
          <div className="hover:scale-110 duration-300">
            <img className="w-16 mx-auto" src={git} alt="git icon" />
            <p className="my-4">Git</p>
          </div>
          <div className="hover:scale-110 duration-300">
            <img className="w-16 mx-auto" src={tailwind} alt="tailwind icon" />
            <p className="my-4">Tailwind</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
