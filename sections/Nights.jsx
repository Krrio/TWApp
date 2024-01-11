'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn, staggerContainer, cloudVariants, cloudVariants1 } from '../utils/motion';
import { TypingText, TitleText } from '../components';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const GetStarted = () => {
  // Initialize screenWidth with a default value (e.g., for mobile screens)
  const [screenWidth, setScreenWidth] = useState(768); // Or another default width

  useEffect(() => {
    // Update the screenWidth state with the actual width after the component mounts
    setScreenWidth(window.innerWidth);

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  // Calculate the top position for the slider based on screenWidth
  const sliderTop = screenWidth <= 768 ? '-200px' : '0';

  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      >
        <motion.div
          variants={cloudVariants('left', screenWidth)}
          className={`flex-1 ${styles.flexCenter} flex-col`}
        >
          <img
            src="/moon.png"
            alt="get-started"
            className="w-[60%] h-[60%] mb-4 object-contain rounded-tr-[24px]"
          />
        </motion.div>

        <motion.div
          variants={cloudVariants1('right', screenWidth)}
          className={`flex-1 ${styles.flexCenter} flex-col`}
        >
          <img
            src="/cloud.png"
            alt="get-started"
            className="w-[130%] h-[130%] mb-4 object-contain rounded-tr-[24px]"
          />
        </motion.div>
      </motion.div>

      <div className="text-center" style={{ position: 'relative', top: sliderTop }}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.innerWidth} mx-auto flex flex-col`}
        >
          <TypingText title="To chwila tylko dla Ciebie" textStyles="text-center text-black-50" />
          <TitleText
            title={<>Noce Saunowe</>}
            textStyles="text-center z-30 text-black"
          />
        </motion.div>
      </div>

      {/* Conditionally render the slider with photos */}
        <div className={`my-slider mt-[-150px] ${styles.sliderContainer}`} style={{ top: sliderTop }}>
          <Slider {...sliderSettings}>
            {[2, 3, 4, 5, 6].map((apartmentNum) => (
              <div key={`spa-${apartmentNum}`}>
                <div style={{ position: 'relative', borderRadius: '24px' }}>
                  <img src={`spa${apartmentNum}.jpg`} alt={`Slider Image ${apartmentNum}`} style={{ borderRadius: '24px' }} />
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
              Dlaczego?
            </h4>
            <p className="mt-[8px] font-normal sm:text-[18px]
            text-[12px] sm:leading-[22px] leading-[16px] text-black-50">
              Sprawdź sam
            </p>
          </div>

          <p className="mt-[24px] font-normal sm:text-[24px]
            text-[18px] sm:leading-[45px] leading-[39px] text-black-50">
          Po intensywnym i rozgrzewającym seansie będziesz mógł oderwać się od codzienności, ochłodzić w naszej zimnej wodzie lub w rzece, a następnie zrelaksować się w strefie komfortu. Dodatkowo, dla Twojego ukojenia, serwujemy pyszne przekąski, a razem możemy przygotować smaczne kiełbaski przy ognisku.
          </p>
        </motion.div>
        </motion.div>
        </div>
    </section>
  );
};

export default GetStarted;
