import React from 'react';
import profilePic from '../images/profile_about_me1.jpg'; // Replace with your actual image path

const ElegantCard = () => {
  return (
    <section className="bg-dark-blue min-h-screen p-8 flex items-center justify-center">
      <div className="card bg-dark-gray p-8 rounded-lg shadow-xl relative overflow-hidden">
        <img
          src={profilePic}
          alt="Himanshu Rautela"
          className="profile-pic rounded-full border-4 border-gold shadow-lg"
        />
        <div className="content mt-24 text-center">
          <h2 className="text-5xl font-serif font-bold text-light-gray mb-6 underline-custom">
            How Stoicism Has Shaped My Life
          </h2>
          <p className="text-lg leading-relaxed text-light-gray mb-8 mx-4">
            Growing up amidst the serene and challenging landscapes of Uttarakhand, I was constantly faced with a unique set 
            of challenges. The beauty of my surroundings was often juxtaposed with personal struggles and societal expectations. 
            Navigating through these contrasting elements, Stoicism emerged as a guiding force. Its teachings provided me with a 
            profound sense of clarity and resilience. The core Stoic principles of focusing on what is within my control and accepting 
            what I cannot change became central to my life. This philosophy taught me to approach each obstacle with a calm and 
            collected mindset, transforming adversity into an opportunity for growth. By embracing the Stoic practice of reflecting 
            on the impermanence of life, I learned to appreciate the present moment and find peace even in the midst of uncertainty. 
            The practical wisdom of Stoicism not only helped me manage stress and overcome challenges but also inspired me to pursue 
            my goals with a renewed sense of purpose and determination. Through this journey, Stoicism has become more than just a 
            philosophy; it is a way of life that continually shapes my thoughts and actions, fostering a balanced and resilient 
            approach to every aspect of my life.
          </p>
          <h3 className="text-3xl font-serif font-semibold text-light-gray mb-4 underline-custom">
            My Journey with Stoicism and This Application
          </h3>
          <p className="text-lg leading-relaxed text-light-gray mx-4">
            This application is a testament to the profound impact Stoic philosophy has had on my life. It represents a 
            culmination of my experiences and reflections on how Stoicism has guided me through various challenges. From overcoming 
            academic pressures to navigating personal struggles, Stoicism has provided me with a framework to approach life's 
            hurdles with clarity and resilience. Through this application, I aim to share the timeless wisdom of Stoicism with others, 
            offering practical tools and insights to help them find their own path to serenity and purpose. By integrating Stoic principles 
            into daily life, I hope to inspire others to embrace a mindset of balance and acceptance, fostering personal growth and 
            well-being. 
          </p>
          <p className="text-lg leading-relaxed text-light-gray mx-4 mt-6">
            My journey with Stoicism has also led me to explore various aspects of life and philosophy in greater depth. The principles 
            of Stoicism have influenced my approach to both personal and professional goals, encouraging me to strive for excellence 
            while maintaining a balanced perspective. This application serves as a bridge between my personal experiences and the 
            broader Stoic community, aiming to provide valuable insights and practical advice to those seeking to enhance their lives 
            through philosophical wisdom. By embracing the teachings of Stoicism, I’ve learned to navigate the complexities of modern 
            life with grace and resilience, and I hope to pass on these lessons to others who are on their own journey of self-discovery 
            and growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ElegantCard;
