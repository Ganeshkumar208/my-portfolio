import './FormStyles.css';
import React, { useState } from 'react';
import { Modal, Button } from 'antd';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
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

            <Modal
                title={<span style={{ color: '#666699', fontWeight: 'bold', fontSize: '22px' }}>Your Details Submitted</span>}
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleOk}
                footer={[
                    <Button key="ok" style={{ color: 'white', backgroundColor: 'black', fontWeight: 'bolder', fontSize: '20px' }} onClick={handleOk}>
                        OK
                    </Button>
                ]}
            >
                <p style={{ fontSize: '18px' }}>Your details have been Reached to Mr.Ganesh, We will react to you soon!</p>
            </Modal>

        </div>
    );
};

export default Form;
