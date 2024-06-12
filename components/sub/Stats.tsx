"use client";
import { useState, useEffect } from "react";

interface StatsData {
  exchangeRate: number;
  tvlUsd: number;
  tvlTon: number;
  tonPrice: number;
  apy: number;
}

const Stats = () => {
  const [stats, setStats] = useState<StatsData>({
    exchangeRate: 1.037,
    tvlUsd: 73863233.17,
    tvlTon: 10720742.14,
    tonPrice: 6.89,
    apy: 3.47,
  });

  useEffect(() => {
    // Implement the logic to fetch real-time data from an API
  }, []);

  return (
    <div
      className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6 mt-8"
      data-selected="true"
      data-label-id="0"
      style={{
        width: "445.922px",
        height: "380px",
        transform: "translate(-2px, -2px)",
      }}
    >
      <div className="flex justify-between items-center border-b-2 border-[#E6E8EC] pb-4">
        <h2 className="text-2xl font-semibold text-[#000000]">Staking Stats</h2>
        <a className="text-sm font-semibold text-[#52a8ee]" href="#">
          TON Explorer
        </a>
      </div>
      <div>
        <ul className="divide-y divide-[#E6E8EC] mt-4">
          <li className="py-4 flex justify-between">
            <span className="text-sm text-[#7B7F9E]">Exchange rate</span>
            <span className="text-sm font-semibold text-[#5048E5]">
              sTON = 1.037 TON
            </span>
          </li>
          <li className="py-4 flex justify-between">
            <span className="text-sm text-[#7B7F9E]">TVL USD</span>
            <span className="text-sm font-semibold text-[#5048E5]">
              $73863233.17
            </span>
          </li>
          <li className="py-4 flex justify-between">
            <span className="text-sm text-[#7B7F9E]">TVL TON</span>
            <span className="text-sm font-semibold text-[#5048E5]">
              10720742.14
            </span>
          </li>
          <li className="py-4 flex justify-between">
            <span className="text-sm text-[#7B7F9E]">TON price</span>
            <span className="text-sm font-semibold text-[#5048E5]">$6.89</span>
          </li>
          <li className="py-4 flex justify-between">
            <span className="text-sm text-[#7B7F9E]">APY</span>
            <span className="text-sm font-semibold text-[#5048E5]">3.47%</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Stats;
