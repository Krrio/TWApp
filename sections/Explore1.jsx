'use client';

import { useState } from 'react';
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

  // Define an array of text corresponding to each image
  const imageText = [
    'Apartament Boho',
    'Apartament w Stronę Słońca',
    'Pokój Sielski',
    'Pokój Leszczynowy',
    'Pokój Anielski',
    'Pokój Placeholder',
  ];

  // Slick settings for the slider
  const sliderSettings = {
    dots: true,
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
        <TypingText title="Twój komfort jest dla nas najważniejszy" textStyles="text-center text-black-50"/>
        <TitleText
          title={<>Zobacz dlaczego <br className="md:block hidden" />
          warto wybrać nasze <br className="md:block hidden" /> apartamenty i pokoje</>}
          textStyles="text-center z-30 text-black"
        />
      </motion.div>

      {/* Slider Section */}
      <style>
        {`
          @media (min-width: 1024px) {
            .my-slider {
              width: 60%;
              margin: 50px auto 0;
            }
          }
        `}
      </style>
      
      <div className={`my-slider mt-[50px] ${styles.sliderContainer}`}>
        <Slider {...sliderSettings}>
          {[7, 8, 9, 10, 11, 14].map((apartmentNum) => (
            <div key={`apartament${apartmentNum}`}>
              <div style={{ position: 'relative', borderRadius: '24px' }}>
                <img src={`apartament${apartmentNum}.jpg`} alt={`Slider Image ${apartmentNum}`} style={{ borderRadius: '24px' }} />
                <div style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '20px',
                  color: 'white',
                  fontSize: '20px',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  padding: '5px 10px',
                  borderRadius: '8px',
                }}>
                  {imageText[apartmentNum - 1]}
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="text-center mt-4">
          <button
            style={{
              marginTop: '30px',
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
      </div>
    </section>
  );
};

export default Explore;
