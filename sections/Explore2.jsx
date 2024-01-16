
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
        <TypingText title="Komfort | Urok | Natura" textStyles="text-center text-black-50"/>
        <TitleText
          title={<>Apartament <br className="md:block hidden" />
          w Stronę Lasu</>}
          textStyles="text-center z-30 text-black"
        />
      </motion.div>

      {/* Slider Section */}
      <div className="my-slider mt-[50px]">
        <Slider {...sliderSettings}>
          {[27, 5, 13, 16, 18, 21, 1, 30, 2, 29].map((apartmentNum) => (
            <div key={`pokoj-${apartmentNum}`}>
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
                  src={`pokoj${apartmentNum}.jpg`}
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
                  Ten 54-metrowy apartament pomieści maksymalnie 7 osób (5+2) i oferuje w pełni wyposażony aneks kuchenny oraz wygodną przestrzeń dzienną z kominkiem i telewizorem. Na piętrze znajdują się dwie sypialnie: jedna z 3 pojedynczymi łóżkami, druga z 2 pojedynczymi łóżkami i balkonem, a dodatkowe miejsca do spania są w salonie na narożniku. Klimatyczna łazienka posiada wannę z prysznicem i suszarkę do włosów, a z salonu można wyjść na taras z widokiem na las. Dodatkowo, każdy Gość otrzymuje mały upominek od Gospodarzy.
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
          Ten 54-metrowy apartament pomieści maksymalnie 7 osób (5+2) i oferuje w pełni wyposażony aneks kuchenny oraz wygodną przestrzeń dzienną z kominkiem i telewizorem. Na piętrze znajdują się dwie sypialnie: jedna z 3 pojedynczymi łóżkami, druga z 2 pojedynczymi łóżkami i balkonem, a dodatkowe miejsca do spania są w salonie na narożniku. Klimatyczna łazienka posiada wannę z prysznicem i suszarkę do włosów, a z salonu można wyjść na taras z widokiem na las. Dodatkowo, każdy Gość otrzymuje mały upominek od Gospodarzy.
          </p>
        </div>
      )}
      </div>
    </section>
  );
};
export default Explore;