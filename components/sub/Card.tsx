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
    <div className="bg-gray-50 p-5 rounded-lg shadow-lg mb-5">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-lg font-semibold text-gray-800">{pool}</p>
          <p className="text-sm text-gray-600">LP APY: {apy}</p>
          <p className="text-sm text-gray-600">DEX BOOST: {boost}</p>
        </div>
        <a href={`https://${url}`} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default Card;