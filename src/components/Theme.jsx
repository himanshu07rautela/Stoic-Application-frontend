import React from 'react';
import edu from '../images/eduaimonia.png';
import fourKeyVirtues from '../images/four-key-virtues.png';
import dichotomyOfControl from '../images/dichotomy-of-control.png';
import impermanenceAndAcceptance from '../images/impermanence-and-acceptance.png';
import natureAndRationality from '../images/nature-and-rationality.png';
import wisdom from '../images/wisdom.png';
import justice from '../images/justice.png';
import courage from '../images/courage.png';
import moderation from '../images/moderation.png';
import selfControlAndDiscipline from '../images/self-control-and-discipline.png';
import communityAndGlobalCitizenship from '../images/community-and-global-citizenship.png';
import perspectiveAndPerception from '../images/perspective-and-perception.png';
import transienceAndImpermanence from '../images/transience-and-impermanence.png';
import empathyAndCompassion from '../images/empathy-and-compassion.png';
import personalResponsibilityAndIntegrity from '../images/personal-responsibility-and-integrity.png';
import stoicJoyAndContentment from '../images/stoic-joy-and-contentment.png';
import resilienceInTheFaceOfTragedy from '../images/resilience-in-the-face-of-tragedy.png';
import overcomingFearAndAnxiety from '../images/overcoming-fear-and-anxiety.png';

const cardsData = [
  { name: "Eudaimonia", image: edu, url: "https://www.stoicismai.com/resources/themes/eudaimonia" },
  { name: "Four Key Virtues", image: fourKeyVirtues, url: "https://www.stoicismai.com/resources/themes/four-key-virtues" },
  { name: "Dichotomy Of Control", image: dichotomyOfControl, url: "https://www.stoicismai.com/resources/themes/dichotomy-of-control" },
  { name: "Impermanence And Acceptance", image: impermanenceAndAcceptance, url: "https://www.stoicismai.com/resources/themes/impermanence-and-acceptance" },
  { name: "Nature And Rationality", image: natureAndRationality, url: "https://www.stoicismai.com/resources/themes/nature-and-rationality" },
  { name: "Wisdom", image: wisdom, url: "https://www.stoicismai.com/resources/themes/wisdom" },
  { name: "Justice", image: justice, url: "https://www.stoicismai.com/resources/themes/justice" },
  { name: "Courage", image: courage, url: "https://www.stoicismai.com/resources/themes/courage" },
  { name: "Moderation", image: moderation, url: "https://www.stoicismai.com/resources/themes/moderation" },
  { name: "Self Control And Discipline", image: selfControlAndDiscipline, url: "https://www.stoicismai.com/resources/themes/self-control-and-discipline" },
  { name: "Community And Global Citizenship", image: communityAndGlobalCitizenship, url: "https://www.stoicismai.com/resources/themes/community-and-global-citizenship" },
  { name: "Perspective And Perception", image: perspectiveAndPerception, url: "https://www.stoicismai.com/resources/themes/perspective-and-perception" },
  { name: "Transience And Impermanence", image: transienceAndImpermanence, url: "https://www.stoicismai.com/resources/themes/transience-and-impermanence" },
  { name: "Empathy And Compassion", image: empathyAndCompassion, url: "https://www.stoicismai.com/resources/themes/empathy-and-compassion" },
  { name: "Personal Responsibility And Integrity", image: personalResponsibilityAndIntegrity, url: "https://www.stoicismai.com/resources/themes/personal-responsibility-and-integrity" },
  { name: "Stoic Joy And Contentment", image: stoicJoyAndContentment, url: "https://www.stoicismai.com/resources/themes/stoic-joy-and-contentment" },
  { name: "Resilience In The Face Of Tragedy", image: resilienceInTheFaceOfTragedy, url: "https://www.stoicismai.com/resources/themes/resilience-in-the-face-of-tragedy" },
  { name: "Overcoming Fear And Anxiety", image: overcomingFearAndAnxiety, url: "https://www.stoicismai.com/resources/themes/overcoming-fear-and-anxiety" },
];

const Theme = () => {
  return (
    <section id="themes" className="bg-gray-900 min-h-screen p-8 scroll-smooth">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2
            id="theme-heading"
            className="text-4xl font-extrabold text-white mb-6 relative inline-block"
          >
            Themes
            <div className="heading-underline"></div>
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cardsData.map((card, index) => (
            <a
              key={index}
              href={card.url}
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
                <p className="text-center text-gray-700 hover:text-gray-900 transition-colors duration-300 ease-in-out">{card.name}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Theme;
