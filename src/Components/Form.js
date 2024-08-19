import './FormStyles.css'

import React from 'react'

const Form = () => {
    return (
        <div className='form'>
            <form>
                <label className='txt'>Your Name</label>
                <input type='text' />
                <label className='txt'>Your Email</label>
                <input type='email' />
                <label className='txt'>Subject</label>
                <input type='text' />
                <label className='txt'>Message</label>
                <textarea rows={5} type='text' placeholder='Type Your Message' />
                <button className='btns-form'>Submit</button>
            </form>
        </div>
    )
}

export default Form