import React, { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import BooksTable from '../../../components/getBooks/BooksTable';
import SearchBar from '../../../components/searchBar/SearchBar';
import { Link } from 'react-router-dom';

const BookList = () => {
    const [books, setBooks] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/books',
                    {
                        headers: {
                            'Authorization': token
                        }
                    }
                );
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setBooks(data);
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };
        fetchBooks();
    }, [token]);

    const deleteBook = (bookId) => {
        setBooks(books.filter(book => book._id !== bookId));
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className='w-full px-10 pt-5'>
            <h2 className='text-4xl mb-10 mt-4 font-extrabold'>Bienvenido al administrador de <span className='uppercase'>colibro tech</span></h2>
            <div className='flex w-full items-center justify-between mb-4'>
                 <SearchBar onSearch={handleSearch} />
                 <Link to="/admin/add-book" className='bg-secondary py-2 inline-block rounded-lg w-1/4 text-center font-extrabold shadow-custom'>Agregar libro</Link>
               </div>
            <BooksTable books={filteredBooks} onDeleteBook={deleteBook} />
            <Toaster position="bottom-right" />
        </div>
    );
}

export default BookList;