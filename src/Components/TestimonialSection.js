import React, { useState, useEffect } from 'react';


const testimonials = [
  {
    quote: "This was the best vacation of my life! Highly recommend.",
    name: "Shankar",
    location: "California, USA",
    image: "https://via.placeholder.com/150" // Replace with actual image URL
  },
  {
    quote: "Amazing service and beautiful destinations. I will book again!",
    name: "Aniruddh",
    location: "London, UK",
    image: "https://via.placeholder.com/150" // Replace with actual image URL
  },
  {
    quote: "Wonderful experience. Everything was perfectly organized.",
    name: "Abhishek",
    location: "Bengaluru, Karnataka",
    image: "https://via.placeholder.com/150" // Replace with actual image URL
  },

  {
    quote: "Wonderful experience. Everything was perfectly organized.",
    name: "Bharat",
    location: "Bengaluru, Karnataka",
    image: "https://via.placeholder.com/150" // Replace with actual image URL
  },

  {
    quote: "Wonderful experience. Everything was perfectly organized.",
    name: "Milton",
    location: "Bengaluru, Karnataka",
    image: "https://via.placeholder.com/150" // Replace with actual image URL
  }
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <div className="testimonial-section">
      <h2>What Our Clients Say</h2>
      <button onClick={nextSlide} className="next-slide">
      <div className="testimonial-slider">
        <div className="testimonial-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
              <p className="testimonial-quote">"{testimonial.quote}"</p>
              <p className="testimonial-name">{testimonial.name}</p>
              <p className="testimonial-location">{testimonial.location}</p>
            </div>
          ))}
        </div>
      </div>
      </button>

    </div>
  );
};

export default TestimonialSection;
