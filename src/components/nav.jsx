import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../styles/nav.css';
import logo from "../assets/navlogo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className={`hamburger-menu ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
