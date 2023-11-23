'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import { StartSteps, TitleText, TypingText } from '../components';

import { startingFeatures } from '../constants';


const GetStarted = () => (
  <section className={`${styles.paddings} relative
  z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: 'false', amount: 0.25}}
      className={`${styles.innerWidth} mx-auto
      flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter} flex-col`}
      >
        <img
          src="/apartament1.jpg"
          alt="get-started"
          className="w-[90%] h-[90%] mb-4 object-contain rounded-tr-[24px]"
        />
        <img
          src="/apartament2.jpg"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain rounded-tr-[24px]"
        />
      </motion.div>


      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="Zobacz jakie to proste" 
        textStyles="text-black-50"/>
        <TitleText
          title={<>Zarezerwuj wypoczynek marzeń jednym kliknięciem</>}
          textStyles="text-black"
        />
        <div className="mt-[31px] flex flex-col
        max-w-[370px] gap-[24px]">
          {startingFeatures.map((feature, index) => (
            <StartSteps
              key={feature}
              number={index + 1}
              text={feature}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
