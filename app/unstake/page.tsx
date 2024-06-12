"use client"
import React, { useState } from 'react';
import { FiDollarSign } from 'react-icons/fi';
import Stats from '@/components/sub/Stats';
import "./globals.css";

const Hero: React.FC = () => {
  const [activeButton, setActiveButton] = useState<'unstakeIn' | 'unstakeNow'>('unstakeIn');
  return (
    <section id='unstake' className="flex flex-col items-center justify-center min-h-screen w-full  p-4 py-40" 
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
    }}>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-600">Heda Unstake</h1>
        <p className="mt-2 text-lg text-white">TON liquid staking</p>
      </div>
      <div className="w-full max-w-md p-6 mt-8 bg-white rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <FiDollarSign className="text-gray-400" size={24} />
          <input
            type="number"
            placeholder="Amount"
            className="w-full p-2 ml-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-4 py-2 ml-2 text-gray-500 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200">
            Max
          </button>
        </div>
        <div className="flex flex-col items-center justify-center p-4">
      <div className="flex space-x-2 mb-4">
        <button
          className={`py-2 px-4 rounded-md shadow-md ${
            activeButton === 'unstakeIn' ? 'bg-blue-600 text-white' : 'bg-blue-200 text-blue-600'
          }`}
          onClick={() => setActiveButton('unstakeIn')}
        >
          Unstake in 51h
        </button>
        <button
          className={`py-2 px-4 rounded-md shadow-md ${
            activeButton === 'unstakeNow' ? 'bg-blue-600 text-white' : 'bg-blue-200 text-blue-600'
          }`}
          onClick={() => setActiveButton('unstakeNow')}
        >
          Unstake now
        </button>
      </div>
      {activeButton === 'unstakeIn' && (
        <div>
          {/* Content for Unstake in 51h */}
          <p>Unstaking will be available in 51 hours.</p>
        </div>
      )}
      {activeButton === 'unstakeNow' && (
        <div>
          {/* Content for Unstake now */}
          <p>You can unstake immediately.</p>
        </div>
      )}
    </div>
        <button className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">Connect wallet</button>
        <p className="mt-4 text-xs text-gray-600">
          By staking you affirm compliance with and agree to our{' '}
          <a href="#" className="text-blue-500 underline">
            Terms
          </a>
          ,{' '}
          <a href="#" className="text-blue-500 underline">
            Privacy policy
          </a>{' '}
          and{' '}
          <a href="#" className="text-blue-500 underline">
            Disclaimer
          </a>
          , and confirm that you are a non-U.S. resident.
        </p>
      </div>
      <Stats/>
    </section>
  );
};

export default Hero;
