import React from 'react'

function AlertModal() {
  return (
    <div className="alert-message">
      <div className="alert-message-container">
<h5 className='h55'>🌟 Exclusive Offer! New Customers Enjoy FREE Home Delivery for an Entire Month! 🚚✨</h5>
<p className="ppp">We’re thrilled to announce FREE home delivery for customers within a 2km radius of our dairy!🚚</p>
<p className="areas">Vasant Kunj C8, Vasant Kunj C9, Vasant Kunj D7, Vasant Kunj D6, Mahipal Pur, Rangpuri, E1, E2</p>
      <p className='pp'>Order now and experience the purest milk delivered right to your doorstep! 🏠🥛"</p>
      </div>
      <button className="close-button" onClick={onClose}>
        ✖
      </button>
    </div>
  )
}

export default AlertModal
