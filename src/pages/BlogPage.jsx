import React from 'react';
import './MenuPage.css'; // Import the CSS file for styling
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogSection from '../components/BlogSection';

const BlogPage = () => {
  return (
    <div>
      <Navbar/>
    <div className="menu-page">
      <div className="banner">
          <h1 className="banner-text">Explore our Blogs</h1>
      </div>
    </div>
    <BlogSection/>
    <Footer/>
    </div>
  );
};

export default BlogPage;
