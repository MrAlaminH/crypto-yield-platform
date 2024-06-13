import React from 'react';

interface CardProps {
  pool: string;
  apy: string;
  boost: string;
  url: string;
  buttonText: string;
}
const Card: React.FC<CardProps> = ({ pool, apy, boost, url, buttonText }) => {
  return (
    <div className="bg-gray-50 p-5 rounded-lg shadow-lg mb-5 w-full">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full">
        <div className="flex-grow mb-4 md:mb-0 w-full md:w-auto md:pr-8">
          <p className="text-lg font-semibold text-gray-800">{pool}</p>
          <div className="flex justify-between text-sm text-gray-600 w-full">
            <span>LP APY:</span>
            <span>{apy}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600 w-full">
            <span>DEX BOOST:</span>
            <span>{boost}</span>
          </div>
        </div>
        <div>
        <p className="text-sm text-gray-600 text-center my-2">
            <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">Check carefully</a>
          </p>
        </div>
        <a href={url} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-4 py-2 mt-2 md:mt-0 md:ml-4 rounded-lg hover:bg-blue-700 w-full md:w-auto text-center">
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default Card;

// const Card: React.FC<CardProps> = ({ pool, apy, boost, url, buttonText }) => {
//   return (
//     <div className="bg-gray-50 p-5 rounded-lg shadow-lg mb-5">
//       <div className="flex flex-col md:flex-row justify-between items-center md:items-center ">
//         <div className="flex-grow mb-4 md:mb-0 w-full md:w-auto ">
//           <p className="text-lg font-semibold text-gray-800">{pool}</p>
//           <p className="text-sm text-gray-600">LP APY: {apy}</p>
//           <p className="text-sm text-gray-600">DEX BOOST: {boost}</p>
//         </div>
//         <a href={url} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-4 py-2 mt-2 md:mt-0 rounded-lg hover:bg-blue-700">
//           {buttonText}
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Card;
