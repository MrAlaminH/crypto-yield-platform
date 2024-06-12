// Next.js component with TypeScript for 'Rewards' section
import React from "react";

const RewardsSection: React.FC = () => {
  return (
    <section className="py-40 min-h-screen w-full"    style={{
      background: '#000000',
      backgroundImage: `
        linear-gradient(
          -90deg,
          transparent calc(5em - 1px),
          rgba(255, 255, 255, 0.2) calc(5em - 1px + 1px),
          rgba(255, 255, 255, 0.2) 5em
        ),
        linear-gradient(
          0deg,
          transparent calc(5em - 1px),
          rgba(255, 255, 255, 0.2) calc(5em - 1px + 1px),
          rgba(255, 255, 255, 0.2) 5em
        )`,
      backgroundSize: '5em 5em',
    }}>
      <div
        id="rewards"
        className=" p-6 rounded-lg shadow-lg max-w-md mx-auto"
      >
        <h2 className="text-4xl font-bold text-center text-white mb-4">
          Rewards
        </h2>
        <p className="text-sm text-white mb-4">
          Stake your TON with bemo, enjoy extra Yield with DeFi Benefits, swap
          on any DEX or just hold it in your wallet.
        </p>
        <p className="text-sm text-white mb-4">
          We will reward your actions with Staking Experience Points $TXP. At
          the end of the Incentive Program, all the $TXP holders will share a
          $BMO token pool of up to 20% of the total token supply.
        </p>
        <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 w-full mb-4">
          Connect your wallet to see your rewards
        </button>
        <p className="text-xs text-white">
          Due to high loads on the blockchain network, the accrual of $TXP can
          take up to 5 days.
        </p>
      </div>
    </section>
  );
};

export default RewardsSection;
