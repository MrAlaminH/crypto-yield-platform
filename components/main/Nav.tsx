"use client";
import React, { useState } from "react";
import Image from "next/image";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { HiOutlineBolt } from "react-icons/hi2";
import { HiOutlineTrophy } from "react-icons/hi2";
import { BsStars } from "react-icons/bs";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center  space-x-3">
          <a href="#home">
            <Image
              src="/logo.png"
              alt="logo"
              width={50}
              height={50}
              className="cursor-pointer hover:animate-slowspin"
            />
          </a>

          <span className="self-center text-xl font-bold text-white">
            Soda-Stake
          </span>
        </div>

        <div className="md:hidden">
          <button
            type="button"
            className="text-gray-200 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
  
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:flex md:items-center md:w-auto `}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#Home"
                className="flex items-center gap-2  py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                <MdOutlineRocketLaunch /> Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="flex items-center gap-2  py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                <BsStars />
                About
              </a>
            </li>
            <li>
              <a
                href="#benifit"
                className="flex items-center gap-2  py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                <HiOutlineTrophy />
                 Benefits
              </a>
            </li>
            <li>
              <a
                href="/stake"
                className="flex items-center gap-2  py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                target="_blank"
              >
                <HiOutlineBolt /> Get started
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

