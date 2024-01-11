'use client';

import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { socials } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => {
  const controlsArray = Array.from({ length: socials.length }, () =>
    useAnimation()
  );

  const handleHover = (index) => {
    controlsArray[index].start({ y: -5 });
  };

  const handleHoverExit = (index) => {
    controlsArray[index].start({ y: 0 });
  };

  const starVariants = {
    hover: {
      rotate: 180,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.paddings} py-8 relative`}
    >
      <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
        <div className="flex items-center justify-between flex-wrap gap-5">
          <h4 className="font-bold md:text-[64px] text-[44px] text-black">
            Zarezerwuj pobyt na końcu świata
          </h4>
          <motion.button
            type="button"
            className="flex items-center h-fit py-4 px-6 bg-[#010203] rounded-[32px] gap-[12px]"
            whileHover="hover"
          >
            <motion.img
              src="/star.svg"
              alt="star"
              className="w-[24px] h-[24px] object-contain"
              variants={starVariants}
            />
            <span className="font-normal text-[16px] text-white">Rezerwuj</span>
          </motion.button>
        </div>

        <div className="flex flex-col">
          <div className="mb-[50px] h-[2px] bg-black opacity-10" />

          <div className="flex items-center justify-between flex-wrap gap-4">
            <h4 className="font-extrabold text-[24px] text-black">
              Tarninowe Wzgórze <br /> Kunkowa 79, 38-315 Uście Gorlickie
            </h4>
            <p className="font-normal text-[14px] text-black opacity-50">
              Tarninowe Wzgórze - 2023 © Wszelkie prawa zastrzeżone.
            </p>
            <div className="flex gap-4">
            {socials.map((social, index) => (
  <a
    key={social.name}
    href={social.link}
    target="_blank"
    rel="noopener noreferrer"
  >
    <motion.img
      src={social.url}
      alt={social.name}
      className={`w-[44px] h-[44px] object-contain cursor-pointer ${index === socials.length - 1 ? 'w-[34px] h-[34px] mt-1.5' : ''}`}
      style={{ filter: 'brightness(0) invert(0)' }}
      whileHover={{ y: -5 }}
      onHoverStart={() => handleHover(index)}
      onHoverEnd={() => handleHoverExit(index)}
      animate={controlsArray[index]}
    />
  </a>
            ))}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;