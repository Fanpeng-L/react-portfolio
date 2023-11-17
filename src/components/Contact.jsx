import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full bg-slate-900 text-slate-100 flex justify-center 
    items-center"
    >
      <form
        method="post"
        action="https://getform.io/f/c85ece66-6403-469d-aa59-8f18b83612ee"
        className="flex flex-col max-w-[400px] sm:max-w-[600px] "
      >
        <div className="pb-2">
          <p className="text-4xl font-bold inline border-b-4 border-[#92D4E0]">
            Contact Me
          </p>
          <p className="py-6">
            <a
              href="mailto:fanpenglfp@gmail.com"
              className="font-bold transition ease-in-out hover:text-[#92D4E0] 
              hover:scale-105  cursor-pointer pr-2 inline-block"
            >
              📭 Email me on here
            </a>
            or submit the form below to contact me
          </p>
        </div>
        <div className="flex flex-col">
          <input
            className="bg-slate-100 p-2 rounded-md"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="my-4 p-2 bg-slate-100 rounded-md"
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            className="bg-slate-100 p-2 rounded-md"
            name="message"
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button
            className="text-slate-100 border-2 px-6 py-3 my-8 mx-auto rounded-md 
          flex items-center hover:bg-[#92D4E0] mt-4 hover:text-slate-800 
          hover:scale-110 hover:border-[#92D4E0] transition ease-in-out"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
