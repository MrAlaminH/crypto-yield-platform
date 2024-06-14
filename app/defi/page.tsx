import Head from "next/head";
import Card from "@/components/sub/Card";
import Footer from "@/components/main/Footer";

const Defi: React.FC = () => {
  return (
    <div
      id="defi"
      className="relative min-h-screen py-40 isolate bg-gray-900 text-white  "
      style={{
        overflowX: "hidden", // Prevent horizontal scrolling
      }}
    >
      {/* Background elements */}
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
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

      <div className="absolute top-0 left-0 right-0 pt-20 pb-10">
        {/* Page title and description */}
        <Head>
          <title>Boost Your Yield in TON DeFi</title>
        </Head>
        <main className="max-w-4xl mx-auto p-5 bg-transparent rounded-lg shadow-lg">
          <header className="text-center mb-10">
            <h1 className="text-3xl font-bold text-blue-600">
              Boost Your Yield in TON DeFi
            </h1>
            <p className="mt-4 text-lg text-white">
              With stTON, you’re not just staking - you’re unlocking DeFi
              opportunities. Grow wealth by adding extra yield on top of staking
              reward.
            </p>
          </header>
          <section>
            {/* Cards section */}
            <h2 className="text-2xl font-semibold text-blue-600 mb-6">
              Provide Liquidity to Decentralized Exchanges
            </h2>
            <div className="flex flex-col  ">
              <Card
                pool="wTON-stTON"
                apy="N/A"
                boost="5.67% APY"
                url="#"
                buttonText="Provide Liquidity"
                website="Sodality.xyz"
              />
              <Card
                pool="TON-stTON"
                apy="1.09%"
                boost="TBD"
                url="#"
                buttonText="Provide Liquidity"
                website="Sodality.xyz"
              />
              <Card
                pool="TON-stTON"
                apy="3.70%"
                boost="N/A"
                url="#"
                buttonText="Provide Liquidity"
                website="Sodality.xyz"
              />
              <Card
                pool="TON-stTON"
                apy="3.70%"
                boost="N/A"
                url="#"
                buttonText="Provide Liquidity"
                website="Sodality.xyz"
              />
              <Card
                pool="TON-stTON"
                apy="3.70%"
                boost="N/A"
                url="#"
                buttonText="Provide Liquidity"
                website="Sodality.xyz"
              />
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Defi;
