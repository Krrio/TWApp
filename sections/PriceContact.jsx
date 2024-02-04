'use client';

import Link from 'next/link';

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
    <section className={`${styles.paddings}`} id="explore3">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="Potrzebujesz więcej informacji?" textStyles="text-center text-black-50"/>
        <TitleText
          title={<>Skontakuj się <br />
          z nami!</>}
          textStyles="text-center z-30 text-black"
        />
      </motion.div>

      <div className="text-center mt-4">
  <Link href="/Kontakt" passHref>
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
      Kontakt
    </button>
  </Link>
  </div>
    </section>
  );
};
export default Explore;