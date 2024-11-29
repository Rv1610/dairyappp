import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AlertMessage from './components/AlertMessage';
import Header from './components/Header';
import HeaderBanner from './components/HeaderBanner';
import Product from './components/Product';
import Delivery from './components/Delivery';
import ContactUs from './components/ContactUs';
import Order from './components/Order';

function App() {
  const [isAlertVisible, setIsAlertVisible] = useState(true);

  const closeAlert = () => {
    console.log('Closing Alert'); // Debugging message
    setIsAlertVisible(false);
  };

  return (
    <Router>
      {/* Pass the visibility state to the Header */}
      {isAlertVisible && <AlertMessage onClose={closeAlert} />}
      <Header alertVisible={isAlertVisible} />
      <Routes>
        <Route path="/" element={<HeaderBanner alertVisible={isAlertVisible}/>} />
        <Route path="/products" element={<Product alertVisible={isAlertVisible} />} />
        <Route path="/delivery" element={<Delivery alertVisible={isAlertVisible} />} />
        <Route path="/contactus" element={<ContactUs alertVisible={isAlertVisible} />} />
        <Route path="/order" element={<Order alertVisible={isAlertVisible} />} />
      </Routes>
    </Router>
  );
}

export default App;
