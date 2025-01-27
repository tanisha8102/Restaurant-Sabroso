import React from "react";
import "./Blogsection.css";
import img from "../assets/choco.jpg"
import img2 from "../assets/lunch3.jpg"
import img3 from "../assets/bulgarian.jpg"
import img4 from "../assets/dinner2.jpg"

const BlogSection = () => {
  const blogs = [
    {
      category: "Food, French",
      title: "Simple Recipes for Next Spring",
      description: "We’ve all been dying to know which type of magic the Gaines would bring to the café, a landmark on Waco’s...",
      date: "May 26, 2017",
      image: img // Replace with actual image URL
    },
    {
      category: "Dinner, Food",
      title: "Dinner Party for ur new Chef!",
      description: "We’ve all been dying to know which type of magic the Gaines would bring to the café, a landmark on Waco’s...",
      date: "May 26, 2017",
      image: img2 // Replace with actual image URL
    },
    {
      category: "Cheese, Food",
      title: "Cake with a Creamy Cheese",
      description: "We’ve all been dying to know which type of magic the Gaines would bring to the café, a landmark on Waco’s...",
      date: "May 26, 2017",
      image:img3// Replace with actual image URL
    },
    {
      category: "Coffee, French, Toast",
      title: "Hong Kong style French toast",
      description: "We’ve all been dying to know which type of magic the Gaines would bring to the café, a landmark on Waco’s...",
      date: "May 26, 2017",
      image: img4 // Replace with actual image URL
    }
  ];

  return (
    <div className="blog-section">
      <h2 className="section-title">Don’t miss Our News & Events</h2>
      <p className="section-subtitle">
        Follow our latest news updates to know about our offers, recipes and events. One cannot think well,
        love well, sleep well, if one has not dined well.
      </p>
      <div className="blog-cards">
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <span className="blog-category">{blog.category}</span>
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-description">{blog.description}</p>
              <span className="blog-date">{blog.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
