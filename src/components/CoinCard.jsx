import { Heading, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'


const CoinCard = ({ id, name, price, img, symbol, MarketCap, supply, volume }) => {
    return (
        <>
            <Link to={`/coins/${id}`}>
                <VStack w={'52'} shadow={'lg'} p={'8'} borderRadius={'lg'} transition={'all 0.3s'} m={'4'}
                    css={{
                        '&:hover': {
                            transform: "scale(1.25)",
                            backgroundColor: '#CCD1D1',
                        }
                    }}>
                    <Image src={img} w={'10'} h={'10'} objectFit={'contain'}
                        alt={'coins'} />
                    <Heading size={'md'} noOfLines={'1'}>{symbol}</Heading>
                    <Text noOfLines={1}>{name}</Text>
                    <Text noOfLines={1}>Price:- ₹{price.toLocaleString()}</Text>
                    {/* <Text noOfLines={1}>MarketCap:-₹{MarketCap.toLocaleString()}</Text>
                    <Text noOfLines={1}>Supply:-{supply.toLocaleString()}</Text>
                    <Text noOfLines={1}>Volume:-{volume.toLocaleString()}</Text> */}

                </VStack>
            </Link>
        </>
    )

}

export default CoinCard
