import React, {useState, useEffect} from 'react';
import '../assets/Styles/HeaderBanner.css';
// import image from '../assets/Images/HeaderBanner.png';
import largeImage from '../assets/Images/HeaderBanner.png';
import smallImage from '../assets/Images/360x640.png';

function HeaderBanner() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerHeight>720);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerHeight>720);



  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 720);
    };
    
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const orderButtonClicked = ()=>{
    alert("It's under construction!")
  }


  return (
    <>
        <div className="anotherContainer">
          <div className="imageOuterContainer">
            {/* <img src={image} alt="banner" loading='lazy' /> */}
            <img 
            src={isLargeScreen ? largeImage : smallImage} 
            alt="banner" 
            loading="lazy" 
          />
          </div>
          <div className="allH1AndElements">
            <h2 className='bannerH1'>PURE COW AND BUFFALO MILK!</h2>
            <h3 className='bannerH2'>Delivered Straight to Your Doorstep!</h3>
            <h3 className='bannerH3'>Taste the difference</h3>
            <button onClick={orderButtonClicked} className="bannerButton">Order Now</button>
            </div>
            </div>
    </>
  );
}

export default HeaderBanner;
