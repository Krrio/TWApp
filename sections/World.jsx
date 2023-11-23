'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';

const World = () => {
  const [showText, setShowText] = useState(false);

  const handleHover = () => {
    setShowText(true);
  };

  const handleHoverExit = () => {
    setShowText(false);
  };

  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        {/* Other components */}
        <motion.div
          variants={fadeIn('up', 'tween', 0.3, 1)}
          className="relative mt-[68px] flex w-full h-[550px]"
        >
          <img
            src="/maptw.png"
            alt="map"
            className="w-full h-full object-cover"
          />

          <div
            className="absolute top-[30%] left-[49%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]"
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverExit}
          >
            <img
              src="location.png"
              alt="place"
              className="w-full h-full"
            />
          </div>

          {showText && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute top-[20%] left-[40%] bg-gray-900
              text-white px-2 py-1 rounded"
            >
              Kunkowa 79, 38-315 Uście Gorlickie
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default World;
