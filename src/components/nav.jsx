// src/components/Nav.jsx
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../styles/nav.css';
import logo from "../assets/navlogo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className={`hamburger-menu ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
  <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
  <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
  <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
  <li><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a></li>
  <li><a href="#blog" onClick={() => setMenuOpen(false)}>Blog</a></li>
  <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
</ul>
      </div>
    </nav>
  );
}

export default Navbar;