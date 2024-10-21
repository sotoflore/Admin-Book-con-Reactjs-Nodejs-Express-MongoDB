import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import InputField from '../postBooks/components/InputField';
import TextareaField from '../postBooks/components/TextareaField';

const EditBookForm = () => {
    const token = localStorage.getItem('token');
    const { id } = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [language, setLanguage] = useState('');
    const [category, setCategory] = useState('');

    useEffect(() => {
        // Hacer una solicitud al backend para obtener los datos del libro
        fetch(`http://localhost:5000/api/books/${id}`,
            {
                headers: {
                    'Authorization': token,
                }
            }
        )
            .then(response => response.json())
            .then(data => {
                setTitle(data.title);
                setAuthor(data.author);
                setDescription(data.description);
                setPrice(data.price);
                setLanguage(data.language);
                setCategory(data.category);
            })
            .catch(error => console.error(error));
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/api/books/${id}`, {
                method: 'PUT',
                headers: {
                    'Authorization': token,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, author, description, price, language, category }),
            });
            if (!response.ok) {
                throw new Error('Error al actualizar el libro');
            }
            // Redirigir al usuario a la página de libros o mostrar un mensaje de éxito
            navigate ('/admin/books');
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };

    return (
        <div className='flex flex-col items-center'>
            <h2 className='text-center text-4xl my-4 font-extrabold'>Editar Libro</h2>
            <form onSubmit={handleSubmit} className='p-6 max-h-[31rem] overflow-y-auto w-4/5 rounded-xl border border-gray-200 shadow-custom scrollbar-custom'>
                <InputField
                    id="title"
                    label="Título:"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Escribe el título aquí..."
                />
                <TextareaField
                    id="description"
                    label="Descripción:"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <div className='flex items-center gap-10'>
                    <InputField
                        id="author"
                        label="Autor:"
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        placeholder="Escribe el autor aquí..."
                    />
                    <InputField
                        id="price"
                        label="Precio:"
                        type="text"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="Escribe el precio aquí..."
                    />
                </div>
                <div className='flex items-center gap-10'>
                    <InputField
                        id="language"
                        label="Idioma"
                        type="text"
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        placeholder="Escribe el idioma aquí..."
                    />
                    <div className='w-full'>
                        <label htmlFor="category" className="font-bold">Categoría:</label>
                        <select 
                            id="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option value="">seleccione una categoría...</option>
                            <option value="Data Engineering">Data Engineering</option>
                            <option value="Data Science">Data Science</option>
                            <option value="Data Analysis">Data Analysis</option>
                            <option value="Data Management">Data Management</option>
                        </select>
                    </div>
                </div>
                <button className='bg-secondary w-full rounded-lg py-2 font-extrabold uppercase mt-10' type="submit">Guardar Cambios</button>
            </form>
        </div>
    );
};

export default EditBookForm;