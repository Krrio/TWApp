'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';

const photosAndTexts = [
  { photo: '/master1.jpg', text: 'Text for Photo 1' },
  { photo: '/master3.jpg', text: 'Text for Photo 2' },
  { photo: '/master1.jpg', text: 'Text for Photo 3' },
  { photo: '/master3.jpg', text: 'Text for Photo 4' },
  { photo: '/master1.jpg', text: 'Text for Photo 5' },
  { photo: '/master3.jpg', text: 'Text for Photo 6' },
  { photo: '/master1.jpg', text: 'Text for Photo 7' },
  { photo: '/master3.jpg', text: 'Text for Photo 8' },
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const ResponsiveSquare = () => {
  const [[currentIndex, direction], setCurrentIndex] = useState([0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(([prevIndex, _]) => [(prevIndex + 1) % photosAndTexts.length, 1]);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const paginate = (newDirection) => {
    setCurrentIndex(([prevIndex, _]) => [(prevIndex + newDirection + photosAndTexts.length) % photosAndTexts.length, newDirection]);
  };

  const currentPhoto = photosAndTexts[currentIndex].photo;
  const currentText = photosAndTexts[currentIndex].text;

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-5 my-10">
      <motion.div
        key={currentPhoto}
        custom={direction}
        variants={slideVariants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 }
        }}
        className="w-72 h-72 md:w-96 md:h-[35rem] lg:w-[40rem] lg:h-[50rem] bg-gray-200 rounded-2xl overflow-hidden"
      >
        <img src={currentPhoto} alt="Photo" className="w-full h-full object-cover" />
      </motion.div>
      <motion.div
        key={currentText}
        custom={direction}
        variants={slideVariants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 }
        }}
        className="w-72 h-72 md:w-96 md:h-[35rem] lg:w-[40rem] lg:h-[50rem] border-2 border-black rounded-2xl flex items-center justify-center p-8"
      >
        <p className="text-center">{currentText}</p>
      </motion.div>
    </div>
  );
};

export default ResponsiveSquare;