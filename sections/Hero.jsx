'use client';

import { motion } from 'framer-motion';
import { IoIosArrowForward } from 'react-icons/io';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant2, textVariant, textContainer } from '../utils/motion';

const TypingText = ({ text }) => (
  <motion.p
    variants={textContainer}
    initial="hidden"
    whileInView="show"
    className="text-white text-4xl font-bold"
  >
    {Array.from(text).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

const scrollToExplore = () => {
  const scrollAmount = 800; // Specify the scroll amount here

  window.scrollBy({
    top: scrollAmount, // Scrolls down by the specified amount
    behavior: 'smooth' // Smooth scroll
  });
};

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col relative`}
    >
      <div className="flex mt-[-30px] justify-center items-center flex-col relative z-10">
        <motion.h1 variants={textVariant(1.1)} className={`${styles.heroHeading} text-black`}>
          Tarninowe
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <h1 className={`${styles.heroHeading} text-black`}>Wzgórze</h1>
        </motion.div>
      </div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="relative mt-[80px]">
          <img
            src="/cover2.jpg"
            alt="hero_cover"
            className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
          />
          <div className="absolute top-[65%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20">
              <TypingText text="Magiczne miejsce" />
              <p className="text-white text-lg mt-2">na końcu świata</p>
          </div>
          <button
            onClick={scrollToExplore}
            className="absolute flex top-[90%] left-1/2 transform 
            -translate-x-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm py-3 px-6 
            rounded-full text-white font-semibold shadow-md z-20
            border border-white
            transition-all duration-300
            hover:bg-white hover:text-black hover:border-black"
          >
            Eksploruj <IoIosArrowForward className="ml-2 mt-[5px]" />
          </button>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
