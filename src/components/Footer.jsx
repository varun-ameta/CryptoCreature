import React from 'react'
import { Button } from '@chakra-ui/react';
import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai';

const Footer = () => {
    return (
        <>
            <div className='footer'>
                {/* row 1 */}
                <div className='row'>
                    <h1>CryptoCreature Pvt Ltd.</h1>
                    <ul className='list'>
                        <li>658-751-854</li>
                        <li>13<sup>th</sup> Floor, Sky High Apartments</li>
                        <li>New Delhi, India</li>
                    </ul>
                </div>
                <div className='line'></div>
                {/* row 2 */}
                <div className='row'>
                    <h1>CryptoCreature</h1>
                    <p>@All Rights Reserved</p>
                    <div className='social'>
                        <h4>Follow us :-</h4>
                        <Button p={'0'} borderRadius={'50px'} m={'10px'} ><a href='https://www.facebook.com/' target='_blank' rel="noopener noreferrer" ><AiFillFacebook size={25} /> </a></Button>
                        <Button p={'0'} borderRadius={'50px'} m={'10px'} ><a href='https://www.instagram.com/' target='_blank' rel="noopener noreferrer" ><AiFillInstagram size={25} /> </a></Button>
                        <Button p={'0'} borderRadius={'50px'} m={'10px'} ><a href='https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D' target='_blank' rel="noopener noreferrer" ><AiFillTwitterCircle size={25} /> </a></Button>
                        <Button p={'0'} borderRadius={'50px'} m={'10px'} ><a href='https://www.youtube.com/' target='_blank' rel="noopener noreferrer" ><AiFillYoutube size={25} /></a></Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer