import React from 'react';
import { Navbar } from '../components';
import { Footer } from '../components';
import Hero2 from '../sections/Hero2';
import Magic from '../sections/Magic';
import Nights from '../sections/Nights';
import MastersSection from '../sections/MastersSection';
import SaunaMasters from '../sections/SaunaMasters';
import SaunaMastersMan from '../sections/SaunaMastersMan';

function Galeria() {
  return (
    <div style={{ backgroundColor: '#f0f0f0', overflow: 'hidden' }}>
      <Navbar />
      <Hero2 />
      <Nights />
      <Magic />
      <MastersSection />
      <SaunaMasters />
      <SaunaMastersMan />
      <Footer />
    </div>
  );
}

export default Galeria;
