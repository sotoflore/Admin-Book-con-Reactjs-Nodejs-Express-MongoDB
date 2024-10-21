import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import imgBook from '../../assets/Learning-SQL.jpeg';

const BookDetails = () => {
    
    const { id } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/api/books/${id}`)
            .then(response => response.json())
            .then(data => setBook(data))
            .catch(error => console.error('Error fetching data:', error));
    }, [id]);

    if (!book) {
        return <div>Loading...</div>;
    }
    
    return (
        <section className="py-14">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={imgBook} />
                    <div className="lg:w-1/2 w-full lg:pl-10">
                        <h2 className="text-sm title-font text-gray-100 tracking-widest mb-2">{book.category}</h2>
                        <h1 className="text-white text-4xl title-font font-medium mb-4">{book.title}</h1>
                        <div className="mb-4">
                            <span className="text-gray-100 block text-xl">Autor: {book.author}</span>
                            <span className="text-gray-100 block text-xl">Idioma: {book.language}</span>
                        </div>
                        <p className="leading-relaxed text-gray-100">{book.description}</p>
                        <div className="flex mt-5">
                            <span className="title-font font-medium text-3xl text-gray-100">$ {book.price}</span>
                            <button className="flex ml-auto text-white bg-primary border-0 py-2 px-6 rounded">Comprar ahora</button>
                        </div>                     
                    </div>
                </div>
                <Link to={`/category/${book.category}`} className="text-white text-2xl">Ver más libros de esta categoría</Link>
            </div>
        </section>
    );
};

export default BookDetails;