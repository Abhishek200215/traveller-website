// BannerComponent.jsx
import React from 'react';

const BannerComponent = ({ backgroundImage, title, subtitle,button }) => {
  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="banner-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <button
          style={{
            padding: '12px 30px',
            fontSize: '18px',
            backgroundColor: '#ff6b6b',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#ff4c4c')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#ff6b6b')}
        >
          {button}
        </button>
      </div>
    </div>
  );
};

export default BannerComponent;
