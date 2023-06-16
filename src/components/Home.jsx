import React from 'react'
import Gemini from '../assets/Gemini.webp'
import trading from '../assets/istockphoto.jpg'
import { Button } from '@chakra-ui/react'

const Home = () => {
  return (
    <>
      <div className='home1'>
        <img src={Gemini} alt='Background Pic' />
        <div className='greeting'>
          <h1>Hello There...</h1>
          <h3>We are here to provide you information about<br /> different Cryptocurrencies and Exchanges.</h3>
          <a href='https://www.kaspersky.com/resource-center/definitions/what-is-cryptocurrency' target='_blank' rel="noopener noreferrer" ><Button>What is Crypto?</Button></a>

        </div>
      </div>
      {/* <hr /> */}
      <div className='home2'>
        <div className='row'>
          <img src={trading} alt='trading' />
        </div>
        <div className='row'>
          <h1>What is Cryptocurrency Trading & How does it work?</h1>
          <h3>Cryptocurrency trading involves buying and selling digital assets to make a profit. Unlike traditional currencies, cryptocurrencies are decentralized, meaning that they are not controlled by any government or financial Institution.Cryptocurrency trading involves speculating on price movements via a CFD trading account, or buying and selling the underlying coins via an exchange.</h3>
          <a href='https://www.analyticsinsight.net/what-is-cryptocurrency-trading-and-how-does-it-work/#:~:text=Cryptocurrency%20trading%20involves%20buying%20and,any%20government%20or%20financial%20institution' target='_blank' rel="noopener noreferrer" ><Button>Learn more</Button></a>

        </div>
      </div>
    </>
  )
}

export default Home