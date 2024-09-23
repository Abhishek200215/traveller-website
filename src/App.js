// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import required components from react-router-dom
import HomePage from './Components/Pages/Home';
import AboutPage from './Components/Pages/About';
import ContactPage from './Components/Pages/Contact';
import PackagesPage from './Components/Pages/Pakages'; // Corrected the import path
import BlogPage from './Components/Pages/Blog';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
