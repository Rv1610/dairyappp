import React, { useState, useEffect } from 'react';
import '../assets/Styles/HeaderBanner.css';
import largeImage from '../assets/Images/HeaderBanner.png';
import smallImage from '../assets/Images/360x640.png';

function HeaderBanner({alertVisible}) {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const orderButtonClicked = () => {
    alert("It's under construction!");
  };

  return (
    <>
    <div className="header-banner-container">
      <div className="image-container">
        <img
          src={isLargeScreen ? largeImage : smallImage}
          alt="Header Banner"
          loading="lazy"
        />
      </div>
      <div className="text-content">
        <h1 className="banner-heading">PURE COW AND BUFFALO MILK!</h1>
        <h2 className="banner-subheading">Delivered Straight to Your Doorstep!</h2>
        <h3 className="banner-tagline">Taste the difference</h3>
        <button onClick={orderButtonClicked} className="order-button">
          Order Now
        </button>
      </div>
    </div>
    <div className="testing-container">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptatem repellat hic asperiores nulla accusantium, quas vitae quae quam, veritatis ipsa alias sapiente dolorem eligendi, architecto enim. Vero eius facere minus. Accusantium vero dolorum, iste nobis nesciunt repellat, ipsum assumenda sint perferendis sunt ex in architecto modi aspernatur porro voluptas consequuntur a tempora, aut autem numquam quas! Eius voluptatem at fugiat dicta suscipit modi qui placeat mollitia quod porro velit est voluptate eum officia, id officiis fuga labore eligendi asperiores natus. Placeat veniam consectetur, sit reiciendis cupiditate fugit laborum laudantium dolorum minima, eligendi ipsa voluptate vel! Placeat fugit eum adipisci perspiciatis consectetur voluptate id, expedita a, qui quam, reiciendis voluptates dicta? Debitis perspiciatis accusamus nihil animi cupiditate? Molestiae doloremque aliquid quasi laborum, laudantium minus quis reiciendis omnis ullam repudiandae, et corporis, fugiat cupiditate accusantium veniam animi? Aspernatur, porro mollitia! Possimus quam pariatur aliquam distinctio? Adipisci ratione eius minima quis! Sit unde ipsum dicta placeat in omnis at animi cum cumque ad, quas error modi, voluptatem reprehenderit eum quidem provident aut accusantium delectus. Repellendus, quisquam animi minus neque culpa suscipit sapiente voluptates eveniet recusandae eum veniam dolorum sit minima hic libero iure explicabo delectus temporibus beatae blanditiis dicta quas! Maiores voluptate non possimus asperiores, eum sed quos quae. Vero delectus distinctio doloribus nostrum nisi vel, officiis repellendus neque, fugiat molestias aliquam dolores velit illo animi minus voluptas quas repellat pariatur quis aspernatur obcaecati error autem recusandae! Officiis, reiciendis. Iusto neque dignissimos explicabo autem mollitia sed rem saepe esse voluptatem, veniam corporis itaque officiis consequuntur rerum. Quasi laudantium doloribus possimus quibusdam facere accusantium fugiat assumenda neque maiores, ipsam adipisci dolor ea officiis excepturi, repudiandae rem tenetur necessitatibus sit laboriosam architecto! A, laudantium perferendis dolorem facere eveniet dolores dignissimos cum tempore similique, laboriosam officia ducimus optio. Consectetur harum architecto asperiores similique quod! Iste nisi neque ipsum pariatur quo quod tenetur modi tempore doloribus repellat eaque dolore mollitia voluptate deserunt, perspiciatis, ex voluptatibus similique repellendus tempora, adipisci minima rerum libero eius. Omnis qui impedit eaque deserunt. Voluptatem aliquam praesentium temporibus quas perspiciatis quae, eveniet officiis ut ullam ipsa autem pariatur rem facilis dolorum numquam nemo corrupti voluptate, corporis aliquid veniam aut exercitationem consectetur! Beatae deserunt vero, tempora earum voluptate quod harum assumenda expedita ut non aperiam, natus quae corrupti, ipsa odio aliquid deleniti omnis consequatur ratione magnam quam qui at eos. Vel quaerat, laborum iusto quo sed perferendis nesciunt. Maiores optio, dolor aut veritatis voluptate earum impedit eveniet nihil placeat temporibus excepturi itaque praesentium, ipsa soluta at vero ullam alias laborum rerum mollitia, qui ex eius vitae. Commodi nulla nemo quas illo totam, accusamus perferendis rem accusantium omnis nam eveniet eaque velit molestias exercitationem quisquam animi porro unde blanditiis voluptatem! Quam fugiat nulla similique amet itaque. Vitae magnam cum eius distinctio? Blanditiis fugit ipsum accusantium et quaerat in dolorem nemo? Maiores odit obcaecati dolorum architecto, porro, doloribus nam quod, tempore at harum blanditiis! Nemo voluptas quidem earum facere architecto porro. Consectetur aspernatur eius laudantium? A, dignissimos! Exercitationem voluptatibus amet sapiente qui omnis asperiores dignissimos.</div>
    </>
  );
}

export default HeaderBanner;
