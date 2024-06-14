import React from "react";

const RewardsSection: React.FC = () => {
  return (
    <section className="relative py-40 min-h-screen w-full isolate bg-gray-900 text-white overflow-hidden px-4 sm:px-10">
      {/* Background elements */}
      <svg
        className="absolute inset-0 z-[-10] h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
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

      {/* Absolute positioned background */}
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

      {/* Content container */}
      <div id="rewards" className=" p-6 shadow-lg max-w-md mx-auto relative bg-gray-500 rounded-md bg-clip-padding backdrop-filter bg-opacity-10 border border-gray-100 ">
        <h2 className="text-4xl font-bold text-center text-gray-300 mb-4">Rewards</h2>
        <p className="text-sm text-gray-300 mb-4">
          Stake your TON with bemo, enjoy extra Yield with DeFi Benefits, swap
          on any DEX or just hold it in your wallet.
        </p>
        <p className="text-sm text-gray-300 mb-4">
          We will reward your actions with Staking Experience Points $TXP. At
          the end of the Incentive Program, all the $TXP holders will share a
          $BMO token pool of up to 20% of the total token supply.
        </p>
        <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 w-full mb-4">
          Connect your wallet to see your rewards
        </button>
        <p className="text-xs text-gray-300">
          Due to high loads on the blockchain network, the accrual of $TXP can
          take up to 5 days.
        </p>
      </div>
    </section>
  );
};

export default RewardsSection;
