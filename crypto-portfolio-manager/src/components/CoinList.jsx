// src/components/CoinList.jsx
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion"
import { FcStatistics } from "react-icons/fc";
import { FaBitcoin } from 'react-icons/fa';



import { MdDownloadForOffline } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";

import { GrDocumentText } from "react-icons/gr";


function CoinList({ coins }) {
  const [coinData, setCoinData] = useState([]);
  // console.log(coinData)
  

  useEffect(() => {
    const fetchCoinData = async () => {
      const coinDetails = [];

      for (const coinSymbol of coins) {
        try {
          // Fetch data from the CoinCap API
          const response = await fetch(`https://api.coincap.io/v2/assets/${coinSymbol}`);
          const data = await response.json();

          // Check if the API response contains an error property
          if (data.error) {
            console.error('Error fetching data:', data.error);
          } else {
            coinDetails.push(data.data);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }

      // Update state with the fetched coin details
      setCoinData(coinDetails);
    };

    fetchCoinData();
  }, [coins]);

  console.log(coinData)

  return (
    <div id="portfolio" className="flex flex-wrap justify-center items-center z-10">
      {coinData.map((coin, index) => (
        <motion.div
          key={index}
          drag
          // dragConstraints={reference}
          whileDrag={{ scale: 1.2 }}
          dragElastic={1}
          whileHover={{ scale: 1.1, boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)' }}
          transition={{ type: 'easeInOut', duration: 0.3 }}
          whileTap={{ scale: 0.9 }}
          className='relative px-5 py-10 text-white w-60 h-72 bg-zinc-900/90 rounded-[40px] overflow-hidden m-4'
        >
          <img
            src={`https://cryptologos.cc/logos/${coin.id}-${coin.symbol.toLowerCase()}-logo.png?v=029`}
            alt={`${coin.name} Logo`}
            className='w-16 h-16 mx-auto mb-4'
          />
                {/* <FaBitcoin size={50} /> */}
          <p className='mt-5 text-xs font-semibold'>{coin.name}
          
          <h3>{coin.name} ({coin.symbol.toUpperCase()})</h3>
              <p>Current Price: ${parseFloat(coin.priceUsd).toFixed(2)}</p>
              <p>Market Cap: ${parseFloat(coin.marketCapUsd).toFixed(2)}</p>
              <p>24h Change: {parseFloat(coin.changePercent24Hr).toFixed(2)}%</p></p>
          <div className='footer absolute bottom-0 w-full left-0'>
          
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default CoinList;
