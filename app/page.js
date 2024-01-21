'use client'

import React, { useState, useEffect } from 'react';
import { Footer, Navbar, WorkWith, Modal } from '../components';
import { Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

const Page = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="page-background-3 overflow-hidden">
      <Navbar />
      <Hero />
      <div className="relative">
        <Explore />
      </div>
      <div className="relative">
        <GetStarted />
        <WhatsNew />
      </div>
      <World />
      <div className="relative">
        <Insights />
        <Feedback />
        <WorkWith />
      </div>
      <Footer />

      {showModal && (
        <Modal onClose={handleCloseModal}>
          <p>Następne wydarzenie odbędzie się za:</p>
        </Modal>
      )}
    </div>
  );
};

export default Page;
