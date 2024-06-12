import Head from 'next/head';
import Card from '@/components/sub/Card';

const Defi: React.FC = () => {
  return (
    <div id="defi" className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 py-40"
    style={{
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
    }}
    >
      <Head>
        <title>Boost Your Yield in TON DeFi</title>
      </Head>
      <main className="max-w-4xl mx-auto p-5 bg-transprent rounded-lg shadow-lg">
        <header className="text-center mb-10">
          <h1 className="text-3xl font-bold text-blue-600">Boost Your Yield in TON DeFi</h1>
          <p className="mt-4 text-lg text-white">
            With stTON, you’re not just staking - you’re unlocking DeFi opportunities. Grow wealth by adding extra yield on top of staking reward.
          </p>
        </header>
        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">Provide Liquidity to Decentralized Exchanges</h2>
          <Card 
            pool="wTON-stTON" 
            apy="N/A" 
            boost="5.67% APY" 
            url="megaton.fi" 
            buttonText="Provide Liquidity" 
          />
          <Card 
            pool="TON-stTON" 
            apy="1.09%" 
            boost="TBD" 
            url="dedust.io" 
            buttonText="Provide Liquidity" 
          />
          <Card 
            pool="TON-stTON" 
            apy="3.70%" 
            boost="N/A" 
            url="ston.fi" 
            buttonText="Provide Liquidity" 
          />
        </section>
      </main>
    </div>
  );
}

export default Defi;