'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { InsightCard, TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion'; 

const Insights = () => {
  const photoLinks = ['https://www.booking.com/hotel/pl/tarninowe-wzgorze.pl.html?aid=311097&label=tarninowe-wzgorze-ZInGc2cRgBgQlqGY5mbIfgS390746305876%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atiaud-1110454565467%3Akwd-352493396327%3Alp20852%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YavywThF4buZtMEeOgSC-o4&sid=aa167fa9dc581df3a168eb7078e01281&dest_id=-511843;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1704910444;srpvid=10198030620a01ab;type=total;ucfs=1&#hotelTmpl', 'https://hotres.pl/'];

  return (
    <section className={`${styles.paddings} relative z-10 mt-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="Współpracujemy z najlepszymi"
        textStyles="text-center text-black-50"/>
        <TitleText title="Partnerzy"
        textStyles="text-center text-black"/>

        <div className="flex flex-col md:flex-row justify-center items-center mt-8 md:gap-4 gap-1"> 
          {[1, 2].map((photo, index) => (
            <a href={photoLinks[index]} target="_blank" rel="noopener noreferrer">
              <motion.div 
                key={photo}
                variants={fadeIn('left', 'spring', 0.2, 1)} 
                className={`w-40 h-40 md:w-60 md:h-60 rounded-lg overflow-hidden ${index === 1 ? 'mt-[-100px] md:mt-0' : 'mb-2 md:mb-0'}`}
                initial="hidden"
                whileInView="show"
                custom={index} 
              >
                <img src={`/photo${photo}.png`} alt={`Photo ${photo}`} className="w-full h-full object-contain" />
              </motion.div>
            </a>
          ))}
        </div>
      </motion.div>
    </section> 
  );
};

export default Insights;
