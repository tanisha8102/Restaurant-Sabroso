import React, { useEffect, useState } from 'react';
import './Gallery.css';

// Import images at the top
import image1 from '../assets/dosa.jpg';
import image2 from '../assets/sushi.jpg';
import image3 from '../assets/paa.jpg';
import image4 from '../assets/pata.jpg';
import image5 from '../assets/bulgarian.jpg';
import image6 from '../assets/Ceviche.jpg';
import image7 from '../assets/Poutine.jpg';
import image8 from '../assets/tiramisu.jpg';
import image9 from '../assets/waffle.jpg';

// Create the image array
const images = [
  { src: image1, alt: 'Image 1' },
  { src: image2, alt: 'Image 2' },
  { src: image3, alt: 'Image 3' },
  { src: image4, alt: 'Image 4' },
  { src: image5, alt: 'Image 5' },
  { src: image6, alt: 'Image 6' },
  { src: image7, alt: 'Image 7' },
  { src: image8, alt: 'Image 8' },
  { src: image9, alt: 'Image 9' },
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change the image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop back after the last image
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  // Create a new array that duplicates the images to create the infinite loop effect
  const allImages = [...images, ...images];

  return (
    <section className="gallery">
      <div className="gallery-wrapper">
        <div
          className="gallery-grid"
          style={{
            transform: `translateX(-${(currentIndex * 100) / 5}%)`, // Move the row of images
            transition: 'transform 1s ease-in-out', // Smooth transition for sliding effect
          }}
        >
          {allImages.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image.src} alt={image.alt} className="gallery-image" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
