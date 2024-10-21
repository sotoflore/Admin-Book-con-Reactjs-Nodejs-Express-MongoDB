import React, { useEffect, useState } from 'react'
import CardBook from '../../components/card/CardBook';
import { useNavigate } from 'react-router-dom';

const AllBooks = () => {
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5000/api/books')
            .then(response => response.json())
            .then(data => setBooks(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleCardClick = (id) => {
        navigate(`/book/${id}`);
    };

    return (
        <div className="mt-32">
            <h1 className='text-white mb-5'>Book List</h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 px-14">
                {books.map(book => (
                    <CardBook key={book._id} book={book} onClick={() => handleCardClick(book._id)} />
                ))}
            </div>
        </div>
    );
}
export default AllBooks;