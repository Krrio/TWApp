import React from 'react';
import { Navbar } from '../components';
import { Footer } from '../components';
import Hero3 from '../sections/Hero3';
import ContactAbout from '../sections/ContactAbout';
import Faq from '../sections/Faq';
import FormContact from '../sections/FormContact';

const Kontakt = () => {
  return (
    <div style={{ backgroundColor: '#f0f0f0', overflow: 'hidden' }}>
      <Navbar />
      <Hero3 />
      <ContactAbout />
      <Faq />
      <FormContact />
      <Footer />
    </div>
  )
}

export default Kontakt