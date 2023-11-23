'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { slideIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto
      ${styles.flexCenter} flex-col`}
    >
      <TypingText title="Ucieknij od codzienności"
      textStyles="text-center" />
    </motion.div>
    About section
  </section>
);

export default About;
