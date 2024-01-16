'use client';

import { motion } from "framer-motion";
import styles from "../styles";

import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";

const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex
        lg:flex-row flex-col gap-6 justify-center align-items-start`} // Added align-items-start
        style={{ alignItems: 'start' }} // Align items at the start
      >
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="flex-[0.5] lg:max-w-[370px] flex
          justify-end flex-col sm:p-8 p-4
          rounded-[32px] border-[1px] border-[#6a6a6a]
          relative"
        >
          <div>
            <h4 className="font-bold sm:text-[32px]
            text-[26px] sm:leading-[40px] leading-[36px]
            text-black">
              Paulina
            </h4>
            <p className="mt-[8px] font-normal sm:text-[18px]
            text-[12px] sm:leading-[22px] leading-[16px] text-black-50">
              Gość
            </p>
          </div>

          <p className="mt-[24px] font-normal sm:text-[24px]
            text-[18px] sm:leading-[45px] leading-[39px] text-black-50">
          Przepiękny obiekt w Beskidzie Niskim, wśród lasów 
          i z daleka od innych zabudowań. Bardzo polecam Apartament
          w stronę słońca z bajecznym widokiem na zalesione wzgórza. 
          Widać ogrom pracy włożony w wystroj – niebanalny i z 
          pomysłem.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="flex-[0.5] lg:max-w-[370px] flex
          justify-end flex-col sm:p-8 p-4
          rounded-[32px] border-[1px] border-[#6a6a6a]
          relative"
        >
          <div>
            <h4 className="font-bold sm:text-[32px]
            text-[26px] sm:leading-[40px] leading-[36px]
            text-black">
              Maciej
            </h4>
            <p className="mt-[8px] font-normal sm:text-[18px]
            text-[12px] sm:leading-[22px] leading-[16px] text-black-50">
              Gość
            </p>
          </div>

          <p className="mt-[24px] font-normal sm:text-[24px]
            text-[18px] sm:leading-[45px] leading-[39px] text-black-50"> 
          Czysty, ładnie urządzony pokój. Bardzo ładne otoczenie
          i piękny widok na góry. Gospodyni przemiła, troskliwa. 
          Bardzo smaczne śniadanie. To wszystko sprawia, że wywieźliśmy z 
          Tarninowego Wzgórza bardzo miłe wspomnienia 
          i na pewno wrócimy jeszcze nie raz.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="flex-[0.5] lg:max-w-[370px] flex
          justify-end flex-col sm:p-8 p-4
          rounded-[32px] border-[1px] border-[#6a6a6a]
          relative"
        >
          <div>
            <h4 className="font-bold sm:text-[32px]
            text-[26px] sm:leading-[40px] leading-[36px]
            text-black">
              Krzysztof
            </h4>
            <p className="mt-[8px] font-normal sm:text-[18px]
            text-[12px] sm:leading-[22px] leading-[16px] text-black-50">
              Gość
            </p>
          </div>

          <p className="mt-[24px] font-normal sm:text-[24px]
            text-[18px] sm:leading-[45px] leading-[39px] text-black-50"> 
          Fenomenalny obiekt! Położony z dala od innych zabudowań, 
          gwarantuje ciszę, 
          spokój, sielskie pejzaże i 
          możliwość prawdziwego relaksu i wyciszenia się. 
          Wnętrza bardzo czyste, schludne, łazienki wręcz ekskluzywne, 
          wyjątkowo eleganckie!
          </p>
        </motion.div>
      </motion.div>
  </section>
  
);

export default Feedback;
