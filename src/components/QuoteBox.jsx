import React, { useState, useEffect } from 'react';
import './QuoteBox.css'; // Import your CSS here

const QuoteBox = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch('/api/stoic-quote'); // Use the proxy path
        const data = await response.json();
        setQuote(data.data.quote);
        setAuthor(data.data.author);
      } catch (error) {
        console.error('Error fetching quote:', error);
      }
    };

    fetchQuote();
  }, []); // Empty dependency array to ensure it only runs once

  return (
    <div className="quote-box">
      <p className="quote-text">"{quote}"</p>
      <p className="quote-author">- {author}</p>
    </div>
  );
};

export default QuoteBox;
