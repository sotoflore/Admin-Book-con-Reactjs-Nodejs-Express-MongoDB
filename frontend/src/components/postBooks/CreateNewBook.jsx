import React, { useState } from 'react';
import InputField from './components/InputField';
import TextareaField from './components/TextareaField';

const CreateNewBook = ({ onSubmit }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [language, setLanguage] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ title, author, description, price, language, category });
        // Resetear los campos del formulario
        setTitle('');
        setAuthor('');
        setDescription('');
        setPrice('');
        setLanguage('');
        setCategory('');
    };

    return (
        <form onSubmit={handleSubmit} className='p-6'>
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
            <div className='flex w-full items-center gap-10'>
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
            <div className="flex items-center justify-center w-full mt-3">
                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 font-bold">Subir imagen aqui...</p>
                        <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" />
                </label>
            </div>
            <button className='bg-secondary w-full rounded-lg py-2 font-extrabold uppercase mt-10' type="submit">agregar nuevo producto</button>
        </form>
    );
};

export default CreateNewBook;
