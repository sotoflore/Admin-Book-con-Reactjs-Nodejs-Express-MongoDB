// src/BookCard.js
import React from 'react';
import imgBook from '../../assets/Learning-SQL.jpeg';

const CardBook = ({ book, onClick }) => {
    return (
        <section className="max-w-sm rounded-lg shadow bg-gray-800 border border-gray-700 cursor-pointer" onClick={onClick}>
            <img className="rounded-lg" src={imgBook} alt="imagen de libro" />
            <div className='px-6 py-3'>
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-white">{book.title}</h2>
                <p className="mb-3 font-normal text-gray-400">{book.author}</p>
                <p className="mb-3 font-normal text-gray-400">$ {book.price}</p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-secondary rounded-lg">
                    comprar ahora
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a>
            </div>
        </section>
    );
};
export default CardBook;
