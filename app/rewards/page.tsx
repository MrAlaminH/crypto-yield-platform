// Next.js component with TypeScript for 'Rewards' section
import React from "react";

const RewardsSection: React.FC = () => {
  return (
    <section className="py-40">
      <div
        id="rewards"
        className="bg-gradient-to-r from-blue-200 to-blue-100 p-6 rounded-lg shadow-lg max-w-md mx-auto"
      >
        <h2 className="text-xl font-bold text-center text-blue-900 mb-4">
          Rewards
        </h2>
        <p className="text-sm text-blue-700 mb-4">
          Stake your TON with bemo, enjoy extra Yield with DeFi Benefits, swap
          on any DEX or just hold it in your wallet.
        </p>
        <p className="text-sm text-blue-700 mb-4">
          We will reward your actions with Staking Experience Points $TXP. At
          the end of the Incentive Program, all the $TXP holders will share a
          $BMO token pool of up to 20% of the total token supply.
        </p>
        <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 w-full mb-4">
          Connect your wallet to see your rewards
        </button>
        <p className="text-xs text-blue-700">
          Due to high loads on the blockchain network, the accrual of $TXP can
          take up to 5 days.
        </p>
      </div>
    </section>
  );
};

export default RewardsSection;
