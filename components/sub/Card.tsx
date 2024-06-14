import React from 'react';

interface CardProps {
  pool: string;
  apy: string;
  boost: string;
  url: string;
  buttonText: string;
  website: string;
}
const Card: React.FC<CardProps> = ({ pool, apy, boost, url, buttonText, website  }) => {
  return (
    <div className="bg-gray-500 rounded-md bg-clip-padding backdrop-filter bg-opacity-10 border border-gray-100 p-5 shadow-lg mb-5 w-full">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full">
        <div className="flex-grow mb-4 md:mb-0 w-full md:w-auto md:pr-8 mr-20">
          <p className="text-lg font-semibold text-gray-300">{pool}</p>
          <div className="flex justify-between text-sm text-gray-300 w-full">
            <span>LP APY:</span>
            <span>{apy}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-300 w-full">
            <span>DEX BOOST:</span>
            <span>{boost}</span>
          </div>
        </div>
        <div>
        <p className="text-sm text-gray-600 text-center my-2 mr-8">
            <a href={website} target="_blank" rel="noopener noreferrer" className="text-white ">{website} </a>
          </p>
        </div>
        <a href={url} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-gray-300 px-4 py-2 mt-2 md:mt-0 md:ml-4 rounded-lg hover:bg-blue-700 w-full md:w-auto text-center">
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default Card;


