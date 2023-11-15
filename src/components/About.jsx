import React from "react";

const About = () => {
  return (
    <section
      name="about"
      className="w-full h-screen bg-slate-900 text-gray-100"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#92D4E0]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, I'm Fanpeng, please take a look around.</p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              saepe eveniet iusto nisi vitae iste praesentium inventore
              laudantium dolor cupiditate maiores laborum sed atque consequatur
              non blanditiis. Veniam, fugiat eum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
