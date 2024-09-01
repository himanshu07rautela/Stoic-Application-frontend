import React from 'react';
import Book from './Book';
import './BookList.css';

const books = [
  {
    title: "Meditations",
    author: "Marcus Aurelius",
    coverColor: "#2f4f4f", // Dark green
    icon: "globe",
    readLink: "https://online.fliphtml5.com/sesll/gwqc/", // Replace with the actual link
  },
  {
    title: "The Daily Stoic",
    author: "Ryan Holiday",
    coverColor: "#1e3a8a", // Dark blue
    icon: "crown",
    readLink: "https://online.fliphtml5.com/sesll/tuce/", // Replace with the actual link
  },
];

const BookList = () => {
  return (
    <div className="book-list">
      {books.map((book, index) => (
        <div className="book-item" key={index}>
          <Book 
            title={book.title} 
            author={book.author} 
            coverColor={book.coverColor} 
            icon={book.icon} 
          />
          <div className="book-button-container">
            <a href={book.readLink} target="_blank" rel="noopener noreferrer" className="book-read-button">Read Me</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
