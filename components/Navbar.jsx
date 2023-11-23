'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const linkStyles = {
    textDecoration: 'none',
    color: '#0D0D0D',
    transition: 'transform 0.2s ease-in-out, filter 0.2s ease-in-out',
  };

  const handleHover = (event) => {
    event.target.style.transform = 'scale(1.1)';
    event.target.style.filter = 'brightness(100%) saturate(120%)'; // Adjust saturation for greenish effect
    event.target.style.color = '#0D0D0D'; // Change to green color
  };
  
  const handleHoverOut = (event) => {
    event.target.style.transform = 'scale(1)';
    event.target.style.filter = 'brightness(100%)';
    event.target.style.color = '#0D0D0D'; // Revert to original color
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      {/* Background elements or other components */}
      <div className="absolute w-[50%] h-[250%] ml-[480px] inset-0" />
      <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8 items-center`}>
      <a href="#" className="logo-button">
          <img
            src="/twlogo3.png"
            alt="logo"
            className="w-[54px] h-[54px] object-contain z-60 
            sm:-mt-[20px] md:mt-[0px] lg:w-[80px] lg:h-[80px]" 
          />
        </a>
        <div className="hidden font-normal text-[22px] m-auto lg:flex gap-16
        text-white z-30">
          <a
            href="#"
            className={`${styles.link} ${styles.textWhite}`}
            style={linkStyles}
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverOut}
          >
            Home
          </a>
          <a
            href="#"
            className={`${styles.link} ${styles.textWhite}`}
            style={linkStyles}
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverOut}
          >
            Oferta
          </a>
          <a
            href="#"
            className={`${styles.link} ${styles.textWhite}`}
            style={linkStyles}
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverOut}
          >
            Galeria
          </a>
          <a
            href="#"
            className={`${styles.link} ${styles.textWhite}`}
            style={linkStyles}
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverOut}
          >
            Rezerwuj
          </a>
        </div>
        <img
          src="/menu.svg"
          alt="menu"
          className="w-[24px] h-[24px] object-contain z-30 cursor-pointer
          lg:hidden"
          onClick={toggleMenu}
        />
      </div>
      <AnimatePresence>
      {menuOpen && (
        <motion.div
          key="menu"
          className="fixed top-0 left-0 h-full w-[45%] bg-white bg-opacity-75 backdrop-filter backdrop-blur-lg z-40 p-8"
          initial={{ x: '-100%', opacity: 0 }} // Initial state: off-screen and transparent
          animate={{ x: 0, opacity: 1 }} // Animate to on-screen and visible
          exit={{ x: '-100%', opacity: 0 }} // Exit state: off-screen and transparent
          transition={{ type: 'tween', duration: 0.5 }}
        >
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <motion.li
              initial={{ x: -50, opacity: 0 }} // Initial state: off-screen and transparent
              animate={{ x: 0, opacity: 1 }} // Animate to on-screen and visible
              transition={{ type: 'tween', duration: 0.5, delay: 0.1 }} // Add a delay for a stagger effect
            >
              <a
                href="#tab1"
                style={{
                  display: 'block',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  color: 'black',
                  margin: '20px 0',
                  fontSize: '20px',
                }}
              >
                Home
              </a>
            </motion.li>
            <motion.li
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: 'tween', duration: 0.5, delay: 0.2 }}
            >
              <a
                href="#tab2"
                style={{
                  display: 'block',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  color: 'black',
                  margin: '20px 0',
                  fontSize: '20px',
                }}
              >
                Oferta
              </a>
            </motion.li>
            <motion.li
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: 'tween', duration: 0.5, delay: 0.3 }}
            >
              <a
                href="#tab3"
                style={{
                  display: 'block',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  color: 'black',
                  margin: '20px 0',
                  fontSize: '20px',
                }}
              >
                Galeria
              </a>
            </motion.li>
            <motion.li
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: 'tween', duration: 0.5, delay: 0.4 }}
            >
              <a
                href="#tab4"
                style={{
                  display: 'block',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  color: 'black',
                  margin: '20px 0',
                  fontSize: '20px',
                }}
              >
                Rezerwuj
              </a>
            </motion.li>
            <motion.li
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: 'tween', duration: 0.5, delay: 0.5 }}
            >
              <a
                style={{
                  display: 'block',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  color: 'black',
                  margin: '80px 0',
                  fontSize: '18px',
                }}
              >
                Kunkowa 79 38-315
              </a>
            </motion.li>
            <motion.li
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: 'tween', duration: 0.5, delay: 0.6 }}
            >
              <a
                style={{
                  display: 'block',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  color: 'black',
                  margin: '-70px 0',
                  fontSize: '18px',
                }}
              >
                Uście Gorlickie
              </a>
            </motion.li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>



    </motion.nav>
  );
};

export default Navbar;