import React from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import styles from '../styles'; // Adjust the path as needed
import { FaqSteps, TitleText, TypingText } from '../components';

const inputVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const buttonVariants = {
  hover: { scale: 1.05 },
  tap: { scale: 0.95 }
};

const AnimatedForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fxfebwr', 'template_gqufo58', e.target, 'rN6Ito_bsjl2plIUh')
      .then((result) => {
        alert('Message successfully sent!');
        console.log(result.text);
      }, (error) => {
        alert('Failed to send message, please try again.');
        console.log(error.text);
      });
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8 justify-center items-center`}
    >
      <motion.div
        variants={inputVariants}
        className="flex-[0.75] flex justify-center items-center flex-col"
      >
        <TypingText title="Kontakt" textStyles="text-black-50"/>
        <TitleText
          title={<>Formularz Kontaktowy</>}
          textStyles="text-black lg:whitespace-nowrap overflow-hidden lg:overflow-visible text-center sm:text-left"
        />

        <motion.form
          className={`${styles.formStyles} mt-20 max-w-md mx-auto px-4 sm:px-0`}
          onSubmit={handleSubmit}
        >
          <div className="flex flex-wrap -mx-3 mb-6">

          <motion.div variants={inputVariants} className="w-full px-3 mb-6">
              <label htmlFor="mail" className="block text-gray-700 text-sm font-bold mb-2">
                Imię
              </label>
              <motion.input 
                type="text" 
                name="from_name" 
                id="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                style={{ backgroundColor: '#f5f5f5' }}
                variants={inputVariants}
              />
            </motion.div>
          
            <motion.div variants={inputVariants} className="w-full px-3 mb-6">
              <label htmlFor="mail" className="block text-gray-700 text-sm font-bold mb-2">
                Twój mail
              </label>
              <motion.input 
                type="text" 
                name="sender_mail" 
                id="mail"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                style={{ backgroundColor: '#f5f5f5' }}
                variants={inputVariants}
              />
            </motion.div>

            <motion.div variants={inputVariants} className="w-full px-3">
              <label htmlFor="question" className="block text-gray-700 text-sm font-bold mb-2">
                O co chcesz zapytać?
              </label>
              <motion.textarea 
                type="text" 
                name="message" 
                id="question"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                style={{ backgroundColor: '#f5f5f5' }}
                rows="8"
                variants={inputVariants}
              />
            </motion.div>
          </div>
          
          <motion.button
            type="submit"
            className="bg-black hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Wyślij!
          </motion.button>
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default AnimatedForm;