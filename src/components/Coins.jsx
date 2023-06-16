import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CoinCard from './CoinCard';
import { HStack } from '@chakra-ui/react';

const Coins = () => {

  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en').then((resp) => {
      setCoins(resp.data);
    }).catch((error) => {
      alert('Error in fetching data');
    })
  }, [])

  return (
    <>
      <div className='full'>
        <div className='heading'>
          <h1>World's top 100 Crypto Currencies</h1>
        </div>
        <div className='coins'>
          <HStack wrap={'wrap'} justifyContent={'space-evenly'} m={'8'}>
            {coins.map((i) => (
              <CoinCard id={i.id} key={i.id} symbol={i.symbol} name={i.name} img={i.image} price={i.current_price} MarketCap={i.market_cap} supply={i.total_supply} volume={i.total_volume} />
            ))}
          </HStack>
        </div>
      </div>
    </>
  )
}

export default Coins