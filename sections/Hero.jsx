'use client';
import { motion } from 'framer-motion';
import { IoIosArrowForward } from 'react-icons/io';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';
import { useEffect, useState } from 'react';

const TypingText = ({ text }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const textArray = text.split('');
    let display = '';
    let index = 0;

    const interval = setInterval(() => {
      if (index < textArray.length) {
        display += textArray[index];
        setDisplayText(display);
        index += 1;
      } else {
        clearInterval(interval);
      }
    }, 100); // Adjust the typing speed by changing the interval time (in milliseconds)

    return () => clearInterval(interval);
  }, [text]);

  return <h2 className="text-white text-4xl font-bold">{displayText}</h2>;
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
            <p className="text-white text-lg mt-2">na krańcu świata</p>
          </div>
          <button
            className="absolute flex top-[90%] left-1/2 transform 
            -translate-x-1/2 -translate-y-1/2 bg-white py-3 px-6 
            rounded-full text-black font-semibold shadow-md z-20
            hover:bg-black hover:text-white transition-colors duration-300">
            Eksploruj <IoIosArrowForward className="ml-2 mt-[5px]" />
          </button>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
