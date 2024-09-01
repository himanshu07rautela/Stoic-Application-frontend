import React from 'react';
import Header from '../components/Header';// Adjust the path if needed
import Book from '../components/Book';
import BookList from '../components/BookList';
import marcus from '../images/philosophers1.jpg'

const Read = () => {
  return (
    <div>
     <Header></Header>
     <BookList></BookList>
    </div>
  );
};

export default Read;
