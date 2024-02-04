'use client';

import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleTouchOutside = (event) => { 
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      closeMenu();
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener('touchstart', handleTouchOutside);
    } else {
      document.removeEventListener('touchstart', handleTouchOutside);
    }

    return () => {
      document.removeEventListener('touchstart', handleTouchOutside);
    };
  }, [menuOpen]);

  const linkStyles = {
    textDecoration: 'none',
    color: '#0D0D0D',
    transition: 'transform 0.2s ease-in-out, filter 0.2s ease-in-out',
  };

  const handleHover = (event) => {
    const { target } = event; // Object destructuring to extract 'target' from 'event'

    target.style.transform = 'scale(1.1)';
    target.style.filter = 'brightness(100%) saturate(120%)';
    target.style.color = '#0D0D0D';
  };

  const handleHoverOut = (event) => {
    const { target } = event; // Object destructuring to extract 'target' from 'event'

    target.style.transform = 'scale(1)';
    target.style.filter = 'brightness(100%)';
    target.style.color = '#0D0D0D';
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
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="/" className="logo-button">
          <img
            src="/twlogoedit.png"
            alt="logo"
            className="w-[54px] h-[54px] object-contain z-60 
    sm:-mt-[20px] md:mt-[0px] lg:w-[80px] lg:h-[80px]"
          />
        </a>

        <div className="hidden font-normal text-[22px] m-auto lg:flex gap-16
        text-white z-30"
        >
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <Link
            href="/"
            className={`${styles.link} ${styles.textWhite}`}
            style={linkStyles}
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverOut}
          >
            Home
          </Link>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <Link
            href="/Oferta"
            className={`${styles.link} ${styles.textWhite}`}
            style={linkStyles}
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverOut}
          >
            Oferta
          </Link>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <Link
            href="/Galeria"
            className={`${styles.link} ${styles.textWhite}`}
            style={linkStyles}
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverOut}
          >
            Noce saunowe
          </Link>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <Link
            href="#"
            className={`${styles.link} ${styles.textWhite}`}
            style={linkStyles}
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverOut}
          >
            Rezerwuj
          </Link>
          <Link
            href="/Cennik"
            className={`${styles.link} ${styles.textWhite}`}
            style={linkStyles}
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverOut}
          >
            Cennik
          </Link>
          <Link
            href="/Kontakt"
            className={`${styles.link} ${styles.textWhite}`}
            style={linkStyles}
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverOut}
          >
            Kontakt
          </Link>
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
      ref={menuRef}
      key="menu"
      className="fixed top-0 left-0 h-full w-[45%] bg-white bg-opacity-75 backdrop-filter backdrop-blur-lg z-40 p-8"
      initial={{ x: '-100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '-100%', opacity: 0 }}
      transition={{ type: 'tween', duration: 0.5 }}
    >
      <ul style={{ listStyle: 'none', padding: 0 }}>
      {["Home", "Oferta", "Galeria", "Rezerwuj", "Cennik", "Kontakt"].map((item, index) => (
  <motion.li
    key={item}
    initial={{ x: -50, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ type: 'tween', duration: 0.5, delay: 0.1 * index }}
  >
    <Link href={`/${item === "Home" ? "" : item}`}>
      <motion.a
        style={{
          display: 'block',
          textAlign: 'center',
          fontWeight: 'bold',
          textDecoration: 'none',
          color: 'black',
          margin: '20px 0',
          fontSize: '20px',
          ...linkStyles, 
        }}
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverOut}
      >
        {item === "Galeria" ? "Noce Saunowe" : item}
      </motion.a>
    </Link>
  </motion.li>
      ))}

        <li style={{ textAlign: 'center', marginTop: '40px', fontSize: '16px', color: 'black', fontWeight: 'bold' }}>
          Kunkowa 79 38-315
        </li>
        <li style={{ textAlign: 'center', marginTop: '20px', fontSize: '16px', color: 'black', fontWeight: 'bold' }}>
          Uście Gorlickie
        </li>
      </ul>
    </motion.div>
  )}
</AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
// new line 