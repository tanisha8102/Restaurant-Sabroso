import React, { useState } from 'react';
import './Specialties.css';
import img from "../assets/trans-dish.png";
import img2 from "../assets/trans-pasta.png";
import img3 from "../assets/main-food.png";
import img4 from "../assets/food.png";
import img5 from "../assets/pancake.png";
import img6 from "../assets/dessert.png";

const Specialties = () => {
  const [activeTab, setActiveTab] = useState('Starters');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Starters':
        return (
          <div className="dish-grid">
            <div className="dish-item">
              <img src={img} alt="Dish 1" />
              <p>Starter Dish</p>
            </div>
            <div className="dish-item">
              <img src={img2} alt="Dish 2" />
              <p>Starter Dish</p>
            </div>
          </div>
        );
      case 'Mains':
        return (
          <div className="dish-grid">
            <div className="dish-item">
              <img src={img3} alt="Dish 1" />
              <p>Main Dish</p>
            </div>
            <div className="dish-item">
              <img src={img4} alt="Dish 2" />
              <p>Main Dish</p>
            </div>
          </div>
        );
      case 'Desserts':
        return (
          <div className="dish-grid">
            <div className="dish-item">
              <img src={img5} alt="Dish 1" />
              <p>Dessert Dish</p>
            </div>
            <div className="dish-item">
              <img src={img6} alt="Dish 2" />
              <p>Dessert Dish</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="specialties-section">
            <h2>Tasty and Crunchy</h2>
            <h1>Our Specialties</h1>
      <div className="content-wrapper">
        <div className="text-section">
          <div className="menu-tabs">
            <div
              className={`tab ${activeTab === 'Starters' ? 'active' : ''}`}
              onClick={() => handleTabClick('Starters')}
            >
              Starters
            </div>
            <div
              className={`tab ${activeTab === 'Mains' ? 'active' : ''}`}
              onClick={() => handleTabClick('Mains')}
            >
              Mains
            </div>
            <div
              className={`tab ${activeTab === 'Desserts' ? 'active' : ''}`}
              onClick={() => handleTabClick('Desserts')}
            >
              Desserts
            </div>
          </div>
          <p className="menu-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="images-section">
          {renderTabContent()}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
