'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick'; // Import Slider from react-slick

import 'slick-carousel/slick/slick.css'; // Import slick carousel styles
import 'slick-carousel/slick/slick-theme.css'; // Import slick carousel theme styles

import styles from '../styles';
import { exploreWorlds } from '../constants';
import { fadeIn, staggerContainer } from '../utils/motion';
import { ExploreCard, TitleText, TypingText } from '../components';

const Explore = () => {
  const [active, setActive] = useState('world-1');

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
        <TypingText title="Pozwól zadbać nam o Twój komfort" textStyles="text-center text-black-50"/>
        <TitleText
          title={<>Poznaj naszych <br className="md:block hidden" />
          Saunamistrzów</>}
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
          {[1, 2, 3, 4, 5, 6,].map((apartmentNum) => (
            <div key={`masters-${apartmentNum}`}>
              <div style={{ position: 'relative', borderRadius: '24px' }}>
                <img src={`masters${apartmentNum}.jpg`} alt={`Slider Image ${apartmentNum}`} style={{ borderRadius: '24px' }} />
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
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <motion.div
  variants={staggerContainer}
  initial="hidden"
  whileInView="show"
  viewport={{ once: false, amount: 0.25 }}
  className={`${styles.innerWidth} mx-auto mt-[50px] flex flex-row gap-6 justify-center align-items-start`} // Use flex-row for all sizes
  style={{ alignItems: 'start' }}
>
  <motion.div
    variants={fadeIn('right', 'tween', 0.2, 1)}
    className="flex-1 justify-end flex-col sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative"
  >
          <div>
            <h4 className="font-bold sm:text-[32px]
            text-[26px] sm:leading-[40px] leading-[36px]
            text-black">
              Kto?
            </h4>
            <p className="mt-[8px] font-normal sm:text-[18px]
            text-[12px] sm:leading-[22px] leading-[16px] text-black-50">
              Pełen profesjonalizm
            </p>
          </div>

          <p className="mt-[24px] font-normal sm:text-[24px]
            text-[18px] sm:leading-[45px] leading-[39px] text-black-50">
          Zapraszamy Cię na wyjątkowe, co sobotnie wieczory pełne relaksu i przyjemności w naszej saunie, prowadzone przez doświadczonych saunamistrzów.

Nasze saunowe noce odbywają się z pełnym szacunkiem dla zasad Polskiego Towarzystwa Saunowego, zapewniając Ci niezapomniane doznania.
          </p>
        </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Explore;
