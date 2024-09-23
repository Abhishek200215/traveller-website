import React from 'react';
import BannerComponent from '../Banner';
import HomeBanner from '../../Components/Home_banner.jpg';
import image from '../../Components/Kedharnat.jpg'
import PackageCard from '../PackageCard';
import TestimonialSection from '../TestimonialSection';

// images for pakages
import Adventure from '../../Components/Adventure.jpg';
import Relaxation from '../../Components/Relaxation.jpg';
import Luxury from '../../Components/Luxury.jpg';

const HomePage = () => {
  return (
    <>
      {/* Banner Section */}
      <BannerComponent
        backgroundImage={HomeBanner}
        title="Welcome to Your Dream Travel"
        subtitle="Explore the world with our curated travel experiences"
        button="Explore More"
      />

      {/* Image and Content Section */}
      <div className="image-content-section">
        <div className="image-card">
          <img src={image} alt="Travel destination" />
        </div>
        <div className="content">
          <h2>Discover Amazing Places</h2>
          <p style={{textAlign:"left"}}>
          At our travel agency, we believe that every journey is an opportunity to experience something extraordinary. Whether you're seeking the thrill of adventure in the wild, the peace of a serene retreat, or a deep dive into the world’s most fascinating cultures, we have the perfect destination waiting for you.

From pristine beaches and vibrant cities to historic landmarks and hidden gems, our carefully curated travel packages offer unique experiences that cater to all kinds of travelers. Let us take care of every detail, so you can immerse yourself in the beauty of the world without a worry.

Embark on your dream vacation today, and discover the places that will leave you with memories to last a lifetime. Let the journey begin!
          </p>
        </div>
      </div>

      {/* Package Section */}
      <div className="package-section">
  <h2>Our Packages</h2>
  <div className="package-cards">
    <a href='/packages' style={{textDecoration:"none"}}><PackageCard
      title="Adventure Package"
      description="Experience the thrill of adventure"
      imageUrl={Adventure}
    /></a>
    <a href='/packages' style={{textDecoration:"none"}}>
    <PackageCard
      title="Relaxation Package"
      description="Unwind at serene destinations"
      imageUrl={Relaxation}
    /></a>
    <a href='/packages' style={{textDecoration:"none"}}>
    <PackageCard
      title="Cultural Package"
      description="Explore rich cultural experiences"
      imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Taj_Mahal%2C_Agra%2C_India.jpg/1280px-Taj_Mahal%2C_Agra%2C_India.jpg"
    /></a>
    <a href='/packages' style={{textDecoration:"none"}}>
    <PackageCard
      title="Luxury Package"
      description="Indulge in luxury vacations"
      imageUrl={Luxury}
    /></a>
  </div>
</div>


      {/* Testimonial Section */}
      <TestimonialSection />
    </>
  );
};

export default HomePage;
