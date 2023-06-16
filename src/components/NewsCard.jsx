import { Heading, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const NewsCard = ({ title, author, description, date, source, img }) => {
  return (
    <>
      <div className='newsCard'>
        <VStack w={'50'} shadow={'lg'} p={'8'} borderRadius={'lg'} transition={'all 0.3s'} m={'16'}
          css={{
            '&:hover': {
              transform: "scale(1.05)",
              backgroundColor: '#CCD1D1',
            }
          }}>
          <div className='pic'>
            {/* <Image src={img} alt='pic' /> */}
          </div>
          <div className='info'>
            <Heading>{title}</Heading>
            <Text>{description}</Text>
            <Text>By:- {author}</Text>
            <Text>Source:- {source}</Text>
            <Text>Date:- {date}</Text>
          </div>
        </VStack>
      </div>
    </>
  )
}
export default NewsCard