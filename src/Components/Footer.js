import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import appstore from '../Components/app_store.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>
            We are your trusted travel partner, offering curated travel experiences that create memories to last a lifetime. Explore the world with confidence and enjoy hassle-free travel services with us.
          </p>
        </div>
        
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/packages">Packages</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </div>
        
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: abhishekahi49650@gmail.com</p>
          <p>Phone: +91 8431499629</p>
          <p>123 Travel Street, Bengaluru City, India</p>
        </div>

        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon"><i className="fab fa-facebook-f"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon"><i className="fab fa-instagram"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon"><i className="fab fa-linkedin"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>
      <div className="app-downloads">
          <h3>Download Our App</h3>
          <div className="app-icons">
            <a href="https://play.google.com" target="_blank" rel="noreferrer">
              <img src={appstore} />
            </a>
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noreferrer">
              <img src={appstore} />
            </a>
          </div>
        </div>

      <div className="footer-bottom">
        <p>&copy; 2024 AA. All rights reserved.</p>

        
      </div>
    </footer>
  );
};

export default Footer;
