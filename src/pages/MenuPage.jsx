import React from 'react';
import './MenuPage.css'; // Import the CSS file for styling
import Navbar from '../components/Navbar';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

const MenuPage = () => {
  return (
    <div>
      <Navbar/>
    <div className="menu-page">
      <div className="banner">
          <h1 className="banner-text">Discover Our Menu</h1>
      </div>
    </div>
    <Menu/>
    <Footer/>
    </div>
  );
};

export default MenuPage;
