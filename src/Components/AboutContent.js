/* eslint-disable jsx-a11y/img-redundant-alt */
import './AboutContentStyles.css'

import React from 'react'
import { Link } from 'react-router-dom'
import AboutImg1 from '../Images/aboutimg1.jpeg'
import AboutImg2 from '../Images/aboutimg2.png'

const AboutContent = () => {
    return (
        <div className='about'>
            <div className='left'>
                <h1 className='abouthead'>Who Am I?</h1>
                <p className='paraabout'>I Am an Erripappa Defined by Gayatri</p>
                <Link to='/contact'>
                    <button className='btns'>Contact</button></Link>
            </div>
            <div className='right'>
                <div className='img-container'>
                    <div className='img-stack top'>
                        <img className='imgs' src={AboutImg1} alt='image'></img>
                    </div>
                    <div className='img-stack bottom'>
                        <img className='imgs' src={AboutImg2} alt='image'></img>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutContent