// import React from "react";
// import { motion } from "framer-motion";
// import {
//   fadeInContainer,
//   fadeInChild,
//   fadeInUpContainer,
//   fadeInUpChild,
//   popInContainer,
//   popInChild,
//   calmInUpContainer,
//   calmInUpChild,
//   shiftInUpContainer,
//   shiftInUpChild,
//   whipInUpContainer,
//   whipInUpChild,
//   rollInChild,
//   whipInChild,
// } from "@/utils/motion";



// const Hero = () => {
//   return (
//     <section id="Home" className="relative bg-gray-900 py-20 overflow-hidden">
//       <svg
//         className="absolute inset-0  h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
//         aria-hidden="true"
//       >
//         <defs>
//           <pattern
//             id="pattern-bg"
//             width="200"
//             height="200"
//             x="100%"
//             y="-1"
//             patternUnits="userSpaceOnUse"
//           >
//             <path d="M.5 200V.5H200" fill="none"></path>
//           </pattern>
//         </defs>
//         <rect width="100%" height="100%" fill="url(#pattern-bg)"></rect>
//       </svg>
//       <div
//         className="absolute left-[calc(50%-4rem)] top-10 -z-40 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
//         aria-hidden="true"
//       >
//         <div
//           className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
//           style={{
//             clipPath:
//               "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
//           }}
//         ></div>
//       </div>
//       <div className="relative z-10 flex min-h-screen items-center justify-center px-4 sm:px-8">
//         <div className="max-w-full text-center lg:max-w-3xl lg:pt-8">
//           <div className="border border-blue-600 p-1 w-60 mx-auto rounded-full flex items-center justify-between mb-4 mt-6">
//             <span className="font-inter text-xs font-medium text-white ml-3">
//               Explore The Smart Stake App.
//             </span>
//             <a
//               className="w-8 h-8 rounded-full flex justify-center items-center bg-blue-600"
//             >
//               <svg
//                 width="17"
//                 height="16"
//                 viewBox="0 0 17 16"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M2.83398 8.00019L12.9081 8.00019M9.75991 11.778L13.0925 8.44541C13.3023 8.23553 13.4073 8.13059 13.4073 8.00019C13.4073 7.86979 13.3023 7.76485 13.0925 7.55497L9.75991 4.22241"
//                   stroke="white"
//                   strokeWidth="1.6"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </a>
//           </div> 
//           <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl" data-aos="fade-in">
//             Control Your Staking With
//             <span className="text-sky-500"> Soltitude</span>
//           </h1>
//           <p className="mt-6 text-base leading-8 text-gray-300 sm:text-lg md:text-xl">
//             Maximize Your Crypto Earnings with Our Cutting-Edge Web3 Staking
//             Platform. Seamlessly Stake Your Digital Assets across Multiple
//             Blockchain Networks and Earn Attractive Rewards for Securing Their
//             Decentralized Ecosystems.
//           </p>
//           <div className="mt-10 flex flex-col items-center justify-center gap-x-6">
//             <a
//               href="/stake"
//               className="w-full md:w-auto mb-14 inline-flex items-center justify-center py-3 px-7 text-base font-semibold text-center text-white rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/90 dark:shadow-lg dark:shadow-blue-800/90"
//               rel="noreferrer"
//               target="_blank"
//             >
//               Go to App
//               <svg
//                 className="ml-2"
//                 width="20"
//                 height="20"
//                 viewBox="0 0 20 20"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5"
//                   stroke="white"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </a>
//           </div>
//           <div className="relative flex justify-center rounded-md border-2 border-gray-400 mt-10 overflow-hidden"
//           >
//             <img
//               src="https://blue-official-newt-770.mypinata.cloud/ipfs/QmZbHm2WnETwtAtNmsSTtFr5u1XrqRcqWE4QrAi2eUWVTr"
//               alt="Dashboard image"
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-gray-900 to-transparent"></div>
//           </div>
//         </div>
//       </div>
//       <div className="absolute inset-0 blur-[106px] h-56 bg-gradient-to-br from-blue-700/80 to-purple-400/80"></div>
//     </section>
//   );
// };

// export default Hero;
"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  fadeInContainer,
  fadeInChild,
  fadeInUpContainer,
  fadeInUpChild,
  popInContainer,
  popInChild,
  calmInUpContainer,
  calmInUpChild,
  shiftInUpContainer,
  shiftInUpChild,
  whipInUpContainer,
  whipInUpChild,
  rollInChild,
  whipInChild,
} from "@/utils/motion";

const Hero = () => {
  return (
    <section id="Home" className="relative bg-gray-900 py-20 overflow-hidden">
      <svg
        className="absolute inset-0 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="pattern-bg"
            width="200"
            height="200"
            x="100%"
            y="-1"
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none"></path>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pattern-bg)"></rect>
      </svg>
      <div
        className="absolute left-[calc(50%-4rem)] top-10 -z-40 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
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
      <motion.div
        className="relative z-10 flex min-h-screen items-center justify-center px-4 sm:px-8"
        variants={fadeInContainer(1)}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="max-w-full text-center lg:max-w-3xl lg:pt-8">
          <motion.div
            className="border border-blue-600 p-1 w-60 mx-auto rounded-full flex items-center justify-between mb-4 mt-6"
            variants={fadeInChild}
          >
            <span className="font-inter text-xs font-medium text-white ml-3">
              Explore The Smart Stake App.
            </span>
            <a className="w-8 h-8 rounded-full flex justify-center items-center bg-blue-600">
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.83398 8.00019L12.9081 8.00019M9.75991 11.778L13.0925 8.44541C13.3023 8.23553 13.4073 8.13059 13.4073 8.00019C13.4073 7.86979 13.3023 7.76485 13.0925 7.55497L9.75991 4.22241"
                  stroke="white"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </motion.div>
          <motion.h1
            className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
            variants={fadeInUpChild}
          >
            Control Your Staking With
            <span className="text-sky-500"> Soltitude</span>
          </motion.h1>
          <motion.p
            className="mt-6 text-base leading-8 text-gray-300 sm:text-lg md:text-xl"
            variants={fadeInChild}
          >
            Maximize Your Crypto Earnings with Our Cutting-Edge Web3 Staking
            Platform. Seamlessly Stake Your Digital Assets across Multiple
            Blockchain Networks and Earn Attractive Rewards for Securing Their
            Decentralized Ecosystems.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-col items-center justify-center gap-x-6 mx-16"
            variants={popInChild}
          >
            <a
              href="/stake"
              className="w-full md:w-auto mb-14 inline-flex items-center justify-center py-3 px-7 text-base font-semibold text-center text-white rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/90 dark:shadow-lg dark:shadow-blue-800/90"
              rel="noreferrer"
              target="_blank"
            >
              Go to App
              <svg
                className="ml-2"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </motion.div>
          <motion.div
            className="relative flex justify-center rounded-md border-2 border-gray-400 mt-10 overflow-hidden"
            variants={whipInUpChild}
          >
            <motion.img
              src="https://blue-official-newt-770.mypinata.cloud/ipfs/QmZbHm2WnETwtAtNmsSTtFr5u1XrqRcqWE4QrAi2eUWVTr"
              alt="Dashboard image"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-gray-900 to-transparent"></div>
          </motion.div>
        </motion.div>
      </motion.div>
      <div className="absolute inset-0 blur-[106px] h-56 bg-gradient-to-br from-blue-700/80 to-purple-400/80"></div>
    </section>
  );
};

export default Hero;
