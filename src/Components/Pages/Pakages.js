// Packages.js
import React from 'react';
import BannerComponent from '../Banner'; // Corrected path
import PackagesBanner from '../../Components/Packages_banner.jpg'; // Add your packages page banner image here

const PackagesPage = () => {
  const packageSections = [
    { 
      title: "India",
      packages: [
        { 
          title: "Taj Mahal, Agra,",
          description:
            "Enjoy a relaxing vacation on the pristine beaches of the Caribbean. This package includes all-inclusive resorts, guided tours, and water sports.",
          price: "$1,200",
          duration: "7 Days / 6 Nights",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Taj_Mahal%2C_Agra%2C_India.jpg/1280px-Taj_Mahal%2C_Agra%2C_India.jpg",
        },
        {
          title: "European Adventure",
          description:
            "Explore the rich history and culture of Europe with this exciting package. Visit iconic landmarks, savor local cuisine, and immerse yourself in different cultures.",
          price: "$2,500",
          duration: "10 Days / 9 Nights",
          image: "https://muralsyourway.vtexassets.com/arquivos/ids/236663/Tropical-Paradise-At-Maldives-With-Palms-And-Blue-Sky-Wallpaper-Mural.jpg?v=638291857096370000", // Add the image path
        },

        {
            title: "European Adventure",
            description:
              "Explore the rich history and culture of Europe with this exciting package. Visit iconic landmarks, savor local cuisine, and immerse yourself in different cultures.",
            price: "$2,500",
            duration: "10 Days / 9 Nights",
            image: "https://muralsyourway.vtexassets.com/arquivos/ids/236663/Tropical-Paradise-At-Maldives-With-Palms-And-Blue-Sky-Wallpaper-Mural.jpg?v=638291857096370000", // Add the image path
          },

          
        {
            title: "European Adventure",
            description:
              "Explore the rich history and culture of Europe with this exciting package. Visit iconic landmarks, savor local cuisine, and immerse yourself in different cultures.",
            price: "$2,500",
            duration: "10 Days / 9 Nights",
            image: "https://muralsyourway.vtexassets.com/arquivos/ids/236663/Tropical-Paradise-At-Maldives-With-Palms-And-Blue-Sky-Wallpaper-Mural.jpg?v=638291857096370000", // Add the image path
          },

          {
            title: "European Adventure",
            description:
              "Explore the rich history and culture of Europe with this exciting package. Visit iconic landmarks, savor local cuisine, and immerse yourself in different cultures.",
            price: "$2,500",
            duration: "10 Days / 9 Nights",
            image: "https://muralsyourway.vtexassets.com/arquivos/ids/236663/Tropical-Paradise-At-Maldives-With-Palms-And-Blue-Sky-Wallpaper-Mural.jpg?v=638291857096370000", // Add the image path
          },

          {
            title: "European Adventure",
            description:
              "Explore the rich history and culture of Europe with this exciting package. Visit iconic landmarks, savor local cuisine, and immerse yourself in different cultures.",
            price: "$2,500",
            duration: "10 Days / 9 Nights",
            image: "https://muralsyourway.vtexassets.com/arquivos/ids/236663/Tropical-Paradise-At-Maldives-With-Palms-And-Blue-Sky-Wallpaper-Mural.jpg?v=638291857096370000", // Add the image path
          },
      ]
    },
    {
      title: "International",
      packages: [
        {
          title: "Safari Expedition",
          description:
            "Experience the thrill of African wildlife on a guided safari expedition. Stay in luxury lodges and witness the beauty of nature up close.",
          price: "$3,000",
          duration: "8 Days / 7 Nights",
          image: "https://muralsyourway.vtexassets.com/arquivos/ids/236663/Tropical-Paradise-At-Maldives-With-Palms-And-Blue-Sky-Wallpaper-Mural.jpg?v=638291857096370000", // Add the image path
        },
        
        {
            title: "Safari Expedition",
            description:
              "Experience the thrill of African wildlife on a guided safari expedition. Stay in luxury lodges and witness the beauty of nature up close.",
            price: "$3,000",
            duration: "8 Days / 7 Nights",
            image: "https://muralsyourway.vtexassets.com/arquivos/ids/236663/Tropical-Paradise-At-Maldives-With-Palms-And-Blue-Sky-Wallpaper-Mural.jpg?v=638291857096370000", // Add the image path
          },

          {
            title: "Safari Expedition",
            description:
              "Experience the thrill of African wildlife on a guided safari expedition. Stay in luxury lodges and witness the beauty of nature up close.",
            price: "$3,000",
            duration: "8 Days / 7 Nights",
            image: "https://muralsyourway.vtexassets.com/arquivos/ids/236663/Tropical-Paradise-At-Maldives-With-Palms-And-Blue-Sky-Wallpaper-Mural.jpg?v=638291857096370000", // Add the image path
          },

          {
            title: "Safari Expedition",
            description:
              "Experience the thrill of African wildlife on a guided safari expedition. Stay in luxury lodges and witness the beauty of nature up close.",
            price: "$3,000",
            duration: "8 Days / 7 Nights",
            image: "https://muralsyourway.vtexassets.com/arquivos/ids/236663/Tropical-Paradise-At-Maldives-With-Palms-And-Blue-Sky-Wallpaper-Mural.jpg?v=638291857096370000", // Add the image path
          },

          {
            title: "Safari Expedition",
            description:
              "Experience the thrill of African wildlife on a guided safari expedition. Stay in luxury lodges and witness the beauty of nature up close.",
            price: "$3,000",
            duration: "8 Days / 7 Nights",
            image: "https://muralsyourway.vtexassets.com/arquivos/ids/236663/Tropical-Paradise-At-Maldives-With-Palms-And-Blue-Sky-Wallpaper-Mural.jpg?v=638291857096370000", // Add the image path
          },

          {
            title: "Safari Expedition",
            description:
              "Experience the thrill of African wildlife on a guided safari expedition. Stay in luxury lodges and witness the beauty of nature up close.",
            price: "$3,000",
            duration: "8 Days / 7 Nights",
            image: "https://muralsyourway.vtexassets.com/arquivos/ids/236663/Tropical-Paradise-At-Maldives-With-Palms-And-Blue-Sky-Wallpaper-Mural.jpg?v=638291857096370000", // Add the image path
          },
      ]
    }
  ];

  return (
    <><a style={{textDecoration:"none"}} href='#pakage' target='_blank'>
      <BannerComponent
        backgroundImage={PackagesBanner}
        title="Our Travel Packages"
        subtitle="Find the perfect adventure for you"
        button="Select pakage"
      /></a>
      <div id='pakage' className="packages-content">
        {packageSections.map((section, index) => (
          <div key={index} className="package-section">
            <h2>{section.title}</h2>
            <div className="packages-list">
              {section.packages.map((pkg, pkgIndex) => (
                <div key={pkgIndex} className="package-item">
                  <img src={pkg.image} alt={pkg.title} className="package-image" />
                  <h3>{pkg.title}</h3>
                  <p>{pkg.description}</p>
                  <p><strong>Price:</strong> {pkg.price}</p>
                  <p><strong>Duration:</strong> {pkg.duration}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PackagesPage;
