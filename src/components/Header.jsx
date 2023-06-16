import { Link } from 'react-router-dom'
import React from 'react'
import logo from '../assets/logo.png'
const Header = () => {
    return (
        <>
            <nav zindex={'overlay'}>
                <img src={logo} alt='logo' />
                <h1>CryptoCreature <sup>TM</sup></h1>
                <main>
                    <Link className='pages' to={'/'}>Home</Link>
                    <Link className='pages' to={'/coins'}>Coins</Link>
                    <Link className='pages' to={'/exchanges'}>Exchanges</Link>
                    <Link className='pages' to={'/news'}>News</Link>
                    <Link className='pages' to={'/about'}>About us</Link>
                </main>
            </nav>
        </>)
}

export default Header