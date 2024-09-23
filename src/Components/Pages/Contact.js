import React from 'react';
import BannerComponent from '../Banner'; // Corrected path
import ContactBanner from '../../Components/Contact_banner.jpg'; // Add your contact page banner image here

const ContactPage = () => {
  return (
    <>
      <BannerComponent
        backgroundImage={ContactBanner}
        title="Contact Us"
        subtitle="We'd love to hear from you"
      />

      <div className="contact-container">
        {/* Contact Us - Form */}
        <div className="contact-form">
          <h3>Contact Us</h3>
          <form>
            <input type="text" placeholder="First Name" required name='firstname'/>
            <input type="text" placeholder="Last Name" required name='lastname'/>
            <input type="date" placeholder="Traveling Date" required name='date' />
            <input type="text" placeholder="Address" required name='address' />
            <input type="text" placeholder="Pincode" required name='pincode' />
            <input type="tel" placeholder="Mobile Number" required name='mobilenum' />
            <input type="email" placeholder="Email" required name='email' />
            <textarea placeholder="Your Message" rows="4" required name='message'></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>
            Whether you have a question about our services, need assistance with your booking, or just want to say hello, we’re here to help! Reach out to us via any of the contact methods below and we’ll get back to you as soon as possible.
          </p>
          <div className="contact-details">
            <h4>Email Us</h4>
            <p><a href="abhishekahi49650@gmail.com">abhishekahi49650@gmail.com</a></p>
            
            <h4>Call Us</h4>
            <p><a href="tel:+918431499629">+91 8431499629</a></p>
            
            <h4>Visit Us</h4>
            <p>123 Travel Street, Bengaluru, Karnataka</p>
            
            <h4>Working Hours</h4>
            <p>Monday to Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 10:00 AM - 4:00 PM</p>
          </div>
        </div>

        {/* Map - Our Location */}
        <div className="contact-map">
          <h3>Our Location</h3>
          {/* Add Google Maps iframe or any other map service */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.635929634334!2d-122.41941528467723!3d37.77492927975939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c1c8ff8b5%3A0x0!2zMzbCsDQ2JzMwLjAiTiAxMjLCsDI1JzE4LjAiVw!5e0!3m2!1sen!2sus!4v1616558420433!5m2!1sen!2sus"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
