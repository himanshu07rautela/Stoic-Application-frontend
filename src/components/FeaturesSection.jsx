import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './FeaturesSection.css'; // Import your CSS file here
import senneca from '../images/seneca1.jpg';
import philospher from '../images/philosophers1.jpg';
import stone from '../images/stone.jpg';

const FeatureCard = ({ imageSrc, title, description, buttonText, buttonLink, isImageLeft }) => {
  return (
    <div className={`feature-card ${isImageLeft ? 'image-left' : 'image-right'}`}>
      <div className="feature-image">
        <img src={imageSrc} alt={title} />
      </div>
      <div className="feature-content">
        <h2>{title}</h2>
        <h5>{description}</h5>
        <Link to={buttonLink}> {/* Use Link for internal routing */}
          <button className="feature-button">{buttonText}</button>
        </Link>
      </div>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <div className="features-section">
      <FeatureCard
        imageSrc={senneca}
        title="Read"
        description="Explore a collection of insightful readings and resources related to Stoicism."
        buttonText="Go to Read"
        buttonLink="/read"
        isImageLeft={true}
      />
      <FeatureCard
        imageSrc={philospher}
        title="Resources"
        description="Access various tools and materials to enhance your understanding of Stoicism."
        buttonText="Go to Resources"
        buttonLink="/resources"
        isImageLeft={false}
      />
      <FeatureCard
        imageSrc={stone}
        title="About"
        description="Learn more about our mission and the people behind this project."
        buttonText="Go to About"
        buttonLink="/about"
        isImageLeft={true}
      />
    </div>
  );
};

export default FeaturesSection;
