import React, { useState, useEffect } from 'react';
import '../assets/Styles/ContactUs.css';
import underConstructionLarge from '../assets/Images/underconstructionLarge1.png';
import underConstructionSmall from '../assets/Images/underconstructionSmall.png';

function ContactUs({alertVisible}) {

  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <div className={`contactUsDiv ${!alertVisible ? 'ne-alert' : ''}`}>
      {/* <h1>Contact Us</h1>
      <p>Feel free to reach out for any queries or feedback!</p> */}
      <img
          src={isLargeScreen ? underConstructionLarge : underConstructionSmall}
          alt="UNDERCONSTRUCTION Banner"
          loading="lazy"
        />
    </div>
  );
}

export default ContactUs;
