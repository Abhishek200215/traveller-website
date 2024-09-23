import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <img src="" alt="Logo Here" />
          </Link>
        </div>

        <div className={`menu-icon ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>

        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li>
            <Link to="/" className="nav-item" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-item" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/packages" className="nav-item" onClick={() => setIsOpen(false)}>
              Packages
            </Link>
          </li>
          <li>
            <Link to="/blog" className="nav-item" onClick={() => setIsOpen(false)}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-item" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
