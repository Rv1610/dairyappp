import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../assets/Styles/Header.css';
function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };



  return (
    <>
    <nav>
      <div className="navbar-container">
        <div className="logo">Ravi
        </div>
        
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li>
            <Link to="/"> 
              Home
            </Link>
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
    </>
  );
}

export default Header;
