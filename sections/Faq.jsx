'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import { FaqSteps, TitleText, TypingText } from '../components';

import { faqQuestions } from '../constants';


const Faq = () => (
  <section className={`${styles.paddings} relative z-10 flex justify-center items-center`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: false, amount: 0.25}}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8 justify-center items-center`}
    >
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center items-center flex-col"
      >
        <TypingText title="Frequently Asked Questions" 
        textStyles="text-black-50 text-center sm:text-left"/>
        <TitleText
          title={<>Najczęściej zadawane pytania</>}
          textStyles="text-black lg:whitespace-nowrap overflow-hidden lg:overflow-visible text-center sm:text-left"
        />

        <div className="mt-[71px] flex flex-col max-w-[570px] gap-[24px]">
          {faqQuestions.map((item, index) => (
            <FaqSteps
              key={item.question}
              number={index + 1}
              question={item.question}
              additionalText={item.additionalText}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);



export default Faq;
