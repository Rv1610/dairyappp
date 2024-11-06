import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeaderBanner from './components/HeaderBanner';
import Product from './components/Product';
import Delivery from './components/Delivery';
import './App.css';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HeaderBanner />} />
        <Route path="/products" element={<Product />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
