// import React, {useState} from 'react';
// import { Link } from 'react-router-dom';
// import '../assets/Styles/Header.css';
// import dairyLogo from '../assets/Images/DairyLogo-Photoroom.png';
// function Header({ isModalVisible }) {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };



//   return (
//     <nav>
//       <div className= "navbar-container">
//         <div className="logo">
//           <img src={dairyLogo} alt="logo" />
//         </div>
//         <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/products">Product</Link>
//           </li>
//           <li>
//             <Link to="/delivery">Delivery Services</Link>
//           </li>
//           <li>
//             <Link to="/contactus">Contact Us</Link>
//           </li>
//           <button className="orderButton">
//             <Link to="/order">Order Now</Link>
//           </button>
//         </ul>
//         <button
//           className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`}
//           onClick={toggleMenu}
//         >
//           <div className="bar"></div>
//           <div className="bar"></div>
//           <div className="bar"></div>
//         </button>
//       </div>
//     </nav>
//   );
// }

// export default Header;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/Styles/Header.css';
import dairyLogo from '../assets/Images/DairyLogo-Photoroom.png';

function Header({ isModalVisible }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    if (!isModalVisible) {
      setIsMenuOpen(!isMenuOpen);
    }
  };

  return (
    <nav>
      <div className="navbar-container">
        <div className="logo">
          <img src={dairyLogo} alt="logo" />
        </div>
        {/* Disable links when modal is active */}
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''} ${isModalVisible ? 'disabled' : ''}`}>
          <li>
            <Link to="/" className={isModalVisible ? 'disabled-link' : ''}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className={isModalVisible ? 'disabled-link' : ''}>
              Product
            </Link>
          </li>
          <li>
            <Link to="/delivery" className={isModalVisible ? 'disabled-link' : ''}>
              Delivery Services
            </Link>
          </li>
          <li>
            <Link to="/contactus" className={isModalVisible ? 'disabled-link' : ''}>
              Contact Us
            </Link>
          </li>
          <button className={`orderButton ${isModalVisible ? 'disabled-link' : ''}`}>
            <Link to="/order" className={isModalVisible ? 'disabled-link' : ''}>
              Order Now
            </Link>
          </button>
        </ul>
        {/* Disable menu toggle when modal is active */}
        <button
          className={`hamburger-menu ${isMenuOpen ? 'open' : ''} ${isModalVisible ? 'disabled-link' : ''}`}
          onClick={toggleMenu}
          disabled={isModalVisible}
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
