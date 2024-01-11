'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { FaArrowRight } from 'react-icons/fa';
import { newFeatures } from '../constants';
import { NewFeatures, TitleText, TypingText } from '../components';
import { planetVariants, staggerContainer, fadeIn } from '../utils/motion';
import Link from 'next/link';

const WhatsNew = () => {
  const buttonStyles = {
    borderRadius: '24px',
    backgroundColor: 'black',
    color: 'white',
    padding: '8px 16px',
    marginTop: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    width: '100%',
  };

  const arrowStyles = {
    marginLeft: '8px',
    transition: 'transform 0.3s ease',
  };

  const handleHover = (event) => {
    const arrowIcon = event.target.querySelector('.ml-2');
    arrowIcon.style.transform = 'translateX(5px)';
  };

  const handleHoverOut = (event) => {
    const arrowIcon = event.target.querySelector('.ml-2');
    arrowIcon.style.transform = 'translateX(0)';
  };

  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      >
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="flex-[0.95] flex justify-center flex-col"
        >
          <TypingText title="Daj się ponieść chwili" textStyles="text-black-50" />
          <TitleText
            title={<>Zobacz co znajdziesz w naszej ofercie</>}
            textStyles="text-black"
          />
          <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
            {newFeatures.map((feature) => (
              <NewFeatures key={feature.title} {...feature} />
            ))}
          </div>
          
          <Link href="/Oferta" passHref> {/* Wrap the button with Link and set href */}
          <a style={{ textDecoration: 'none' }}> {/* Style the link as a button */}
            <button
              style={buttonStyles}
              onMouseEnter={handleHover}
              onMouseLeave={handleHoverOut}
            >
              <span style={{ display: 'flex', alignItems: 'center' }}>
                Sprawdź pełną ofertę <FaArrowRight className="ml-2" style={arrowStyles} />
              </span>
            </button>
          </a>
        </Link>
        </motion.div>

        <motion.div
          variants={planetVariants('right')}
          className={`flex-1 ${styles.flexCenter} flex-col`}
        >
          <img
            src="/spa.jpg"
            alt="get-started"
            className="w-[90%] h-[90%] mb-4 object-contain rounded-tl-[24px]"
          />
          <img
            src="/spa2.jpg"
            alt="get-started"
            className="w-[90%] h-[90%] object-contain rounded-tl-[24px]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhatsNew;
