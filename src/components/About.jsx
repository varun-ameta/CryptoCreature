import React from 'react'
import logo from '../assets/logo.png'

const About = () => {
    return (
        <>
            <div className='about'>
                <div className='define'>
                    <h1>About CryptoCreature Pvt Ltd.</h1>
                    <p><b>CryptoCreature is the world's most-referenced price-tracking website for cryptoassets in the rapidly growing cryptocurrency space</b>. Its mission is to make crypto discoverable and efficient globally by empowering retail users with unbiased, high quality and accurate information for drawing their own informed conclusions.<br />Founded by Varun Ameta in April 2023, CryptoCreature has quickly grown to become the most trusted source by users, institutions, and media for comparing thousands of cryptoassets.<br />CryptoCreature stands firmly for accurate, timely and unbiased information.</p>
                </div>
                <div className='pic'>
                    <img src={logo} alt='logo' />
                </div>
            </div>
        </>
    )
}

export default About