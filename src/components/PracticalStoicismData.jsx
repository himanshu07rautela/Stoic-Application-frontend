import React from 'react';
import negativeVisualizationImage from '../images/negative-visualisation.png';
import journalingImage from '../images/journaling.png';
import contemplationOfNatureImage from '../images/contemplation-of-nature.png';
import voluntaryDiscomfortImage from '../images/voluntary-discomfort.png';
import mindfulnessImage from '../images/mindfulness.png';
import stoicExercisesImage from '../images/stoic-exercises.png';

const practicalStoicismData = [
  {
    name: "Negative Visualization",
    image: negativeVisualizationImage,
    link: "https://en.wikipedia.org/wiki/Negative_visualization",
  },
  {
    name: "Journaling",
    image: journalingImage,
    link: "https://en.wikipedia.org/wiki/Journal_(disambiguation)",
  },
  {
    name: "Contemplation Of Nature",
    image: contemplationOfNatureImage,
    link: "https://en.wikipedia.org/wiki/Nature",
  },
  {
    name: "Voluntary Discomfort",
    image: voluntaryDiscomfortImage,
    link: "https://en.wikipedia.org/wiki/Voluntary_discomfort",
  },
  {
    name: "Mindfulness And Awareness",
    image: mindfulnessImage,
    link: "https://en.wikipedia.org/wiki/Mindfulness",
  },
  {
    name: "Stoic Exercises For Daily Life",
    image: stoicExercisesImage,
    link: "https://en.wikipedia.org/wiki/Stoicism#Exercises_and_practices",
  },
];

const PracticalStoicism = () => {
  return (
    <section id="practical-stoicism" className="bg-gray-900 min-h-screen p-8 scroll-smooth">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2
            id="practical-stoicism-heading"
            className="text-4xl font-extrabold text-white mb-6 relative inline-block"
          >
            Practical Stoicism
            <div className="heading-underline"></div>
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {practicalStoicismData.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative bg-white text-gray-900 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl border-2 border-transparent hover:border-blue-500"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover transition-transform duration-300 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 hover:opacity-30 transition-opacity duration-300 ease-in-out"></div>
              <div className="flex items-center justify-center h-24 p-4 relative">
                <p className="text-center text-gray-700 hover:text-gray-900 transition-colors duration-300 ease-in-out">
                  {item.name}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticalStoicism;
