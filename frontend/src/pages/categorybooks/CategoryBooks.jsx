import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CardBook from '../../components/card/CardBook';

const CategoryBooks = () => {
    const { category } = useParams();
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5000/api/books?category=${category}`)
            .then(response => response.json())
            .then(data => setBooks(data))
            .catch(error => console.error('Error fetching data:', error));
    }, [category]);

    if (!books.length) {
        return <div className='h-screen text-white text-center mt-96'>No hay libros de esa categoria.</div>;
    }

    const handleCardClick = (id) => {
        navigate(`/book/${id}`);
    };

    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 px-14">
            {books.map(book => (
                <CardBook key={book._id} book={book} onClick={() => handleCardClick(book._id)} />
            ))}
        </div>
    );
};

export default CategoryBooks;
