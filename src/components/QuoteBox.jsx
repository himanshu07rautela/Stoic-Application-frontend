import React, { useState, useEffect } from 'react';
import './QuoteBox.css'; // Import your CSS here

const QuoteBox = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        // Update the URL to the new API endpoint
        const response = await fetch('https://quotes-api-self.vercel.app/quote');
        const data = await response.json();
        
        // Assuming the structure of the response is { quote: "some quote", author: "some author" }
        setQuote(data.quote);
        setAuthor(data.author);
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
