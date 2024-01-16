import React from 'react';
import { Navbar } from '../components';
import { Footer } from '../components';
import Hero1 from '../sections/Hero1';
import Explore1 from '../sections/Explore1';
import Explore2 from '../sections/Explore2';
import Explore3 from '../sections/Explore3';
import Explore4 from '../sections/Explore4';
import Explore5 from '../sections/Explore5';
import Explore6 from '../sections/Explore6';
import Sauna from '../sections/Sauna';

function Oferta() {
  return (
    <div style={{ backgroundColor: '#f0f0f0', overflow: 'hidden' }}>
      <Navbar />
      <Hero1 />
      <Explore1 />
      <Explore2 />
      <Explore3 />
      <Explore6 />
      <Explore5 />
      <Explore4 />
      <Sauna />
      <Footer />
    </div>
  );
}

export default Oferta;
