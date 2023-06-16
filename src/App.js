import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Coins from './components/Coins'
import Exchanges from './components/Exchanges'
import News from './components/News'
import About from './components/About'
import CoinDetails from './components/CoinDetails'


import './styles/Home.scss'
import './styles/Header.scss'
import './styles/footer.scss'
import './styles/about.scss'
import './styles/coin.scss'
import './styles/exchanges.scss'
import './styles/NewsCard.scss'


const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/coins' element={<Coins />} />
          <Route path='/coins/:id' element={<CoinDetails />} />
          <Route path='/exchanges' element={<Exchanges />} />
          <Route path='/news' element={<News />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App