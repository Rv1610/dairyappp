// import React from 'react'
// import '../assets/Styles/AlertModal.css';

// function AlertModal({onClose}) {
//   return (
//     <div className="alert-modal">
//         <div className="alert-modal-background">
//       <div className="alert-modal-container">
// <h1 className='exclusiveOffer'>🌟 Exclusive Offer! 🌟</h1>
// <h2 className="modal-h2">✨ New Customers Enjoy FREE Home Delivery for<br></br> an Entire Month within a 2km radius of our dairy! 🚚✨</h2>
// <h2 className="modal-areas">Specially for these specific areas given below!</h2>
// <h4 className="modal-h4">Vasant Kunj C8, Vasant Kunj C9, Vasant Kunj D7,<br></br> Vasant Kunj D6, Mahipal Pur, Rangpuri, E1, E2</h4>
//       <h3 className='modal-h3'>Order now and experience the purest milk<br></br> delivered right to your doorstep! 🏠🥛"</h3>
//       </div>
//       <button className="close-modal-button" onClick={onClose}>
//         close
//       </button>
//       </div>
//     </div>
//   )
// }

// export default AlertModal



// import React, { useState } from 'react';
// import '../assets/Styles/AlertModal.css';

// function AlertModal({ onClose }) {
//   const [isClosing, setIsClosing] = useState(false);

//   const handleClose = () => {
//     setIsClosing(true);
//     setTimeout(() => {
//       onClose(); // Close modal after animation
//     }, 3000); // Match fade-out animation duration
//   };

//   return (
//     <div className={`alert-modal ${isClosing ? 'closing' : ''}`}>
//       <div className="alert-modal-background">
//         <div className="alert-modal-container">
//           <h1 className="exclusiveOffer">🌟 Exclusive Offer! 🌟</h1>
//           <h2 className="modal-h2">
//             ✨ New Customers Enjoy FREE Home Delivery for
//             <br /> an Entire Month within a 2km radius of our dairy! 🚚✨
//           </h2>
//           <h2 className="modal-areas">Specially for these specific areas:</h2>
//           <h4 className="modal-h4">
//             Vasant Kunj C8, Vasant Kunj C9, Vasant Kunj D7,
//             <br />
//             Vasant Kunj D6, Mahipal Pur, Rangpuri, E1, E2
//           </h4>
//           <h3 className="modal-h3">
//             Order now and experience the purest milk
//             <br /> delivered right to your doorstep! 🏠🥛
//           </h3>
//         </div>
//         <button className="close-modal-button" onClick={handleClose}>
//           Close
//         </button>
//       </div>
//     </div>
//   );
// }

// export default AlertModal;



import React, { useState, useEffect } from 'react';
import '../assets/Styles/AlertModal.css';

function AlertModal({ onClose }) {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true); // Trigger closing animation
    setTimeout(() => {
      onClose(); // Close the modal after the animation duration
    }, 300); // Match animation duration in CSS
  };

  return (
    <div className={`alert-modal-overlay ${isClosing ? 'closing' : ''}`}>
      <div className={`alert-modal ${isClosing ? 'closing' : 'opening'}`}>
        <div className="alert-modal-background">
          <div className="alert-modal-container">
            <h1 className="exclusiveOffer">🌟 Exclusive Offer! 🌟</h1>
            <h2 className="modal-h2">
              ✨ New Customers Enjoy FREE Home Delivery for
              <br /> an Entire Month within a 2km radius of our dairy! 🚚✨
            </h2>
            <h2 className="modal-areas">Specially for these specific areas:</h2>
            <h4 className="modal-h4">
              Vasant Kunj C8, Vasant Kunj C9, Vasant Kunj D7,
              <br />
              Vasant Kunj D6, Mahipal Pur, Rangpuri, E1, E2
            </h4>
            <h3 className="modal-h3">
              Order now and experience the purest milk
              <br /> delivered right to your doorstep! 🏠🥛
            </h3>
          </div>
          <button className="close-modal-button" onClick={handleClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default AlertModal;
