import React from 'react';

const PackageCard = ({ title, description, imageUrl }) => {
  return (
    <div className="package-card">
      <img src={imageUrl} alt={title} className="package-image" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default PackageCard;
