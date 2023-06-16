import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ExchangeCard from './ExchangeCard';
import { HStack } from '@chakra-ui/react';

const Exchanges = () => {

  const [exchanges, setExchanges] = useState([]);

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/exchanges').then((resp) => {
      setExchanges(resp.data);
    }).catch((error) => {
      alert('Error in fetching data')
    })
  }, [])

  return (
    <>
      <div className='heading'>
        <h1>World's top 100 Crypto Exchanges</h1>
      </div>
      <div className='exchanges'>
        <HStack wrap={'wrap'} justifyContent="space-evenly" m={'8'}>
          {exchanges.map((i) => (
            <ExchangeCard key={i.id} name={i.name} img={i.image} rank={i.trust_score_rank} url={i.url} since={i.year_established} />
          ))}
        </HStack>
      </div>

    </>
  )
}

export default Exchanges