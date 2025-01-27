import React from 'react';
import './OurStory.css'; // Importing the CSS file for the section
import image1 from '../assets/kitchen.jpg'; // Replace with actual image path
import image2 from '../assets/dessert.jpg'; // Replace with actual image path

const OurStory = () => {
  return (
    <section className="our-story">
      <div className="our-story-content">
        <h2 className="our-story-subtitle">Tasty and Crunchy</h2>
        <h1 className="our-story-title">Our Story</h1>
        <p className="out-story-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="images">
        <img src={image1} alt="Our kitchen" className="image" />
        <img src={image2} alt="Delicious dessert" className="image" />
      </div>
    </section>
  );
};

export default OurStory;
