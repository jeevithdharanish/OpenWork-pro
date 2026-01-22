import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import './PostJobSection.css';
import MobileSVG from '/assets/browsejob/image-mobile.svg';
import DesktopSVG from '/assets/browsejob/svgimg.svg';
import ButtonIcon from '/assets/b16a6ff87b2913f8bdc303dda7816c024bd687cb.svg';

const PostJobSection = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePostJob = () => {
    navigate('/browse-jobs');
  };

  // Memoize the image source to prevent unnecessary recalculations
  const imageSrc = useMemo(() => 
    isMobile ? MobileSVG : DesktopSVG,
    [isMobile]
  );

  return (
    <section id="lp-4-section" className="lp-section lp-4-section">
      <div className="lp-4-container">
        {/* Left Content */}
        <div className="lp-4-content">
          <div className="text-content">
            <h1 className="lp-4-heading">Post a Job or Browse Talent</h1>
            <p className="lp-4-description">
              Whether you're hiring or getting hired, OpenWork makes it easy to post jobs or discover skilled talent—without platform restrictions.
            </p>
          </div>
          <button 
            className={isMobile ? "lp-blue-button-1" : "lp-blue-button"}
            onClick={handlePostJob}
          >
            Post Job/Browse Talent
            <img src={ButtonIcon} alt="" className="lp-button-icon" />
          </button>
        </div>

        {/* Right Content - OpenWork Ledger SVG */}
        <div className="lp-4-ledger-container">
          <img 
            src={imageSrc} 
            alt="OpenWork Ledger" 
            className="openwork-ledger-image" 
            loading="lazy" 
          />
        </div>
      </div>
    </section>
  );
};

export default PostJobSection;