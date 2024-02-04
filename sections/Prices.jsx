import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { fadeIn } from '../utils/motion';
import { TitleText } from '../components';

const ContactAbout = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <TitleText
        title={<>Cenny w sezonie <br className="md:block hidden" />
        letnim i zimowym</>}
        textStyles="text-center z-30 text-black"
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`mt-20 mx-auto flex lg:flex-row flex-col gap-6 justify-center align-items-start lg:w-full md:w-full sm:w-screen`} // Updated the class for responsive design
        style={{ alignItems: 'start' }}
      >
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 0.5)}
          className="flex-[0.5] lg:max-w-[370px] w-full md:w-full sm:w-screen justify-end flex-col sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative"
        >
          <div>
            <h4 className="text-center font-bold sm:text-[32px]
            text-[26px] sm:leading-[40px] leading-[36px]
            text-black">
              Letni
            </h4>
            <p className="text-center mt-[8px] font-normal sm:text-[18px]
            text-[12px] sm:leading-[22px] leading-[16px] text-black-50">
              Sezon
            </p>
          </div>

          <div className="flex items-center justify-center h-full">
            <p className="text-center font-normal mt-[10px] sm:text-[22px] text-[18px] sm:leading-[45px] leading-[39px] text-black-50">
              <strong>od data_placeholder <br /> do data_placeholder</strong> <br /> Zadzwoń albo napisz maila! 
              <br /> cena <br /> placeholder
              <br /> cena <br /> placeholder
              <br /> cena <br /> placeholder
              <br /> cena <br /> placeholder
              <br /> cena <br /> placeholder
              <br /> cena <br /> placeholder
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn('right', 'tween', 0.8, 0.5)}
          className="flex-[0.5] lg:max-w-[370px] w-full md:w-full sm:w-screen justify-end flex-col sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative"
        >
          <div>
            <h4 className="text-center font-bold sm:text-[32px]
            text-[26px] sm:leading-[40px] leading-[36px]
            text-black">
              Zimowy
            </h4>
            <p className="text-center mt-[8px] font-normal sm:text-[18px]
            text-[12px] sm:leading-[22px] leading-[16px] text-black-50">
              Sezon
            </p>
          </div>

          <div className="flex items-center justify-center h-full">
            <p className="text-center font-normal mt-[10px] sm:text-[22px] text-[18px] sm:leading-[45px] leading-[39px] text-black-50">
              <strong>od data_placeholder <br />do data_placeholder</strong> <br /> Sprawdź najczęściej
              <br /> cena <br /> placeholder
              <br /> cena <br /> placeholder
              <br /> cena <br /> placeholder
              <br /> cena <br /> placeholder
              <br /> cena <br /> placeholder
              <br /> cena <br /> placeholder
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactAbout;
