'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link'; 
import Style from 'styled-jsx/style';

const calculateTimeLeft = () => {
  const difference = +new Date('2024-02-28') - +new Date();
  let remainingTime = {}; // Renamed to avoid shadowing

  if (difference > 0) {
    remainingTime = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
    };
  }

  return remainingTime;
};

const Modal = ({ onClose, children }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  function formatTimeLeft(time) {
    // Ensure each value is two digits
    const days = String(time.days).padStart(2, '0');
    const hours = String(time.hours).padStart(2, '0');
    const minutes = String(time.minutes).padStart(2, '0');

    // Split into individual digits
    return (days + hours + minutes).split('');
  }

  const formattedTime = formatTimeLeft(timeLeft);

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <button type="button" className="close-button" onClick={onClose}>&times;</button>
        <h2 className="modal-title">Noce saunowe</h2>
        {children}

        <div className="red-squares">
          {formattedTime.map((digit, index) => (
            <React.Fragment key={index}>
              {index === 2 || index === 4 ? <span>:</span> : null}
              <div className="square">{digit}</div>
            </React.Fragment>
          ))}
        </div>

        <Link href="/Galeria">
          <button type="button" className="check-button">Sprawdź <span className="arrow">→</span></button>
        </Link>
      </div>
      <Style jsx>{`
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .modal-content {
          position: relative;
          background: white;
          padding: 20px;
          border-radius: 5px;
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
        }

        .modal-title {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 15px;
          text-align: center;
        }

        .close-button {
          position: absolute;
          top: -5px;
          right: 10px;
          border: none;
          background: none;
          font-size: 24px;
          cursor: pointer;
        }

        .check-button {
          display: block;
          font-size: 16px;
          padding: 10px 15px;
          margin-top: 20px;
          margin-left: auto;
          margin-right: auto;
          background-color: black;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: background-color 0.3s ease;
        }

        .check-button .arrow {
          display: inline-block;
          transition: transform 0.3s ease;
        }

        .check-button:hover .arrow {
          transform: translateX(5px);
        }

        .check-button:hover {
          background-color: #333; // Slightly darker background on hover
        }

        .red-squares {
          text-align: center;
          margin-bottom: 15px;
          margin-top: 25px;
          display: inline-block;
        }

        .square {
          display: inline-block;
          width: 40px;
          height: 40px;
          background-color: #f0f0f0;
          border-radius: 5px;
          margin: 0 2px;
          font-size: 20px;
          line-height: 40px;
          text-align: center;
        }

        .red-squares span {
          margin: 0 5px;
          vertical-align: super;
          font-weight: 900;
        }
      `}</Style>
    </div>
  );
};

export default Modal;
