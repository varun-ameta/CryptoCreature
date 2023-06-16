import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { HStack, Heading, Image, Text, VStack } from '@chakra-ui/react';
import CoinChart from './CoinChart';

const CoinDetails = () => {
    const [details, setDetails] = useState();
    const params = useParams();

    useEffect(() => {
        axios.get(`https://api.coingecko.com/api/v3/coins/${params.id}`).then((resp) => {
            setDetails(resp.data);
            // console.log(resp.data);
        }).catch((error) => {
            alert("Error in fetching data")
        })
    }, [params.id]);
    return (
        <>
            <HStack w={'full'} p={8} >
                <VStack spacing={'4'} padding={'16'} w={500} alignItems={'flex-start'}>
                    <Image src={details?.image.large} alt='coin' w={'16'} h={'16'} objectFit={'contain'} />
                    <Heading>{details?.symbol}</Heading>
                    <Text>Name:- {details?.name}</Text>
                    <Text>Price:- ₹{details?.market_data.current_price['inr'].toLocaleString()}</Text>
                    <Text>Last 24hr:- {details?.market_data.price_change_percentage_24h_in_currency['inr']}%(₹{details?.market_data.price_change_24h_in_currency
                    ['inr'].toLocaleString()})</Text>
                    <Text>Rank:- {details?.market_data.market_cap_rank}</Text>
                    <Text>Market Cap:- ₹{details?.market_data.market_cap['inr'].toLocaleString()}</Text>
                    <Text>Supply:- {details?.market_data.total_supply.toLocaleString()}</Text>
                    <Text>{details?.description.en.split(".")[0]}</Text>
                </VStack>

                <div className='chart'>
                    <CoinChart />
                </div>
            </HStack>
            <Text fontSize={'small'} textAlign={'center'} m={10} >Last Updated on {Date().split("G")[0]}</Text>

        </>
    )
}

export default CoinDetails