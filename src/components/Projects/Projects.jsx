import React from "react";
import projectData from "../../assets/projectData";
import Card from "./Card";

const Projects = () => {
  return (
    <section
      id="projects"
      className="text-md sm:text-xl w-full mb-20 bg-slate-900 text-gray-100 "
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p
            className="text-4xl sm:text-6xl font-bold inline-block border-b-4 pb-1 
         border-[#92D4E0] transition ease-in duration-300 hover:-translate-y-1"
          >
            Projects
          </p>
          <p className="py-6">My recent projects</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projectData.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
