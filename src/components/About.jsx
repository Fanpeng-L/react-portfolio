import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="text-md sm:text-xl w-full mb-20 bg-slate-900 text-gray-100"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p
              className="text-4xl sm:text-6xl font-bold inline-block border-b-4 pb-1
             border-[#92D4E0] transition ease-in duration-300 hover:-translate-y-1"
            >
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-3xl sm:text-4xl font-bold">
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
