import React, { useEffect, useState } from 'react';
import './Booktable.css';
import bgimage from "../assets/bggg.jpg";

const BookTable = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setShowContent(true);  // Trigger animation when section comes into view
          } else {
            setShowContent(false);  // Optionally reset if section is out of view
          }
        });
      },
      { threshold: 0.5 }  // Adjust threshold as needed
    );

    const target = document.querySelector('.book-table');
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);  // Clean up observer
      }
    };
  }, []);

  return (
    <section
      className="book-table"
      style={{
        backgroundImage: `url(${bgimage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className={`book-table-content ${showContent ? 'slide-in' : ''}`}>
        <h2 className="book-table-subtitle">Tasty and Crunchy</h2>
        <h1 className="book-table-title">BOOK A TABLE</h1>
        <p className="book-table-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedolorm
          reminusto doeiusmod tempor incidition ulla mco laboris nisi ut aliquip
          ex ea commo condorico consectetur adipiscing elitut aliquip.
        </p>
        <button className="book-button">BOOK NOW</button>
      </div>
    </section>
  );
};

export default BookTable;
