/* eslint-disable jsx-a11y/img-redundant-alt */
import './DashBoardImgStyles.css';
import Softwarepic from '../Images/animie3.jpg'
// import myPicture from '../Images/myPicture.jpg'
import React from 'react'
import { Link } from 'react-router-dom'

const DashBoardImg = () => {
    return (
        <div className='hero'>
            <div className='mask'>
                <img className='intro-img' src={Softwarepic} alt='Introduction Image' />
            </div>
            <div className='content'>
                <p className='paradash'>Hello, I Am Ganesh Kumar</p>
                <p style={{ color: 'white', marginLeft: "230px" }}>&</p>
                <p className='newpara'>I Am Full Stack Web Developer</p>
                <div className='buttons'>
                    <Link to='/projects' className='hell'>Projects</Link>
                    <Link to='/contact' className='hell btn-lights'>Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default DashBoardImg