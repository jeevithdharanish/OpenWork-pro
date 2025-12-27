import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './DisputeSection.css';

const DisputeSection = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);
      useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 480);
        };
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);
  const navigate = useNavigate();

  return (
    <section id="lp-7-section" className="lp-section lp-7-section">
      <div className="lp-7-container">
        <div className="lp-7-content">
          <div className="text-content">
            <h1 className="lp-7-heading">Dispute Resolution with Skill Oracles</h1>
          <p className="lp-7-description">
            Disagreements? Let verified experts in the field decide. Skill-based oracles resolve disputes through decentralized token-based voting.
          </p>
          </div>
          <button 
            className={isMobile ? "lp-blue-button-1" : "lp-blue-button"}
            onClick={() => navigate('/browse-jobs')}
          >
            See Disputes
            <img src="/assets/lp7-arrow-icon.svg" alt="" className="lp-button-icon" />
          </button>
        </div>

        <div className="lp-7-circle-container">
          <div className="lp-7-oracle-circle-group">
            <img src="/assets/outer-circle-dispute.svg" alt="" className="lp-7-ellipse-bg" />

            <div className="lp-7-core-circle">
              <img src="/assets/lp7-core-circle.svg" alt="" className="lp-7-core-bg" />
            </div>

            <div className="lp-7-center-athena">
              <div className="lp-7-athena-container">
                <img src="/assets/Athena.svg" alt="Athena" className="lp-7-athena-image" />
              </div>
              <img src="/assets/job-text.svg" alt="" className="lp-7-job-text" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisputeSection;
