'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} py-8 relative`}
  >
    <div className={`${styles.innerWidth} mx-auto
    flex flex-col gap-8`}>
      <div className="flex items-center
      justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px]
        text-[44px] text-black">Zarezerwuj pobyt na krańcu świata</h4>
        <button type="button" className="flex items-center
        h-fit py-4 px-6 bg-[#010203] rounded-[32px] gap-[12px]">
          <img src="/star.svg"
          alt="star"
          className="w-[24px] h-[24px] object-contain"/>
          <span className="font-normal text-[16px]
          text-white">Rezerwuj</span>
        </button>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-black opacity-10"/>

        <div className="flex items-center justify-between
        flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-black">
            Tarninowe Wzgórze <br/> Kunkowa 79,  38-315 Uście Gorlickie
          </h4>
          <p className="font-normal text-[14px]
          text-black opacity-50"> 
            Tarninowe Wzgórze - 2023 © Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex gap-4">
            {socials.map((social) => (
              <img
                key={social.name}
                src={social.url}
                alt={social.name}
                className="w-[34px] h-[34px] object-contain cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
