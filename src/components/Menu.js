import React, { useState } from 'react';
import './Menu.css';
import menuData from './menuData';

const Menu = () => {
  const [activeTab, setActiveTab] = useState("drinks");

  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
  };

  const items = menuData[activeTab];

  return (
    <section className="menu">
      <div className="menu-content">
        <h2 className="menu-subtitle">Tasty and Crunchy</h2>
        <h1 className="menu-title">Fresh Ingredient, Tasty Meals</h1>
        <p className="menu-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="tab-buttons">
        {Object.keys(menuData).map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? "active" : ""}`}
            onClick={() => handleTabSwitch(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="wood-section">
        <div className="grid-container">
          {items.map((item, index) => (
            <div className="grid-item" key={index}>
              {item.image ? (
                <img src={item.image} alt={`Item ${index + 1}`} className="grid-image" />
              ) : (
                <div>
                  <h3 className="item-price">{item.price}</h3>
                  <h2 className="item-title">{item.title}</h2>
                  <p className="item-description">{item.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <button className='discover-button'>Discover More</button>
    </section>
  );
};

export default Menu;
