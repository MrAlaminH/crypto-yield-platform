"use client";
import React, { useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  TooltipProps,
} from "recharts";

interface ToncoinData {
  date: string;
  price: number;
  volume: number;
}

const Charts: React.FC = () => {
  const [toncoinData, setToncoinData] = useState<ToncoinData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchToncoinData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/the-open-network/market_chart?vs_currency=usd&days=7&interval=daily"
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.statusText}`);
        }
        const data = await response.json();
        const formattedData = data.prices.map(
          ([timestamp, price]: [number, number], index: number) => ({
            date: new Date(timestamp).toLocaleDateString(),
            price: price,
            volume: data.total_volumes[index][1],
          })
        );
        setToncoinData(formattedData);
      } catch (error) {
        console.error("Error fetching Toncoin data:", error);
        setError("Failed to load Toncoin data. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchToncoinData();
  }, []);

  const CustomTooltip = ({ active, payload }: TooltipProps<number, string>) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload as ToncoinData;
      return (
        <div className="bg-white p-2 border border-gray-300 rounded shadow text-black">
          <p className="font-bold">{data.date}</p>
          <p>
            Price: $
            {data.price.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
          <p>
            Volume: $
            {data.volume.toLocaleString(undefined, {
              maximumFractionDigits: 0,
            })}
          </p>
        </div>
      );
    }
    return null;
  };

  if (isLoading) {
    return (
      <div className="w-full h-96 flex items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-96 flex items-center justify-center bg-white text-red-500">
        {error}
      </div>
    );
  }

  // Calculate the minimum and maximum prices from the data
  const prices = toncoinData.map((data) => data.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  // Calculate the padding for the YAxis domain
  const padding = (maxPrice - minPrice) * 0.2; // 10% padding

  return (
    <div className="w-full p-4">
      <div className="w-full bg-gray-100 p-4 rounded-lg shadow-lg flex flex-col items-center">
        <h2 className="text-xl font-bold mb-4 text-black">
          Toncoin Price and Volume (Last 7 Days)
          <div className="mt-4 text-center">
            <p className="text-lg font-bold">
              Current Price: $
              {toncoinData[toncoinData.length - 1]?.price.toLocaleString(
                undefined,
                { minimumFractionDigits: 2, maximumFractionDigits: 2 }
              )}
            </p>
            <p
              className={`text-lg ${
                toncoinData[toncoinData.length - 1]?.price >=
                toncoinData[toncoinData.length - 2]?.price
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {toncoinData[toncoinData.length - 1]?.price >=
              toncoinData[toncoinData.length - 2]?.price
                ? "▲"
                : "▼"}{" "}
              {Math.abs(
                toncoinData[toncoinData.length - 1]?.price -
                  toncoinData[toncoinData.length - 2]?.price
              ).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}{" "}
              (
              {(
                ((toncoinData[toncoinData.length - 1]?.price -
                  toncoinData[toncoinData.length - 2]?.price) /
                  toncoinData[toncoinData.length - 2]?.price) *
                100
              ).toFixed(2)}
              %)
            </p>
          </div>
        </h2>
        <div className="w-full flex-grow">
          {toncoinData.length > 0 ? (
            <>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart
                  data={toncoinData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="date"
                    tickFormatter={(tick) =>
                      new Date(tick).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })
                    }
                  />
                  <YAxis
                    yAxisId="left"
                    tickFormatter={(tick) => `$${tick.toLocaleString()}`}
                    domain={[minPrice - padding, maxPrice + padding]}
                  />
                  <Tooltip content={CustomTooltip} />
                  <Area
                    type="monotone"
                    dataKey="price"
                    stroke="#3b82f6"
                    fill="#3b82f6"
                    fillOpacity={0.3}
                    yAxisId="left"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              No data available
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Charts;

// "use client";
// import React, { useState, useEffect } from "react";
// import {
//   ComposedChart,
//   Area,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   TooltipProps,
// } from "recharts";

// interface ToncoinData {
//   date: string;
//   price: number;
//   volume: number;
// }

// const Charts: React.FC = () => {
//   const [toncoinData, setToncoinData] = useState<ToncoinData[]>([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchToncoinData = async () => {
//       try {
//         setIsLoading(true);
//         const response = await fetch(
//           "https://api.coingecko.com/api/v3/coins/the-open-network/market_chart?vs_currency=usd&days=7&interval=daily"
//         );
//         if (!response.ok) {
//           throw new Error(`Failed to fetch data: ${response.statusText}`);
//         }
//         const data = await response.json();
//         const formattedData = data.prices.map(
//           ([timestamp, price]: [number, number], index: number) => ({
//             date: new Date(timestamp).toLocaleDateString(),
//             price: price,
//             volume: data.total_volumes[index][1],
//           })
//         );
//         setToncoinData(formattedData);
//       } catch (error) {
//         console.error("Error fetching Toncoin data:", error);
//         setError("Failed to load Toncoin data. Please try again later.");
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchToncoinData();
//   }, []);

//   const CustomTooltip = ({ active, payload }: TooltipProps<number, string>) => {
//     if (active && payload && payload.length) {
//       const data = payload[0].payload as ToncoinData;
//       return (
//         <div className="bg-white p-2 border border-gray-300 rounded shadow text-black">
//           <p className="font-bold">{data.date}</p>
//           <p>
//             Price: $
//             {data.price.toLocaleString(undefined, {
//               minimumFractionDigits: 2,
//               maximumFractionDigits: 2,
//             })}
//           </p>
//           <p>
//             Volume: $
//             {data.volume.toLocaleString(undefined, {
//               maximumFractionDigits: 0,
//             })}
//           </p>
//         </div>
//       );
//     }
//     return null;
//   };

//   if (isLoading) {
//     return (
//       <div className="w-full h-96 flex items-center justify-center bg-white">
//         <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="w-full h-96 flex items-center justify-center bg-white text-red-500">
//         {error}
//       </div>
//     );
//   }

//   // Calculate the minimum and maximum prices from the data
//   const prices = toncoinData.map((data) => data.price);
//   const minPrice = Math.min(...prices);
//   const maxPrice = Math.max(...prices);

//   // Calculate the padding for the YAxis domain
//   const padding = (maxPrice - minPrice) * 0.1; // 10% padding

//   return (
//     <div className="w-full p-4">
//       <div className="w-full bg-gray-100 p-4 rounded-lg shadow-lg flex flex-col items-center">
//         <h2 className="text-xl font-bold mb-4 text-black">
//           Toncoin Price and Volume (Last 7 Days)
//         </h2>
//         <div className="w-full flex-grow">
//           {toncoinData.length > 0 ? (
//             <ResponsiveContainer width="100%" height={400}>
//               <ComposedChart
//                 data={toncoinData}
//                 margin={{
//                   top: 5,
//                   right: 10,
//                   left: 10,
//                   bottom: 5,
//                 }}
//               >
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis
//                   dataKey="date"
//                   tickFormatter={(tick) =>
//                     new Date(tick).toLocaleDateString("en-US", {
//                       month: "short",
//                       day: "numeric",
//                     })
//                   }
//                 />
//                 <YAxis
//                   yAxisId="left"
//                   tickFormatter={(tick) => `$${tick.toLocaleString()}`}
//                   domain={[minPrice - padding, maxPrice + padding]}
//                   label={{
//                     value: "Price ($)",
//                     angle: -90,
//                     position: "insideLeft",
//                   }}
//                 />
//                 <YAxis
//                   yAxisId="right"
//                   orientation="right"
//                   tickFormatter={(tick) => `$${(tick / 1000000).toFixed(0)}M`}
//                   label={{
//                     value: "Volume ($)",
//                     angle: 90,
//                     position: "insideRight",
//                   }}
//                 />
//                 <Tooltip content={CustomTooltip} />
//                 <Bar
//                   dataKey="volume"
//                   fill="#90EE90" // Lighter shade of green
//                   yAxisId="right"
//                 />
//                 <Area
//                   type="monotone"
//                   dataKey="price"
//                   stroke="#3b82f6"
//                   fill="#3b82f6"
//                   fillOpacity={0.3}
//                   yAxisId="left"
//                 />
//               </ComposedChart>
//             </ResponsiveContainer>
//           ) : (
//             <div className="w-full h-full flex items-center justify-center">
//               No data available
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Charts;
