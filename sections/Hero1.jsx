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
    }, 100);

    return () => clearInterval(interval);
  }, [text]);

  return <h2 className="text-white text-4xl font-bold">{displayText}</h2>;
};

const Hero = () => {
  const [scrollAmount, setScrollAmount] = useState(5950); // Default scroll amount for small devices

  useEffect(() => {
    const updateScrollAmount = () => {
      // Check if the window width is larger than a certain breakpoint, e.g., 1024px for large devices
      if (window.innerWidth > 1024) {
        setScrollAmount(9300); // Set a different scroll amount for large screens
      } else {
        setScrollAmount(5950); // Set the scroll amount for small devices
      }
    };

    updateScrollAmount(); // Update scroll amount on initial render

    // Update scroll amount on window resize
    window.addEventListener('resize', updateScrollAmount);

    return () => window.removeEventListener('resize', updateScrollAmount);
  }, []);

  const handleScroll = () => {
    window.scrollBy({
      top: scrollAmount, // Use the dynamic scroll amount
      behavior: 'smooth' // Smooth scrolling
    });
  };

  return (
    <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col relative`}
      >
        <div className="flex mt-[-30px] ml-[-25px] justify-center items-center flex-col relative z-10">
          <motion.h1 variants={textVariant(1.1)} className={`${styles.heroHeading} text-black`}>
            Odkryj
          </motion.h1>
          <motion.div
            variants={textVariant(1.2)}
            className="flex flex-row justify-center items-center"
          >
            <h1 className={`${styles.heroHeading} text-black`}>Tarninowe</h1>
          </motion.div>
          <motion.div
            variants={textVariant(1.3)}
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
          <button
  onClick={handleScroll}
  className="absolute flex top-[90%] ml-[-10px] left-1/2 transform 
  -translate-x-1/2 -translate-y-1/2 bg-white py-3 px-6 
  rounded-full text-black font-semibold shadow-md z-20
  hover:bg-black hover:text-white transition-colors duration-300
  whitespace-nowrap">
  Noce Saunowe <IoIosArrowForward className="ml-2 mt-[5px]" />
</button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
