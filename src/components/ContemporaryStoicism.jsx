import React from 'react';
import life from '../images/stoicism-in-21st-century-life.png'; // Replace with your actual image paths
import politics from '../images/stoicism-and-politics.png'; // Replace with your actual image paths
import ethics from '../images/stoicism-and-contemporary-ethics.png'; // Replace with your actual image paths

const contemporaryStoicismData = [
  {
    name: "Stoicism In 21st Century Life",
    image: life,
    link: "https://en.wikipedia.org/wiki/Stoicism#Modern_Stoicism",
  },
  {
    name: "Stoicism And Politics",
    image: politics,
    link: "https://en.wikipedia.org/wiki/Stoicism#Political_impact",
  },
  {
    name: "Stoicism And Contemporary Ethics",
    image: ethics,
    link: "https://en.wikipedia.org/wiki/Stoicism#Ethics",
  },
];

const ContemporaryStoicism = () => {
  return (
    <section id="contemporary-stoicism" className="bg-gray-900 min-h-screen p-8 scroll-smooth">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2
            id="contemporary-stoicism-heading"
            className="text-4xl font-extrabold text-white mb-6 relative inline-block"
          >
            Contemporary Stoicism
            <div className="heading-underline"></div>
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {contemporaryStoicismData.map((topic, index) => (
            <a
              key={index}
              href={topic.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative bg-white text-gray-900 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl border-2 border-transparent hover:border-blue-500"
            >
              <img
                src={topic.image}
                alt={topic.name}
                className="w-full h-40 object-cover transition-transform duration-300 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 hover:opacity-30 transition-opacity duration-300 ease-in-out"></div>
              <div className="flex items-center justify-center h-24 p-4 relative">
                <p className="text-center text-gray-700 hover:text-gray-900 transition-colors duration-300 ease-in-out">
                  {topic.name}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContemporaryStoicism;
