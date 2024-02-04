'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn } from '../utils/motion';
import { TitleText } from '../components';

const World = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const textStyle = {
    fontSize: isMobile ? '16px' : '15px',
    fontWeight: 'bold',
    marginBottom: '12px',
  };

  const cities = [
    { name: 'Kraków', distance: '144 km' },
    { name: 'Warszawa', distance: '451 km' },
    { name: 'Poznań', distance: '603 km' },
    { name: 'Wrocław', distance: '414 km' }
  ];

  return (
    <section className={`${styles.paddings} relative z-10`}>
      <TitleText title="Przyjedź do nas"
        textStyles="text-center text-black mb-20"/>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`mx-auto flex lg:flex-row flex-col gap-6 justify-center items-start w-full`}
      >
        {cities.map((city, index) => (
          <motion.div
            key={index}
            variants={fadeIn('right', 'tween', 0.2 * index, 0.5)}
            className="flex-1 max-w-[370px] w-full justify-end flex-col p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative"
          >
            <div className="text-center">
              <h4 className="font-bold text-[26px] leading-[36px] text-black">
                {city.name}
              </h4>
              <p style={textStyle}>
                Tarninowe Wzgórze ({city.distance})
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default World;
