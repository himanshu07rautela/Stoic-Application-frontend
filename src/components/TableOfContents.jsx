// src/components/TableOfContents.jsx
import React from 'react';
import './TableOfContents.css';

const TableOfContents = () => {
  return (
    <section className="table-of-contents">
      <div className="container">
        <div className="column1">
          <h2 className="title">Table of Contents</h2>
          <div className="underline"></div>
          <div className="links-wrapper">
            
            <a href="/resources#philosophers">
              <button className="content-button">Philosophers</button>
            </a>
            <a href="#theme-heading">
              <button className="content-button">Themes</button>
            </a>
            <a href="/resources#practical-stoicism">
              <button className="content-button">Practical Stoicism</button>
            </a>
            <a href="/resources#books">
              <button className="content-button">Books</button>
            </a>
            <a href="/resources#contemporary-stoicism">
              <button className="content-button">Contemporary Stoicism</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TableOfContents;
