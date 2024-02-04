import React from 'react';
import { Navbar } from '../components';
import { Footer } from '../components';
import Hero4 from '../sections/Hero4';
import Prices from '../sections/Prices';
import PriceContact from '../sections/PriceContact';

const Cennik = () => {
  return (
    <div style={{ backgroundColor: '#f0f0f0', overflow: 'hidden' }}>
      <Navbar />
      <Hero4 />
      <Prices />
      <PriceContact />
      <Footer />
    </div>
  );
}

export default Cennik