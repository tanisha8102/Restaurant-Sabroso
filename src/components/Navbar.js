import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FaShoppingCart, FaSearch, FaBars } from "react-icons/fa";
import Logo from "../assets/logo-light.png";
import LogoDark from "../assets/logo-dark.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <a href="/">
          <img
            src={scrolled ? LogoDark : Logo}
            alt="Logo"
            className="logo-img"
          />
        </a>
      </div>

      {/* Navigation Items */}
      <div className={`nav-items ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/menu">Menu</a> {/* Link to the menu */}
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>

      {/* Icons */}
      <div className="icons">
        <FaSearch className="icon" />
        <FaShoppingCart className="icon" />
        <button className="menu-toggle" onClick={toggleMenu}>
          <FaBars />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
