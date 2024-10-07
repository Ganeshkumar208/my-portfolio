import './FormStyles.css';
import React, { useState } from 'react';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        alert('Your details have been Reached to Mr.Ganesh. We will react to you soon!');
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <label className='txt'>Your Name</label>
                <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                />

                <label className='txt'>Your Email</label>
                <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                />

                <label className='txt'>Subject</label>
                <input
                    type='text'
                    name='subject'
                    value={formData.subject}
                    onChange={handleChange}
                />

                <label className='txt'>Message</label>
                <textarea
                    rows={5}
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    placeholder='Type Your Message'
                />

                <button className='btns-form' type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default Form;
