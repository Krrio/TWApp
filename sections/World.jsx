'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const World = () => {
  const [showText, setShowText] = useState(false);
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
    fontSize: isMobile ? '16px' : '18px',
    fontWeight: 'bold',
    marginBottom: '12px',
  };

  const handleHover = () => {
    setShowText(true);
  };

  const handleHoverExit = () => {
    setShowText(false);
  };

  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 }
  };

  return (
    <section className="relative z-10" style={{ padding: '20px' }}>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="mx-auto flex flex-col"
        style={{ maxWidth: '1000px' }}
      >
        <motion.div
          variants={fadeInVariant}
          className="relative flex w-full"
          style={{ marginTop: '68px', height: '550px' }}
        >
          <img
            src="/maptw.png"
            alt="map"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />

          <div
            style={{
              position: 'absolute',
              top: '30%',
              left: '49%',
              width: '70px',
              height: '70px',
              padding: '6px',
              borderRadius: '50%',
              backgroundColor: '#5d6680'
            }}
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverExit}
          >
            <img
              src="location.png"
              alt="place"
              style={{ width: '100%', height: '100%' }}
            />
          </div>

          {showText && (
            <motion.div
              variants={fadeInVariant}
              style={{
                position: 'absolute',
                top: '20%',
                left: '40%',
                backgroundColor: 'gray',
                color: 'white',
                padding: '2px',
                borderRadius: '4px'
              }}
            >
              Kunkowa 79, 38-315 Uście Gorlickie
            </motion.div>
          )}
        </motion.div>

        <motion.div
          variants={fadeInVariant}
          className="text-center"
          style={{ marginTop: '24px' }}
        >
          <p style={textStyle}>Kraków - Tarninowe Wzgórze (144 km)</p>
          <p style={textStyle}>Warszawa - Tarninowe Wzgórze (451 km)</p>
          <p style={textStyle}>Poznań - Tarninowe Wzgórze (603 km)</p>
          <p style={textStyle}>Wrocław - Tarninowe Wzgórze (414 km)</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default World;
