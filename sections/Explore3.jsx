
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
        <TypingText title="Komfort | Luksus | Natura" textStyles="text-center text-black-50"/>
        <TitleText
          title={<>Apartament <br className="md:block hidden" />
          w Stronę Słońca</>}
          textStyles="text-center z-30 text-black"
        />
      </motion.div>

      {/* Slider Section */}
      <div className="my-slider mt-[50px]">
        <Slider {...sliderSettings}>
          {[1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 
          12, 13, 14, 15, 16, 17, 18, 19, 
        20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 
      30, 31, 32, 33, 34, 35, 36, 37, 38, 
    39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 
  49, 50, 51, 52, 53, 54].map((apartmentNum) => (
            <div key={`pokojs-${apartmentNum}`}>
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
                  src={`pokojs${apartmentNum}.jpg`}
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
                  Ten przestronny apartament może pomieścić 9 osób (7+2) na 62,3 metra kwadratowego. Znajdziesz tam kompletnie wyposażony aneks kuchenny oraz wygodną przestrzeń jadalną i wypoczynkową z sofą, kominkiem i telewizorem. Na piętrze są dwie sypialnie, jedna z 2 łączonymi łóżkami hotelowymi, druga z łóżkiem małżeńskim i balkonem, a na poddaszu dodatkowe 2 łóżka. Apartament ma dwie łazienki z prysznicami, taras z widokiem na las i rzekę oraz gospodarze obdarowują każdego gościa małym upominkiem. Ręczniki są wliczone w cenę.
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
                  Apartament 
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
          Ten przestronny apartament może pomieścić 9 osób (7+2) na 62,3 metra kwadratowego. Znajdziesz tam kompletnie wyposażony aneks kuchenny oraz wygodną przestrzeń jadalną i wypoczynkową z sofą, kominkiem i telewizorem. Na piętrze są dwie sypialnie, jedna z 2 łączonymi łóżkami hotelowymi, druga z łóżkiem małżeńskim i balkonem, a na poddaszu dodatkowe 2 łóżka. Apartament ma dwie łazienki z prysznicami, taras z widokiem na las i rzekę oraz gospodarze obdarowują każdego gościa małym upominkiem. Ręczniki są wliczone w cenę.
          </p>
        </div>
      )}
      </div>
    </section>
  );
};
export default Explore;