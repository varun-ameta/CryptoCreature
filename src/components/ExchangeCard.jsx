import { Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const ExchangeCard = ({ name, key, img, rank, url, since }) => {
    return (
        <>
            <Link to={url}>
                <VStack w={'52'} shadow={'lg'} p={'8'} borderRadius={'lg'} transition={'all 0.3s'} m={'4'}
                    css={{
                        '&:hover': {
                            transform: "scale(1.25)",
                            backgroundColor: '#CCD1D1',
                        }
                    }}>
                    <Image src={img} w={'10'} h={'10'} objectFit={'contain'}
                        alt={'coins'} />
                    <Text noOfLines={1}>{rank}.{name}</Text>
                    <Text noOfLines={1}>Since:- {since}</Text>

                </VStack>
            </Link>
        </>
    )
}

export default ExchangeCard
