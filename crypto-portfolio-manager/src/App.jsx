import React, { useState } from 'react';
import CoinList from './components/CoinList';
import { FcStatistics } from 'react-icons/fc';
import { FaBitcoin } from "react-icons/fa";

import LandingPage from './components/LandingPage';
import { motion } from 'framer-motion';


function App() {
  const [coins, setCoins] = useState([]);

  const addCoin = async () => {
    const coinInput = document.getElementById('coinInput');
    const coinSymbol = coinInput.value;

    if (coinSymbol.trim() !== '') {
      try {
        const response = await fetch(`https://api.coincap.io/v2/assets/${coinSymbol}`);
        const data = await response.json();

        if (data.error) {
          console.error('Error fetching data:', data.error);
          alert('Coin not found. Please enter a valid coin symbol.');
        } else {
          setCoins([...coins, coinSymbol]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }

      coinInput.value = '';
    }
  };

  return (
    <div className="relative w-full h-screen bg-zinc-900 text-white overflow-hidden">
        <div className='w-full p-5 text-xl flex items-center justify-between '>
          <div className='flex justify-evenly gap-3 items-center'>
            <h1>Crypto Portfolio Manager</h1>
            <FaBitcoin />
            <div className="">
        <label htmlFor="coinInput" className="mr-2">Add Coin:</label>
        <input type="text" id="coinInput" placeholder="Enter Coin Symbol" className="p-0.9 border bg-sky-700 border-gray-700 rounded-md" />
        <button onClick={addCoin} className="bg-blue-500 text-white font-bold py-0.9 px-4 rounded-md ml-2">Add</button>
      </div>
          </div>
          <div className='flex gap-3 items-center'>
            <h4 className='text-[1vw]'>About</h4>
            <h4 className='text-[1vw]'>Contact us</h4>
          </div>
        </div>
      {/* <LandingPage/> */}
      <CoinList coins={coins} />
      <motion.div
        // animate={{ x: [0, 100, 0] }}
        whileHover={{ rotate: 360 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, loop: Infinity, ease: 'linear' }}
      className='absolute top-1/3 left-1/3  flex items-center gap-3 opacity-50 shadow-white select-none...	 '>
      <img src="https://cdn-icons-png.freepik.com/128/4843/4843283.png?ga=GA1.1.1280059704.1705596398&semt=ais" alt="Logo" />
      <img src="https://cdn-icons-png.freepik.com/128/896/896519.png?ga=GA1.1.1280059704.1705596398&semt=ais" alt="Logo" /> 
      <img src="https://cdn-icons-png.freepik.com/128/3985/3985656.png?ga=GA1.1.1280059704.1705596398&semt=ais" alt="Logo" />
 

      </motion.div>

      
    </div>
  );
}

export default App;
