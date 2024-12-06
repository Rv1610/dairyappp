// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import '../assets/Styles/Header.css';
// import dairyLogo from '../assets/Images/DairyLogo-Photoroom.png';

// function Header({ isModalVisible }) {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     if (!isModalVisible) {
//       setIsMenuOpen(!isMenuOpen);
//     }
//   };

//   return (
//     <nav>
//       <div className="navbar-container">
//         <div className="logo">
//           <img src={dairyLogo} alt="logo" />
//         </div>
//         {/* Disable links when modal is active */}
//         <ul className={`nav-links ${isMenuOpen ? 'open' : ''} ${isModalVisible ? 'disabled' : ''}`}>
//           <li>
//             <Link to="/" className={isModalVisible ? 'disabled-link' : ''}>
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/products" className={isModalVisible ? 'disabled-link' : ''}>
//               Product
//             </Link>
//           </li>
//           <li>
//             <Link to="/delivery" className={isModalVisible ? 'disabled-link' : ''}>
//               Delivery Services
//             </Link>
//           </li>
//           <li>
//             <Link to="/contactus" className={isModalVisible ? 'disabled-link' : ''}>
//               Contact Us
//             </Link>
//           </li>
//           <button className={`orderButton ${isModalVisible ? 'disabled-link' : ''}`}>
//             <Link to="/order" className={isModalVisible ? 'disabled-link' : ''}>
//               Order Now
//             </Link>
//           </button>
//         </ul>
//         {/* Disable menu toggle when modal is active */}
//         <button
//           className={`hamburger-menu ${isMenuOpen ? 'open' : ''} ${isModalVisible ? 'disabled-link' : ''}`}
//           onClick={toggleMenu}
//           disabled={isModalVisible}
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









// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHome, faBoxOpen, faTruck, faPhone, faCartShopping } from "@fortawesome/free-solid-svg-icons";
// import "../assets/Styles/Header.css";
// import dairyLogo from "../assets/Images/DairyLogo-Photoroom.png";

// function Header({ isModalVisible }) {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     if (!isModalVisible) {
//       setIsMenuOpen(!isMenuOpen);
//     }
//   };

//   return (
//     <nav>
//       <div className="navbar-container">
//         <div className="logo">
//           <img src={dairyLogo} alt="logo" />
//         </div>
        
//         {/* Large Screen Navigation */}
//         <ul
//           className={`nav-links ${
//             isMenuOpen ? "open" : ""
//           } ${isModalVisible ? "disabled" : ""}`}
//         >
//           <li>
//             <Link to="/" className={isModalVisible ? "disabled-link" : ""}>
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/products" className={isModalVisible ? "disabled-link" : ""}>
//               Products
//             </Link>
//           </li>
//           <li>
//             <Link to="/delivery" className={isModalVisible ? "disabled-link" : ""}>
//               Delivery Services
//             </Link>
//           </li>
//           <li>
//             <Link to="/contactus" className={isModalVisible ? "disabled-link" : ""}>
//               Contact Us
//             </Link>
//           </li>
//           <button className={`orderButton ${isModalVisible ? "disabled-link" : ""}`}>
//             <Link to="/order" className={isModalVisible ? "disabled-link" : ""}>
//               Order Now
//             </Link>
//           </button>
//         </ul>

//         {/* Hamburger Menu for Large Screens */}
//         <button
//           className={`hamburger-menu ${
//             isMenuOpen ? "open" : ""
//           } ${isModalVisible ? "disabled-link" : ""}`}
//           onClick={toggleMenu}
//           disabled={isModalVisible}
//         >
//           <div className="bar"></div>
//           <div className="bar"></div>
//           <div className="bar"></div>
//         </button>
//       </div>

//       {/* Bottom Navigation for Small Screens */}
//       <div className={`bottom-nav ${isModalVisible ? "disabled" : ""}`}>
//         <Link to="/" className={isModalVisible ? "disabled-link" : ""}>
//           <FontAwesomeIcon icon={faHome} />
//           <span>Home</span>
//         </Link>
//         <Link to="/products" className={isModalVisible ? "disabled-link" : ""}>
//           <FontAwesomeIcon icon={faBoxOpen} />
//           <span>Products</span>
//         </Link>
//         <Link to="/delivery" className={isModalVisible ? "disabled-link" : ""}>
//           <FontAwesomeIcon icon={faTruck} />
//           <span>Delivery</span>
//         </Link>
//         <Link to="/contactus" className={isModalVisible ? "disabled-link" : ""}>
//           <FontAwesomeIcon icon={faPhone} />
//           <span>Contact</span>
//         </Link>
//         <Link to="/order" className={isModalVisible ? "disabled-link" : ""}>
//           <FontAwesomeIcon icon={faCartShopping} />
//           <span>Order</span>
//         </Link>
//       </div>
//     </nav>
//   );
// }

// export default Header;





import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBoxOpen, faTruck, faPhone, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "../assets/Styles/Header.css";
import dairyLogo from "../assets/Images/DairyLogo-Photoroom.png";

function Header({ isModalVisible }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollPos, setLastScrollPos] = useState(0);

  const toggleMenu = () => {
    if (!isModalVisible) {
      setIsMenuOpen(!isMenuOpen);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > lastScrollPos) {
        // Scrolling downward
        setIsScrollingUp(false);
      } else {
        // Scrolling upward
        setIsScrollingUp(true);
      }

      setLastScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollPos]);

  return (
    <nav className={`header ${isScrollingUp ? "visible" : "hidden"}`}>
      {/* Top Navigation */}
      <div className="navbar-container">
        <div className="logo">
          <img src={dairyLogo} alt="logo" />
        </div>
        <ul
          className={`nav-links ${
            isMenuOpen ? "open" : ""
          } ${isModalVisible ? "disabled" : ""}`}
        >
          <li>
            <Link to="/" className={isModalVisible ? "disabled-link" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className={isModalVisible ? "disabled-link" : ""}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/delivery" className={isModalVisible ? "disabled-link" : ""}>
              Delivery Services
            </Link>
          </li>
          <li>
            <Link to="/contactus" className={isModalVisible ? "disabled-link" : ""}>
              Contact Us
            </Link>
          </li>
          <button className={`orderButton ${isModalVisible ? "disabled-link" : ""}`}>
            <Link to="/order" className={isModalVisible ? "disabled-link" : ""}>
              Order Now
            </Link>
          </button>
        </ul>
        <button
          className={`hamburger-menu ${
            isMenuOpen ? "open" : ""
          } ${isModalVisible ? "disabled-link" : ""}`}
          onClick={toggleMenu}
          disabled={isModalVisible}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
      </div>

      {/* Bottom Navigation for Small Screens */}
      <div
        className={`bottom-nav ${
          isModalVisible ? "disabled" : ""
        } ${isScrollingUp ? "visible" : "hidden"}`}
      >
        <Link to="/" className={isModalVisible ? "disabled-link" : ""}>
          <FontAwesomeIcon icon={faHome} />
          <span>Home</span>
        </Link>
        <Link to="/products" className={isModalVisible ? "disabled-link" : ""}>
          <FontAwesomeIcon icon={faBoxOpen} />
          <span>Products</span>
        </Link>
        <Link to="/delivery" className={isModalVisible ? "disabled-link" : ""}>
          <FontAwesomeIcon icon={faTruck} />
          <span>Delivery</span>
        </Link>
        <Link to="/contactus" className={isModalVisible ? "disabled-link" : ""}>
          <FontAwesomeIcon icon={faPhone} />
          <span>Contact</span>
        </Link>
        <Link to="/order" className={isModalVisible ? "disabled-link" : ""}>
          <FontAwesomeIcon icon={faCartShopping} />
          <span>Order</span>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
