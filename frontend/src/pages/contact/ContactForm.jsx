import React, { useState } from 'react';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/emails', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    message,
                }),
            });
            if (response.ok) {
                setName('');
                setEmail('');
                setMessage('');
                alert('Email enviado');
            } else {
                console.error('Error sending email');
            }
        } catch (error) {
            console.error('There was an error sending the email!', error);
        }
    };

    return (
        <section className='flex flex-col justify-center mt-20 h-screen'>
            <form onSubmit={handleSubmit} className='border border-primary shadow-sm w-1/2 mx-auto p-10 rounded-lg space-y-4'>
                <div>
                    <label className='text-primary font-black'>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='escribe tu nombre completo...' required className='bg-white w-full py-2 ps-2 rounded-lg' />
                </div>
                <div>
                    <label className='text-primary font-black'>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='escribe tu correo electrónico...' required className='bg-white w-full py-2 ps-2 rounded-lg'/>
                </div>
                <div>
                    <label className='text-primary font-black'>Message:</label>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows="4" placeholder='escribe tu mensaje...' required className='bg-white w-full ps-2 pt-1 rounded-lg'></textarea>
                </div>
                <button type="submit" className='bg-secondary w-full py-2 rounded-lg mt-5 font-bold'>Enviar mensaje</button>
            </form>
        </section>
    );
};

export default ContactForm;
