import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../assets/Styles/Header.css';
import dairyLogo from '../assets/Images/DairyLogo-Photoroom.png';
function Header({ alertVisible }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  console.log(alertVisible); // Add this in Header.js to verify


  return (
    <nav>
      {/* Dynamically add 'no-alert' class */}
      <div className={`navbar-container ${!alertVisible ? 'no-alert' : ''}`}>
        <div className="logo">
          <img src={dairyLogo} alt="logo" />
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Product</Link>
          </li>
          <li>
            <Link to="/delivery">Delivery Services</Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
          <button className="orderButton">
            <Link to="/order">Order Now</Link>
          </button>
        </ul>
        <button
          className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
      </div>
    </nav>
  );
}

export default Header;
