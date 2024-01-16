
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick'; // Import Slider from react-slick

import 'slick-carousel/slick/slick.css'; // Import slick carousel styles
import 'slick-carousel/slick/slick-theme.css'; // Import slick carousel theme styles

import styles from '../styles';
import { exploreWorlds } from '../constants';
import { staggerContainer } from '../utils/motion';
import { ExploreCard, TitleText, TypingText } from '../components';

const Explore = () => {
  const [active, setActive] = useState('world-1');
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Set your desired breakpoint
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Slick settings for the slider
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="Urok | Wygoda | Dbałość o szczegóły" textStyles="text-center text-black-50"/>
        <TitleText
          title={<>Pokój 
          Sielski</>}
          textStyles="text-center z-30 text-black"
        />
      </motion.div>

      {/* Slider Section */}
      <div className="my-slider mt-[50px]">
        <Slider {...sliderSettings}>
          {[1, 2, 4, 6, 8, 10, 13, 16, 17, 18].map((apartmentNum) => (
            <div key={`pokojl-${apartmentNum}`}>
              <div
                style={{
                  position: 'relative',
                  borderRadius: '24px',
                  overflow: 'hidden',
                }}
                onMouseEnter={(e) => {
                  if (!isSmallScreen) {
                    e.currentTarget.querySelector('.overlay').style.opacity = 0.6;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSmallScreen) {
                    e.currentTarget.querySelector('.overlay').style.opacity = 0;
                  }
                }}
              >
                <img
                  src={`pokojl${apartmentNum}.jpg`}
                  alt={`Slider Image ${apartmentNum}`}
                  style={{ borderRadius: '24px' }}
                />
                <div
                  className="overlay"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                  }}
                >
                  <p style={{ color: 'white', textAlign: 'center', fontSize: '20px', padding: '30px', }}>
                  Pokój Sielski to urokliwy pokój dwuosobowy z balkonem na zachód, idealny dla sielskiego wypoczynku. Posiada 2 pojedyncze łóżka z możliwością połączenia, dzieli łazienkę z prysznicem z drugim pokojem. Wyposażony w podstawowe elementy jak czajnik, kubki, kieliszki, talerzyki i sztućce. Oferujemy łóżeczko turystyczne dla niemowląt za dodatkową opłatą, wliczając pościel i ręczniki. Dodatkowo, każdy Gość otrzymuje od Gospodarzy mały upominek po przyjeździe.
                  </p>
                </div>
                <div
                  style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '20px',
                    color: 'white',
                    fontSize: '20px',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    padding: '5px 10px',
                    borderRadius: '8px',
                  }}
                >
                  Pokój
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="text-center mt-4">
        <button
            style={{
              position: 'relative',
              borderRadius: '24px',
              backgroundColor: 'black',
              color: 'white',
              fontWeight: 'bold',
              padding: '10px 40px 10px 20px',
              border: 'none',
              fontSize: '20px',
              cursor: 'pointer',
              transition: 'background-color 0.3s, color 0.3s, padding-right 0.3s',
              overflow: 'hidden',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'white';
              e.target.style.color = 'black';
              e.target.style.paddingRight = '50px'; // Increase right padding to move the arrow to the right
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'black';
              e.target.style.color = 'white';
              e.target.style.paddingRight = '40px'; // Revert right padding on mouse leave
            }}
          >
            <span style={{ position: 'absolute', right: '20px', transition: 'right 0.3s' }}>&rarr;</span>
            Rezerwuj
          </button>
      </div>
        {isSmallScreen && (
        <div className="text-under-slider mt-[50px]">
          <p className="text-center">
          Pokój Sielski to urokliwy pokój dwuosobowy z balkonem na zachód, idealny dla sielskiego wypoczynku. Posiada 2 pojedyncze łóżka z możliwością połączenia, dzieli łazienkę z prysznicem z drugim pokojem. Wyposażony w podstawowe elementy jak czajnik, kubki, kieliszki, talerzyki i sztućce. Oferujemy łóżeczko turystyczne dla niemowląt za dodatkową opłatą, wliczając pościel i ręczniki. Dodatkowo, każdy Gość otrzymuje od Gospodarzy mały upominek po przyjeździe.
          </p>
        </div>
      )}
      </div>
    </section>
  );
};
export default Explore;