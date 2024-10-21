import React, { useEffect, useState } from 'react';
import IconUserEmail from '../../../icons/IconUserEmail';
import IconDelete from '../../../icons/IconDelete';

const EmailList = () => {
    const [emails, setEmails] = useState([]);
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchEmails = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/emails', {
                    headers: {
                        'Authorization': token
                    }
                });
                if (response.ok) {
                    const data = await response.json();
                    setEmails(data);
                } else {
                    console.error('Error fetching emails');
                }
            } catch (error) {
                console.error('There was an error fetching the emails!', error);
            }
        };
        fetchEmails();
    }, [token]);

    const updateEmailStatus = async (id, status) => {
        try {
            const response = await fetch(`http://localhost:5000/api/emails/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                },
                body: JSON.stringify({ status }),
            });
            if (response.ok) {
                setEmails((prevEmails) =>
                    prevEmails.map((email) =>
                        email._id === id ? { ...email, status } : email
                    )
                );
            } else {
                console.error('Error updating email status');
            }
        } catch (error) {
            console.error('There was an error updating the email status!', error);
        }
    };

    const deleteEmail = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/emails/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': token
                }
            });
            if (response.ok) {
                setEmails((prevEmails) => prevEmails.filter((email) => email._id !== id));
            } else {
                console.error('Error deleting email');
            }
        } catch (error) {
            console.error('There was an error deleting the email!', error);
        }
    };

    return (
        <div className='mt-5 flex flex-col items-center px-10'>
            <h2 className='text-center text-3xl font-bold mb-2'>Emails recibidos</h2>
            <div className="relative overflow-y-auto shadow-custom sm:rounded-lg max-h-[31rem] scrollbar-custom">
                <table className="w-full text-sm text-left">
                    <thead className="text-xs text-white uppercase bg-dark sticky top-0">
                        <tr>
                            <th scope="col" className="p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 bg-dark rounded focus:ring-blue-500 dark:focus:ring-blue-600" />
                                    <label htmlFor="checkbox-all-search" className="sr-only bg-dark">checkbox</label>
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Usuario
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Nombre
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Mensaje
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Estado
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Acciones
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {emails.map((email) => (
                            <tr key={email._id} className='hover:bg-gray-100 cursor-pointer'>
                                <td className="w-4 p-4">
                                    <div className="flex items-center">
                                        <input 
                                            id={`checkbox-${email._id}`} 
                                            type="checkbox" 
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            checked={email.status === 'enviado'}
                                            onChange={() => updateEmailStatus(email._id, email.status === 'pendiente' ? 'enviado' : 'pendiente')}
                                        />
                                        <label htmlFor={`checkbox-${email._id}`} className="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                    <IconUserEmail/> 
                                </th>
                                <td className="px-6 py-4">
                                    {email.name}
                                </td>
                                <td className="px-6 py-4">
                                   {email.email}
                                </td>
                                <td className="px-6 py-4">
                                    {email.message}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <div className={`h-2.5 w-2.5 rounded-full me-2 ${email.status === 'pendiente' ? 'bg-red-600' : 'bg-green-600'}`} /> {email.status}
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <button 
                                        className="bg-red-600 text-white p-2 rounded"
                                        onClick={() => deleteEmail(email._id)}
                                    >
                                        <IconDelete/>
                                    </button>
                                </td>
                            </tr>
                        ))}       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EmailList;


