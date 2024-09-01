import React from 'react';
import './Book.css';

const Book = ({ title, author, coverColor, icon }) => {
  return (
    <div className="book">
      <div className="book-cover" style={{ backgroundColor: coverColor }}>
        <div className="book-icon">
          {icon === 'globe' && (
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="80px" height="80px">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-2.53-.35-4.65-1.81-5.94-3.82 1.47-.21 3.12-.47 4.94-.81v4.63zm0-6.48c-1.7.25-3.4.51-4.94.76-.11-.31-.19-.64-.19-.99 0-3.31 2.69-6 6-6s6 2.69 6 6c0 .34-.07.67-.19.98-1.55-.26-3.24-.51-4.94-.77V8.41l1.9 1.9c.34.34.9.34 1.24 0s.34-.9 0-1.24l-3.41-3.41c-.34-.34-.9-.34-1.24 0L7.07 9.07c-.34.34-.34.9 0 1.24s.9.34 1.24 0l1.9-1.9v4.04z"/>
            </svg>
          )}
          {icon === 'crown' && (
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="80px" height="80px">
              <path d="M4 15v4c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-4H4zm15.73-9.76l-1.99 3.95c-.19.37-.54.61-.94.61-.4 0-.75-.24-.94-.61l-.88-1.77-2.35 3.53c-.19.29-.51.47-.86.47-.34 0-.66-.18-.85-.47L9.02 7.42l-.88 1.77c-.18.37-.54.61-.94.61s-.75-.24-.94-.61l-1.99-3.95c-.18-.36-.05-.79.29-1.02.33-.23.78-.19 1.06.1L6 6.2V4c0-.55.45-1 1-1s1 .45 1 1v1.5L12 11l4-5.5V4c0-.55.45-1 1-1s1 .45 1 1v2.2l1.38-1.88c.28-.29.73-.33 1.06-.1.34.23.47.66.29 1.02z"/>
            </svg>
          )}
        </div>
        <div className="book-hover-light" />
        <div className="book-details">
          <h2 className="book-title">{title}</h2>
          <p className="book-author">{author}</p>
        </div>
      </div>
    </div>
  );
};

export default Book;
