import './ProfileSection.css';
import { useState, useEffect } from 'react';

const ProfileSection = () => {
  const handleSetProfile = () => {
    document.getElementById('lp-2-section').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);
      useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 480);
        };
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);

  return (
    <section id="lp-2-section" className="lp-section lp-2-section">
      <div className="lp-2-container">
        {/* Left Content */}
        <div className="lp-2-content">
          <div className="text-content">
            <h1 className="lp-2-heading">Your Profile is Your Identity</h1>
            <p className="lp-2-description">
              Create a verifiable profile using your wallet. All data is stored on IPFS and the blockchain—completely owned and controlled by you.
            </p>
          </div>
          
          <button 
            className={isMobile ? "lp-blue-button-1" : "lp-blue-button"}
            onClick={handleSetProfile}
          >
            Set Your Profile
            <img src="/assets/b16a6ff87b2913f8bdc303dda7816c024bd687cb.svg" alt="" className="lp-button-icon" />
          </button>
        </div>

        {/* Right Content - Profile Circle */}
        <div className="profile-circle-section">
          <div className="profile-radiant-glow">
              
              <img src="/assets/091c505d411eb57b9f1d9290b4460a2192f03cba.svg" alt="" className="glow-overlay" />
            </div>
          <img 
            src="/assets/profilesection/profile.svg" 
            alt="Profile Circle" 
            className="profile-circle-image" 
          />
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
