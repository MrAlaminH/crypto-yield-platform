import React from "react";
import Image from "next/image";

const Benefits = () => {
  return (
    <section id="benefit" className="bg-gray-900 py-16">
        <div
          aria-hidden="true"
          className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20"
        >
          <div className="blur-[106px] h-56 bg-gradient-to-br  to-purple-400 from-blue-700"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400  to-indigo-600"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6 ">
          <div className="flex justify-center">
            <div className="md:w-2/3 lg:w-1/2 mt-12 text-gray-100 ">
              <h2 className="my-8 text-center  text-3xl font-bold text-blue-600 md:text-4xl">
                Our Benefits
              </h2>
              <p className="text-gray-300 text-center">
                Unlock liquidity and enhance yields with our staking platform.
              </p>
            </div>
          </div>
          <div className="mt-16 grid divide-x divide-y  bg-blue-600 rounded-md bg-clip-padding backdrop-filter bg-opacity-10 border border-blue-400 shadow-md sm:grid-cols-2 lg:grid-cols-4  lg:divide-y-0 xl:grid-cols-4">
            <div className="group relative ">
              <div className="relative space-y-8 py-12 p-8">
                <Image
                  src="https://www.svgrepo.com/show/164986/logo.svg"
                  loading="lazy"
                  width="200"
                  height="200"
                  className="w-12 h-12 rounded-full"
                  alt="svg image"
                />
                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                    Decentralized
                  </h5>
                  <p className="text-gray-300">
                    Our platform is built on decentralized blockchain
                    technology, ensuring transparency and security.
                  </p>
                </div>
              </div>
            </div>
            <div className="group relative ">
              <div className="relative space-y-8 py-12 p-8">
                <Image
                  src="https://www.svgrepo.com/show/120853/logo.svg"
                  loading="lazy"
                  width="200"
                  height="200"
                  className="w-12 h-12 rounded-full"
                  alt="svg image"
                />
                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                    Accessible
                  </h5>
                  <p className="text-gray-300">
                    Our user-friendly platform makes staking accessible to both
                    individual and institutional investors.
                  </p>
                </div>
              </div>
            </div>
            <div className="group relative ">
              <div className="relative space-y-8 py-12 p-8">
                <Image
                  src="https://www.svgrepo.com/show/120852/logo.svg"
                  loading="lazy"
                  width="200"
                  height="200"
                  className="w-12 h-12 rounded-full"
                  alt="svg image"
                />
                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                    Secure
                  </h5>
                  <p className="text-gray-300">
                    Our platform prioritizes security, utilizing advanced
                    cryptographic protocols and best practices.
                  </p>
                </div>
              </div>
            </div>
            <div className="group relative ">
              <div className="relative space-y-8 py-12 p-8">
                <Image
                  src="https://www.svgrepo.com/show/120850/logo.svg"
                  loading="lazy"
                  width="200"
                  height="200"
                  className="w-12 h-12 rounded-full"
                  alt="svg image"
                />
                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                    Rewarding
                  </h5>
                  <p className="text-gray-300">
                    Earn attractive rewards by staking your digital assets and
                    contributing to the growth of blockchain networks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Benefits;
