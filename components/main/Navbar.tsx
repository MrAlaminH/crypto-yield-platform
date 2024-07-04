"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { HiOutlineBolt } from "react-icons/hi2";
import { HiOutlineTrophy } from "react-icons/hi2";
import { BsStars } from "react-icons/bs";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Navbar for mobile and tablet view */}
      <nav className="fixed w-full z-20 top-0 border-b border-gray-200 dark:border-gray-600 bg-gray-900 md:hidden">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          <Link
            href="https://crypto-yield-platform.vercel.app/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="/logo.png"
              alt="logo"
              width={50}
              height={50}
              className="cursor-pointer hover:animate-slowspin"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Soltitude
            </span>
          </Link>
          <div className="flex">
            <button
              type="button"
              className="font-semibold bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/40 rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-2"
            >
              Wallet Connect
            </button>
          </div>
        </div>
      </nav>

      {/* Existing navbar for desktop view (hidden on mobile and tablet) */}
      <nav className="hidden md:flex fixed w-full z-20 md:top-0 md:border-b border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4 space-x-40">
          <div className="flex items-center space-x-3">
            <Link href="https://crypto-yield-platform.vercel.app/">
              <Image
                src="/logo.png"
                alt="logo"
                width={50}
                height={50}
                className="cursor-pointer hover:animate-slowspin"
              />
            </Link>
            <span className="self-center text-xl font-bold text-white">
              Soltitude
            </span>
          </div>
          <div className="flex items-center space-x-8">
            <ul className="flex flex-row font-medium space-x-8 ">
              <li>
                <Link
                  href="/stake"
                  className="flex items-center gap-2 py-2 px-3 text-blue-700 md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  <MdOutlineRocketLaunch /> Stake
                </Link>
              </li>
              <li>
                <Link
                  href="/unstake"
                  className="flex items-center gap-2 py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  <BsStars /> Unstake
                </Link>
              </li>
              <li>
                <Link
                  href="/defi"
                  className="flex items-center gap-2 py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  <HiOutlineTrophy /> Benefits
                </Link>
              </li>
              <li>
                <Link
                  href="/rewards"
                  className="flex items-center gap-2 py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  <HiOutlineBolt /> Rewards
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <button
              type="button"
              className="font-semibold bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/40 rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-2"
            >
              Wallet Connect
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile bottom navigation (unchanged) */}
      <div className="fixed inset-x-0 bottom-0 z-20 pt-0 bg-gray-900 md:hidden border-t border-gray-200">
        <ul className="flex justify-around py-2">
          <li>
            <Link
              href="/stake"
              className="flex flex-col items-center text-blue-700"
            >
              <MdOutlineRocketLaunch size={24} />
              <span className="text-sm">Stake</span>
            </Link>
          </li>
          <li>
            <Link
              href="/unstake"
              className="flex flex-col items-center text-gray-900 dark:text-white"
            >
              <BsStars size={24} />
              <span className="text-sm">Unstake</span>
            </Link>
          </li>
          <li>
            <Link
              href="/defi"
              className="flex flex-col items-center text-gray-900 dark:text-white"
            >
              <HiOutlineTrophy size={24} />
              <span className="text-sm">Benefits</span>
            </Link>
          </li>
          <li>
            <Link
              href="/rewards"
              className="flex flex-col items-center text-gray-900 dark:text-white"
            >
              <HiOutlineBolt size={24} />
              <span className="text-sm">Rewards</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
