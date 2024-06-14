"use client";
import { useState, useEffect } from "react";

const Stats = () => {
  const [stats] = useState({
    exchangeRate: 1.037,
    tvlUsd: 73863233.17,
    tvlTon: 10720742.14,
    tonPrice: 6.89,
    apy: 3.47,
  });

  useEffect(() => {
    // Implement logic to fetch real-time data from an API
    // For demonstration, using mock data
    // Replace with actual API call in useEffect if needed
  }, []);

  return (
    <div className="bg-gray-500 rounded-md bg-clip-padding backdrop-filter bg-opacity-10 border border-gray-100 shadow-lg overflow-hidden max-w-xl mx-auto mt-8 md:max-w-3xl md:w-full">
      <div className="p-6 md:p-8">
        <h2 className="text-3xl font-bold text-white mb-4">Staking Stats</h2>
        <div className="grid grid-cols-1 gap-6">
          <div className="bg-gray-800 bg-opacity-50 rounded-lg py-4 px-6">
            <div className="flex items-center justify-between">
              <span className="text-white mr-4">Exchange rate:</span>
              <span className="font-semibold text-green-400">
                sTON = {stats.exchangeRate.toFixed(3)} TON
              </span>
            </div>
          </div>
          <div className="bg-gray-800 bg-opacity-50 rounded-lg py-4 px-6">
            <div className="flex items-center justify-between">
              <span className="text-white mr-4">TVL USD:</span>
              <span className="font-semibold text-green-400">
                ${stats.tvlUsd.toLocaleString()}
              </span>
            </div>
          </div>
          <div className="bg-gray-800 bg-opacity-50 rounded-lg py-4 px-6">
            <div className="flex items-center justify-between">
              <span className="text-white mr-4">TVL TON:</span>
              <span className="font-semibold text-green-400">
                {stats.tvlTon.toLocaleString()} TON
              </span>
            </div>
          </div>
          <div className="bg-gray-800 bg-opacity-50 rounded-lg py-4 px-6">
            <div className="flex items-center justify-between">
              <span className="text-white mr-4">TON price:</span>
              <span className="font-semibold text-green-400">
                ${stats.tonPrice.toFixed(2)}
              </span>
            </div>
          </div>
          <div className="bg-gray-800 bg-opacity-50 rounded-lg py-4 px-6">
            <div className="flex items-center justify-between">
              <span className="text-white mr-4">APY:</span>
              <span className="font-semibold text-green-400">
                {stats.apy.toFixed(2)}%
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="bg-gray-700 text-center py-4">
        <a className="text-sm font-semibold text-blue-400 hover:underline" href="#">
          Explore More
        </a>
      </div> */}
    </div>
  );
};

export default Stats;
