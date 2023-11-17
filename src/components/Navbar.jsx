import React from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo1.png";
import { useState } from "react";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const handleClick = () => setShowMobileMenu(!showMobileMenu);

  return (
    <nav
      id="navbar"
      className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-slate-900 text-gray-100"
    >
      <div>
        <img src={Logo} alt="logo" style={{ width: "50px" }} />
      </div>

      {/* Menu */}
      <div>
        <ul className="hidden md:flex">
          <li
            className="hover:transition-all ease-in-out duration-300 hover:underline 
          hover:decoration-[#92D4E0] underline-offset-4 hover:text-[#92D4E0]"
          >
            <a href="#hero">Home</a>
          </li>
          <li
            className="hover:transition-all ease-in-out duration-300 hover:underline 
          hover:decoration-[#92D4E0] underline-offset-4 hover:text-[#92D4E0]"
          >
            <a href="#about">About</a>
          </li>
          <li
            className="hover:transition-all ease-in-out duration-300 hover:underline 
          hover:decoration-[#92D4E0] underline-offset-4 hover:text-[#92D4E0]"
          >
            <a href="#skills">Skills</a>
          </li>
          <li
            className="hover:transition-all ease-in-out duration-300 hover:underline 
          hover:decoration-[#92D4E0] underline-offset-4 hover:text-[#92D4E0]"
          >
            <a href="#work">Projects</a>
          </li>
          <li
            className="hover:transition-all ease-in-out duration-300 hover:underline 
          hover:decoration-[#92D4E0] underline-offset-4 hover:text-[#92D4E0]"
          >
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!showMobileMenu ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !showMobileMenu
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li
          className="py-6 text-3xl hover:font-bold hover:text-[#92D4E0] duration-600 
        transition ease-in"
        >
          Home
        </li>
        <li
          className="py-6 text-3xl hover:font-bold hover:text-[#92D4E0] duration-600 
        transition ease-in"
        >
          About
        </li>
        <li
          className="py-6 text-3xl hover:font-bold hover:text-[#92D4E0] duration-600 
        transition ease-in"
        >
          Skills
        </li>
        <li
          className="py-6 text-3xl hover:font-bold hover:text-[#92D4E0] duration-600 
        transition ease-in"
        >
          Projects
        </li>
        <li
          className="py-6 text-3xl hover:font-bold hover:text-[#92D4E0] duration-600 
        transition ease-in"
        >
          Contact
        </li>
      </ul>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li
            className="w-[160px] h-[60px] flex rounded-md justify-between items-center 
          ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500 opacity-70 hover:opacity-100"
          >
            <a
              className="flex justify-between items-center w-full text-gray-100"
              href="https://www.linkedin.com/in/lifanpeng/"
              rel="noreferrer"
              target="_blank"
            >
              Linkedin
              <FaLinkedin size={30} />
            </a>
          </li>
          <li
            className="w-[160px] h-[60px] flex rounded-md justify-between items-center 
          ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-800 opacity-70 hover:opacity-100"
          >
            <a
              className="flex justify-between items-center w-full text-gray-100"
              href="https://github.com/Fanpeng-L"
              rel="noreferrer"
              target="_blank"
            >
              Github
              <FaGithub size={30} />
            </a>
          </li>
          <li
            className="w-[160px] h-[60px] flex rounded-md justify-between items-center 
          ml-[-100px] hover:ml-[-10px] duration-300 bg-emerald-400 opacity-70 hover:opacity-100"
          >
            <a
              className="flex justify-between items-center w-full text-gray-100"
              href="mailto:fanpenglfp@gmail.com"
            >
              Email
              <HiOutlineMail size={30} />
            </a>
          </li>
          <li
            className="w-[160px] h-[60px] flex rounded-md justify-between items-center 
          ml-[-100px] hover:ml-[-10px] duration-300 bg-indigo-500 opacity-70 hover:opacity-100"
          >
            <a
              className="flex justify-between items-center w-full text-gray-100"
              href="/"
            >
              Resume
              <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
