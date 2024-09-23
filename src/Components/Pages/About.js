// About.js
import React from 'react';
import BannerComponent from '../Banner'; // Corrected path
import AboutBanner from '../../Components/About_banner.jpg'; // Add your about page banner image here
import HomeBanner from '../../Components/Home_banner.jpg';


const AboutPage = () => {
  return (
    <>
      <BannerComponent
        backgroundImage={AboutBanner}
        title="About Us"
        subtitle="Your trusted travel partner"
        button="Know More"
      />

      <div className="image-content-section">
        <div className="content">
          <h2>Discover the World with Us!</h2>
          <p style={{ textAlign: "left" }}>
            At [Your Travel Agency Name], we believe that travel is more than just visiting new places; it's about creating unforgettable experiences, immersing yourself in new cultures, and discovering the beauty that the world has to offer. Whether you're looking for an exhilarating adventure in the mountains, a serene getaway by the beach, or an immersive cultural tour, we have the perfect trip waiting for you.
          </p>
        </div>

        <div className="image-card">
          <img src={HomeBanner} alt="Travel destination" />
        </div>
      </div>

      <div className="about-content">
        <h2>Who We Are</h2>
        <p>
          Founded in [Year], our agency is dedicated to providing exceptional travel services and personalized experiences to all kinds of travelers. From solo backpackers to families seeking the ultimate vacation, we offer carefully curated packages to ensure every trip is one to remember. With years of expertise in the industry and a passion for travel, our team of dedicated professionals is here to help you explore the world with ease.
        </p>

        {/* Add CEO and Team section */}
        <div className="team-section">
          <h2>Meet Our Team</h2>
          <div className="team-member">
            <div className="image-wrapper">
              <img src="https://www.shutterstock.com/image-vector/businessman-avatar-profile-vector-260nw-249652369.jpg" alt="CEO" />
            </div>
            <h3>[CEO Name]</h3>
            <p style={{textAlign:"center"}}><strong>Founder & CEO</strong></p>
            <p>
              [CEO Name] is the visionary behind [Your Travel Agency Name]. With a deep love for travel and years of experience in the tourism industry, [CEO Name] founded this agency with a mission to make travel accessible and enjoyable for everyone. Under their leadership, the company has grown to become one of the most trusted names in the travel industry.
            </p>
          </div>

          <div className="team-member">
            <div className="image-wrapper">
              <img src="https://www.shutterstock.com/image-vector/businessman-avatar-profile-vector-260nw-249652369.jpg" alt="Operations Manager" />
            </div>
            <h3>[Operations Manager Name]</h3>
            <p style={{textAlign:"center"}}><strong>Operations Manager</strong></p>
            <p>
              [Operations Manager Name] ensures that every trip goes smoothly. From logistics to customer support, [he/she/they] manages the day-to-day operations with a focus on delivering top-notch service to every client.
            </p>
          </div>

          <div className="team-member">
            <div className="image-wrapper">
              <img src="https://www.shutterstock.com/image-vector/businessman-avatar-profile-vector-260nw-249652369.jpg" alt="Marketing Manager" />
            </div>
            <h3>[Marketing Manager Name]</h3>
            <p style={{textAlign:"center"}}><strong>Marketing Manager</strong></p>
            <p>
              [Marketing Manager Name] leads our marketing efforts, making sure that our incredible packages and services reach the right audience. With a background in digital marketing and a passion for travel, [he/she/they] brings energy and creativity to the team.
            </p>
          </div>
        </div>

        <h2>Our Mission</h2>
        <p>
          Our mission is simple: to make travel accessible, enjoyable, and memorable for everyone. We strive to offer seamless, hassle-free travel experiences that allow you to focus on what truly matters-enjoying your journey. Whether you're venturing into the wild, exploring historical wonders, or soaking in vibrant city life, we are committed to helping you find the trip of your dreams.
        </p>

        <h2>Why Choose Us?</h2>
        <p>
          <strong><span>&bull;</span> Tailored Experiences:</strong> We believe every traveler is unique, which is why we offer personalized packages designed around your preferences, interests, and budget.
        </p>

        <p>
          <strong><span>&bull;</span> Expert Guidance:</strong> With our knowledge of the best destinations and hidden gems, we guide you to explore the world like a local.
        </p>

        <p>
          <strong><span>&bull;</span> Quality & Safety:</strong> Your safety and comfort are our top priority. We partner with trusted providers and ensure every detail is taken care of, from accommodations to activities.
        </p>

        <p>
          <strong><span>&bull;</span> 24/7 Support:</strong> We're here for you at every step of your journey. Our support team is available around the clock to assist with any questions or concerns, so you can travel with peace of mind.
        </p>

        <h2>Destinations We Cover</h2>
        <p>
          From the majestic <b>Alps</b> to the pristine <b>Maldives</b>, from the ancient ruins of <b>Machu Picchu</b> to the bustling streets of <b>Tokyo</b>, we cover a wide array of breathtaking destinations across the globe. Whether it's a tropical paradise or a snowy adventure, your dream destination is just a booking away.
        </p>

        <p>
          We also specialize in <b>spiritual and pilgrimage tours</b> to sacred places like <b>Kedarnath, Rishikesh, Varanasi</b>, and other holy sites. Whether you're seeking inner peace or a deep spiritual connection, we can guide you on a journey of a lifetime to these divine places.
        </p>

        <h2>Sustainable Travel</h2>
        <p>
          At [Your Travel Agency Name], we believe in responsible tourism. We aim to minimize our environmental impact by supporting eco-friendly travel options and working with local communities to ensure that tourism benefits both travelers and the places they visit. By choosing us, you’re not just embarking on a journey—you’re making a positive contribution to the world.
        </p>

        <h2>Join Us on the Journey</h2>
        <p>
          Whether you're dreaming of a relaxing beach vacation, a thrilling adventure, or a meaningful cultural immersion, we are here to help you make it happen. Join us on the journey of a lifetime, and let us create experiences that you’ll treasure forever.
        </p>

        <p><strong>Your journey starts here. Let's explore the world together.</strong></p>
      </div>
    </>
  );
};

export default AboutPage;
