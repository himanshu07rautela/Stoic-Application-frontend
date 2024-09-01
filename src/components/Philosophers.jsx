import React from 'react';
import zeno from '../images/zeno.png'; // Replace with your image paths
import epictetus from '../images/epictetus.png'; // Replace with your image paths
import seneca from '../images/seneca.png'; // Replace with your image paths
import marcus from '../images/marcus.png'; // Replace with your image paths
import cicero from '../images/cicero.png'; // Replace with your image paths
import musonius from '../images/musonius.png'; // Replace with your image paths

const philosophersData = [
  {
    name: "Zeno Of Citium",
    image: zeno,
    link: "https://en.wikipedia.org/wiki/Zeno_of_Citium",
  },
  {
    name: "Epictetus",
    image: epictetus,
    link: "https://en.wikipedia.org/wiki/Epictetus",
  },
  {
    name: "Seneca",
    image: seneca,
    link: "https://en.wikipedia.org/wiki/Seneca_the_Younger",
  },
  {
    name: "Marcus Aurelius",
    image: marcus,
    link: "https://en.wikipedia.org/wiki/Marcus_Aurelius",
  },
  {
    name: "Cicero And Stoicism",
    image: cicero,
    link: "https://en.wikipedia.org/wiki/Cicero",
  },
  {
    name: "Musonius Rufus Lessons",
    image: musonius,
    link: "https://en.wikipedia.org/wiki/Musonius_Rufus",
  },
];

const Philosophers = () => {
  return (
    <section id="philosophers" className="bg-gray-900 min-h-screen p-8 scroll-smooth">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2
            id="philosophers-heading"
            className="text-4xl font-extrabold text-white mb-6 relative inline-block"
          >
            Philosophers
            <div className="heading-underline"></div>
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {philosophersData.map((card, index) => (
            <a
              key={index}
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative bg-white text-gray-900 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl border-2 border-transparent hover:border-blue-500"
            >
              <img
                src={card.image}
                alt={card.name}
                className="w-full h-40 object-cover transition-transform duration-300 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 hover:opacity-30 transition-opacity duration-300 ease-in-out"></div>
              <div className="flex items-center justify-center h-24 p-4 relative">
                <p className="text-center text-gray-700 hover:text-gray-900 transition-colors duration-300 ease-in-out">
                  {card.name}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophers;
