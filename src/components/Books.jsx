import React from 'react';
import meditations from '../images/meditations by Marcus Aurelius.png'; // Replace with your actual image paths
import letters from '../images/Letters from a Stoic by Seneca.png'; // Replace with your actual image paths
import enchiridion from '../images/enchiridion by Epictetus.png'; // Replace with your actual image paths
import discourses from '../images/Discourses of Epictetus.png'; // Replace with your actual image paths
import nature from '../images/on the Nature of Things by Lucretius.png'; // Replace with your actual image paths
import fragments from '../images/Fragments of Heraclitus.png'; // Replace with your actual image paths

const booksData = [
  {
    name: "Meditations By Marcus Aurelius",
    image: meditations,
    link: "https://en.wikipedia.org/wiki/Meditations",
  },
  {
    name: "Letters From A Stoic By Seneca",
    image: letters,
    link: "https://en.wikipedia.org/wiki/Epistulae_Morales_ad_Lucilium",
  },
  {
    name: "Enchiridion By Epictetus",
    image: enchiridion,
    link: "https://en.wikipedia.org/wiki/Enchiridion_of_Epictetus",
  },
  {
    name: "Discourses Of Epictetus",
    image: discourses,
    link: "https://en.wikipedia.org/wiki/Discourses_of_Epictetus",
  },
  {
    name: "On The Nature Of Things By Lucretius",
    image: nature,
    link: "https://en.wikipedia.org/wiki/De_rerum_natura",
  },
  {
    name: "Fragments Of Heraclitus",
    image: fragments,
    link: "https://en.wikipedia.org/wiki/Heraclitus#Fragments",
  },
];

const Books = () => {
  return (
    <section id="books" className="bg-gray-900 min-h-screen p-8 scroll-smooth">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2
            id="books-heading"
            className="text-4xl font-extrabold text-white mb-6 relative inline-block"
          >
            Books
            <div className="heading-underline"></div>
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {booksData.map((book, index) => (
            <a
              key={index}
              href={book.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative bg-white text-gray-900 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl border-2 border-transparent hover:border-blue-500"
            >
              <img
                src={book.image}
                alt={book.name}
                className="w-full h-40 object-cover transition-transform duration-300 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 hover:opacity-30 transition-opacity duration-300 ease-in-out"></div>
              <div className="flex items-center justify-center h-24 p-4 relative">
                <p className="text-center text-gray-700 hover:text-gray-900 transition-colors duration-300 ease-in-out">
                  {book.name}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Books;
