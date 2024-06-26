'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { SaunaMastersWoman } from '../constants';
import { staggerContainer } from '../utils/motion';
import { ExploreCardSaunaWoman, TitleText, TypingText } from '../components';

const Explore = () => {
  const [active, setActive] = useState('world-2');

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="Saunamistrzynie" textStyles="text-center text-black-50"/>
        <TitleText
          title={<>Poznaj nasze <br className="md:block hidden" />
          Saunamistrzynie</>}
          textStyles="text-center z-30 text-black"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {SaunaMastersWoman.map((world, index) => (
            <ExploreCardSaunaWoman
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;