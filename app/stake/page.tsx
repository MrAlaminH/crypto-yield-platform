import React from "react";
import { FiDollarSign } from "react-icons/fi";
import Stats from "@/components/sub/Stats";

const Hero: React.FC = () => {
  return (
    <section
      id="stake"
      className="relative flex flex-col items-center justify-center min-h-screen p-4  isolate  bg-gray-900 text-white"
      style={{
        overflowX: "hidden", // Prevent horizontal scrolling
      }}
    >
      {/* Background elements */}
      <svg
        className="absolute inset-0 -z-10 h-full w-full  stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
            width="200"
            height="200"
            x="100%"
            y="-1"
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none"></path>
          </pattern>
        </defs>
        <svg x="50%" y="-1" className="overflow-visible fill-gray-800/20">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth="0"
          ></path>
        </svg>
        <rect
          width="100%"
          height="100%"
          strokeWidth="0"
          fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
        ></rect>
      </svg>
      <div
        className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
        aria-hidden="true"
      >
        <div
          className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
        ></div>
      </div>

      <div className="p-6 rounded-lg shadow-lg max-w-md mx-auto relative py-20 ">
        {/* Adjusted top padding to account for navbar height */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-600">Soda Stake</h1>
          <p className="mt-2 text-lg">TON liquid staking</p>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 overflow-hidden mx-auto md:max-w-3xl md:w-full w-full max-w-md p-6  bg-gradient-to-r from-violet-200 to-pink-200 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <FiDollarSign className="text-gray-400" size={24} />
          <input
            placeholder="Amount"
            className="w-full p-2 ml-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-4 py-2 ml-2 text-gray-500 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200">
            Max
          </button>
        </div>
        <button className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
          Connect wallet
        </button>
        <p className="mt-4 text-xs text-gray-600">
          By staking you affirm compliance with and agree to our{" "}
          <a href="#" className="text-blue-500 underline">
            Terms
          </a>
          ,{" "}
          <a href="#" className="text-blue-500 underline">
            Privacy policy
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-500 underline">
            Disclaimer
          </a>
          , and confirm that you are a non-U.S. resident.
        </p>
      </div>

      {/* Stats component */}
      <Stats />
    </section>
  );
};

export default Hero;
