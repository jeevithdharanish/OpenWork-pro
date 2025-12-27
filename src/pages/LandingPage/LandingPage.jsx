import React, { useState, useEffect } from 'react';
import './LandingPage.css';
import LandingHeader from './components/LandingHeader/LandingHeader';
import LandingSidebar from './components/LandingSidebar/LandingSidebar';
import HeroSection from './components/01-HeroSection/HeroSection';
import ProfileSection from './components/02-ProfileSection/ProfileSection';
import LedgerSection from './components/03-LedgerSection/LedgerSection';
import PostJobSection from './components/04-PostJobSection/PostJobSection';
import DirectContractSection from './components/05-DirectContractSection/DirectContractSection';
import JobProgressSection from './components/06-JobProgressSection/JobProgressSection';
import DisputeSection from './components/07-DisputeSection/DisputeSection';
import EarnTokenSection from './components/08-EarnTokenSection/EarnTokenSection';
import GovernanceSection from './components/09-GovernanceSection/GovernanceSection';
import MultiChainSection from './components/10-MultiChainSection/MultiChainSection';
import ArchitectureSection from './components/11-ArchitectureSection/ArchitectureSection';
import RevolutionSection from './components/12-RevolutionSection/RevolutionSection';
import ContactSection from './components/13-ContactSection/ContactSection';

const LandingPage = () => {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth <= 1024;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobileOrTablet(window.innerWidth <= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="landing-page">
      {/* Radiant Glow - Fixed position, visible when sidebar expanded */}
      <div className="page-radiant-glow"></div>
      <LandingSidebar />
      <LandingHeader />
      <HeroSection />
      
      {/* Post-hero sections (single render, anchors added for icon navigation) */}
      <div id="lp-2-section"><ProfileSection /></div>
      <div id="lp-3-section"><LedgerSection /></div>
      <div id="lp-4-section"><PostJobSection /></div>
      <div id="lp-5-section"><DirectContractSection /></div>
      <div id="lp-6-section"><JobProgressSection /></div>
      <div id="lp-7-section"><DisputeSection /></div>
      <div id="lp-8-section"><EarnTokenSection /></div>
      <div id="lp-9-section"><GovernanceSection /></div>
      <div id="lp-10-section"><MultiChainSection /></div>
      <div id="lp-11-section"><ArchitectureSection /></div>
      <div id="lp-12-section"><RevolutionSection /></div>
      <div id="lp-13-section"><ContactSection /></div>
    </div>
  );
};

export default LandingPage;
