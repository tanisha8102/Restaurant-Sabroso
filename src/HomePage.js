// HomePage.js
import React, { useState } from 'react';
import './HomePage.css'; // Importing the CSS file
import bgimg1 from "./assets/banner.jpg";
import bgimg2 from "./assets/banner.jpg";
import bgimg3 from "./assets/banner.jpg";
import Navbar from './components/Navbar';
import OurStory from './components/OurStory';
import BookTable from './components/BookTable';
import Specialties from './components/Specialties';
import Gallery from './components/Gallery';
import ChefSection from './components/ChefSection';
import Menu from './components/Menu';

const HomePage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [animationKey, setAnimationKey] = useState(0); // Add a key to trigger re-mounting of content

  const slides = [
    {
      image: bgimg1,
      subtitle: "Tasty and Crunchy",
      title: "Restaurant",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      buttonText: "View Our Menu",
    },
    {
      image: bgimg2,
      subtitle: "Exquisite Flavors",
      title: "Fine Dining",
      description: "Indulge in the finest dishes crafted by our expert chefs, delivering a culinary experience like no other.",
      buttonText: "Explore Dishes",
    },
    {
      image: bgimg3,
      subtitle: "Authentic Cuisine",
      title: "Gourmet Meals",
      description: "Experience the rich flavors of authentic gourmet meals, made with love and the freshest ingredients.",
      buttonText: "Reserve a Table",
    },
  ];

  // Handle carousel navigation
  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % slides.length);
    resetAnimation(); // Reset animation on each slide change
  };

  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + slides.length) % slides.length);
    resetAnimation(); // Reset animation on each slide change
  };

  // Function to trigger re-mounting of the content for animation
  const resetAnimation = () => {
    setAnimationKey((prevKey) => prevKey + 1); // Change key to force re-render
  };

  return (
    <div>
      <Navbar />
      <div className="homepage-container">
        {/* Background Image */}
        <div
          className="background-image"
          style={{ backgroundImage: `url(${slides[currentImage].image})` }}
        ></div>

        {/* Overlay */}
        <div className="overlay"></div>

        {/* Centered Content */}
        <div className="content" key={animationKey}>
          <h2 className="subtitle">{slides[currentImage].subtitle}</h2>
          <h1 className="title">{slides[currentImage].title}</h1>
          <p className="description">{slides[currentImage].description}</p>
          <button className="menu-button">{slides[currentImage].buttonText}</button>
        </div>

        {/* Carousel Navigation */}
        <button className="carousel-button prev" onClick={prevImage}>❮</button>
        <button className="carousel-button next" onClick={nextImage}>❯</button>
      </div>
      <OurStory/>
      <BookTable/>
      <Specialties/>
      <Gallery/>
      <ChefSection/>
      <Menu/>
    </div>
  );
};

export default HomePage;
