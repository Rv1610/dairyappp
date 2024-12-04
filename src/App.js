// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import AlertMessage from './components/AlertMessage';
// import Header from './components/Header';
// import HeaderBanner from './components/HeaderBanner';
// import Product from './components/Product';
// import Delivery from './components/Delivery';
// import ContactUs from './components/ContactUs';
// import Order from './components/Order';
// import AlertModal from './components/AlertModal';

// function App() {

//   const [isModalVisible, setIsModalVisible] = useState(true); // Replace isAlertVisible with isModalVisible

//   const closeModal = () => {
//     console.log('Closing Modal'); // Debugging message
//     setIsModalVisible(false);
//   };

//   return (
//     <Router>
//       {/* Pass the visibility state to the Header */}
//       {/* {isAlertVisible && <AlertMessage onClose={closeAlert} />} */}
//       {isModalVisible && <AlertModal onClose={closeModal} />}
//       <Header />
//       <Routes>
//         <Route path="/" element={<HeaderBanner />} />
//         <Route path="/products" element={<Product  />} />
//         <Route path="/delivery" element={<Delivery  />} />
//         <Route path="/contactus" element={<ContactUs  />} />
//         <Route path="/order" element={<Order  />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeaderBanner from './components/HeaderBanner';
import Product from './components/Product';
import Delivery from './components/Delivery';
import ContactUs from './components/ContactUs';
import Order from './components/Order';
import AlertModal from './components/AlertModal';

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    // Show modal after 5 seconds
    const timer = setTimeout(() => {
      setIsModalVisible(true);
    }, 3000);
    return () => clearTimeout(timer); // Clear timeout if component unmounts
  }, []);

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <Router>
      {isModalVisible && <AlertModal onClose={closeModal} />}
      <Header isModalVisible={isModalVisible} />
      <Routes>
        <Route path="/" element={<HeaderBanner />} />
        <Route path="/products" element={<Product />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </Router>
  );
}

export default App;
