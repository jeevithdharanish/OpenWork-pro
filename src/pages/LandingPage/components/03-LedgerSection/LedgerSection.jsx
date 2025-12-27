import React from 'react';
import { useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';
import './LedgerSection.css';

const LedgerSection = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navigate = useNavigate();

  const handleShowLedger = () => {
    navigate('/browse-jobs');
  };

  return (
    <section id="lp-3-section" className="lp-section lp-3-section">
      <div className="lp-3-container">
        {/* Left Content */}
        <div className="lp-3-content">
          <div className="text-content">
            <h1 className="lp-3-heading">Added to the Ledger - Forever Yours</h1>
          <p className="lp-3-description">
            Every job, update, and review is logged immutably in the OpenWork Ledger (OWL), giving you a permanent and transparent work history.
          </p>
          </div>         
          <button 
            className={isMobile ? "lp-blue-button-1" : "lp-blue-button"}
            onClick={handleShowLedger}
          >
            Show Ledger
            <img src="/assets/b16a6ff87b2913f8bdc303dda7816c024bd687cb.svg" alt="" className="lp-button-icon" />
          </button>
        </div>

        {/* Right Content - OpenWork Ledger SVG */}
        {
          isMobile ?
        <div className="lp-3-ledger-container">
          <img src="/assets/Ledger-section/svg-mobile.svg" alt="OpenWork Ledger" className="openwork-ledger-image" />
        </div>:
        <div className="lp-3-ledger-container">
          <img src="/assets/Ledger-section/svg-desktop.svg" alt="OpenWork Ledger" className="openwork-ledger-image" />
        </div>
        }
      </div>
    </section>
  );
};

export default LedgerSection;
