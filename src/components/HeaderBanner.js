import React, { useState, useEffect } from 'react';
import '../assets/Styles/HeaderBanner.css';
import largeImage from '../assets/Images/HeaderBanner.png';
import smallImage from '../assets/Images/360x640.png';

function HeaderBanner({alertVisible}) {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const orderButtonClicked = () => {
    alert("It's under construction!");
  };

  return (
    <div className={`header-banner-container ${!alertVisible ? 'na-alert' : ''}`}>
      <div className="image-container">
        <img
          src={isLargeScreen ? largeImage : smallImage}
          alt="Header Banner"
          loading="lazy"
        />
      </div>
      <div className="text-content">
        <h1 className="banner-heading">PURE COW AND BUFFALO MILK!</h1>
        <h2 className="banner-subheading">Delivered Straight to Your Doorstep!</h2>
        <h3 className="banner-tagline">Taste the difference</h3>
        <button onClick={orderButtonClicked} className="order-button">
          Order Now
        </button>
      </div>
    </div>
  );
}

export default HeaderBanner;
