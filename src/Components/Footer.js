import './FooterStyles.css'

import React from 'react'
import { FaFacebook, FaHome, FaLinkedinIn, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <FaHome size={40} style={{ color: 'white', marginRight: '2rem' }} />
                        <div>
                            <p className='parafoot'>Block No-14, House No-s8,SrikanthNagar, Arilova Colony, Visakhapatnam Pin-530040 </p>
                            <p className='parafoot'>Andhra Pradesh,India</p>
                        </div>
                    </div>
                    <div className='phone'>
                        <h4 className='parafootn'>
                            <FaPhone size={20} style={{ color: 'white', marginRight: '2rem' }} />
                            91+8328602239
                        </h4>
                    </div>
                    <div className='email'>
                        <h4 className='parafootn'>
                            <FaMailBulk size={20} style={{ color: 'white', marginRight: '2rem' }} />
                            ganeshkumarakula@gmail.com
                        </h4>
                    </div>
                </div>
                <div className='right'>
                    <h2>About My Freelancing</h2>
                    <p className='parafoot'>As a dedicated freelance developer, I have successfully completed a range of projects that demonstrate my ability to deliver high-quality work independently. My portfolio includes a fully functional Todo List application, a comprehensive personal portfolio, and several other custom projects. Each of these projects reflects my commitment to clean, efficient code, user-friendly design, and attention to detail</p>
                    <div className='social'>
                        <FaFacebook size={20} style={{ color: '#4267b2', marginRight: '2rem' }} />
                        <FaTwitter size={20} style={{ color: '#1DA1F2', marginRight: '2rem' }} />
                        <FaLinkedinIn size={20} style={{ color: '#0077B5', marginRight: '2rem' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer