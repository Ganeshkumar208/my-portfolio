/* eslint-disable jsx-a11y/img-redundant-alt */
import './WorkCardStyles.css'
import React from 'react'
import { NavLink } from 'react-router-dom'


const WorkCard = (props) => {
    return (
        <div className='project-card'>
            <div className='image'>
                <img src={props.imgsrc} alt='image'></img>
            </div>
            <div className='project-title'>
                <h2>{props.title}</h2>
            </div>
            <div>
                <div>
                    <p className='paraprocard'>{props.text}</p>
                </div>
            </div>
            <div className='pro-btns'>
                <NavLink to={props.view} className='btns'>View</NavLink>
                <NavLink to={props.view} className='btns'>Source</NavLink>
            </div>
        </div>
    )
}

export default WorkCard