import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './LandingSidebar.css';
import { label } from 'framer-motion/client';

const LandingSidebar = () => {
  const [activeSection, setActiveSection] = useState('discoverable');
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('down');
  const lastScrollY = useRef(0);

  const sidebarItems = [
    {id:1,  icon: "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'%3E%3Cpath d='M6 14V9.06666C6 8.69329 6 8.5066 6.07266 8.364C6.13658 8.23855 6.23857 8.13657 6.36401 8.07265C6.50661 7.99999 6.6933 7.99999 7.06667 7.99999H8.93333C9.3067 7.99999 9.49339 7.99999 9.63599 8.07265C9.76144 8.13657 9.86342 8.23855 9.92734 8.364C10 8.5066 10 8.69329 10 9.06666V14M7.34513 1.84267L2.82359 5.35942C2.52135 5.5945 2.37022 5.71204 2.26135 5.85924C2.16491 5.98963 2.09307 6.13652 2.04935 6.2927C2 6.46901 2 6.66046 2 7.04337V11.8667C2 12.6134 2 12.9868 2.14532 13.272C2.27316 13.5229 2.47713 13.7268 2.72801 13.8547C3.01323 14 3.3866 14 4.13333 14H11.8667C12.6134 14 12.9868 14 13.272 13.8547C13.5229 13.7268 13.7268 13.5229 13.8547 13.272C14 12.9868 14 12.6134 14 11.8667V7.04337C14 6.66046 14 6.46901 13.9506 6.2927C13.9069 6.13652 13.8351 5.98963 13.7386 5.85924C13.6298 5.71204 13.4787 5.5945 13.1764 5.35942L8.65487 1.84267C8.42065 1.6605 8.30354 1.56941 8.17423 1.5344C8.06013 1.50351 7.93987 1.50351 7.82577 1.5344C7.69646 1.56941 7.57935 1.6605 7.34513 1.84267Z' stroke='%23535353' stroke-width='0.666667' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E", label:'home', 
      section:'lp-1-section', activeY:-120},
    {id:2,icon:'/assets/3d388d45b23ed4826566c6c199aff49f93e7acec.svg' ,label:'set-Profile', section:'lp-2-section', activeY:-130},
    { id: 3, icon: '/assets/sidebar-icon-1.svg', label: 'Discoverable', section: 'lp-3-section', activeY: -150 },
    { id: 4, icon: '/assets/sidebar-icon-2.svg', label: 'Job/Contract', section: 'lp-4-section', activeY: -200 },
    { id: 5, icon: '/assets/sidebar-icon-3.svg', label: 'Direct Contract', section: 'lp-5-section', activeY: -230 },
    { id: 6, icon: '/assets/sidebar-icon-4.svg', label: 'Job In Progress', section: 'lp-6-section', activeY: -270 },
    { id: 7, icon: '/assets/sidebar-icon-5.svg', label: 'Raise Dispute', section: 'lp-7-section', activeY: -300 },
    { id: 8, icon: '/assets/diploma/icon.svg', label: 'Earn & Govern', section: 'lp-8-section', activeY: -320 },
    { id: 9, icon: '/assets/sidebar-icon-7.svg', label: 'DAO', section: 'lp-9-section', activeY: -350 },
    { id: 10, icon: '/assets/sidebar-icon-8.svg', label: 'Local Network', section: 'lp-10-section', activeY: -380 },
    { id: 11, icon: '/assets/sidebar-icon-9.svg', label: 'Openwork Arch', section: 'lp-11-section', activeY: -420 },
    { id: 12, icon: '/assets/sidebar-icon-10.svg', label: 'Work Revolution', section: 'lp-12-section', activeY: -450 },
    // {id:13, icon:"data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M21 5H3a2 2 0 00-2 2v10a2 2 0 002 2h18a2 2 0 002-2V7a2 2 0 00-2-2z' stroke='%231246FF' stroke-width='1.6' fill='none'/%3E%3Cpath d='M3 7l9 6 9-6' stroke='%231246FF' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round' fill='none'/%3E%3C/svg%3E",
    //    label:'Contact', section:'lp-13-section', activeY:-480},
  ];

  const buildMobileItems = () => {
    const currentIndex = sidebarItems.findIndex(item => item.section === activeSection);
    const safeIndex = currentIndex === -1 ? 0 : currentIndex;
    const prevIndex = safeIndex > 0 ? safeIndex - 1 : null;
    const nextIndex = safeIndex < sidebarItems.length - 1 ? safeIndex + 1 : null;

    const items = [];

    if (prevIndex !== null) {
      const prevItem = sidebarItems[prevIndex];
      items.push({ ...prevItem, id: `${prevItem.id}-prev`, position: 'prev' });
    } else {
      items.push({ id: 'placeholder-prev', hidden: true, position: 'prev' });
    }

    const currentItem = sidebarItems[safeIndex];
    items.push({ ...currentItem, id: `${currentItem.id}-current`, position: 'current' });

    if (nextIndex !== null) {
      const nextItem = sidebarItems[nextIndex];
      items.push({ ...nextItem, id: `${nextItem.id}-next`, position: 'next' });
    } else {
      items.push({ id: 'placeholder-next', hidden: true, position: 'next' });
    }

    return items;
  };

  const mobileSidebarItems = buildMobileItems();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Preload all sidebar icons for faster switching
    sidebarItems.forEach(item => {
      if (item.icon) {
        const img = new Image();
        img.src = item.icon;
      }
    });
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (Math.abs(currentY - lastScrollY.current) > 6) {
        const nextDirection = currentY > lastScrollY.current ? 'down' : 'up';
        setScrollDirection(prev => (prev !== nextDirection ? nextDirection : prev));
        lastScrollY.current = currentY;
      }

      const scrollPosition = currentY + window.innerHeight / 2;

      const secondSection = document.getElementById('lp-2-section');
      if (secondSection) {
        const threshold = secondSection.offsetTop - window.innerHeight * 0.2;
        setSidebarVisible(currentY >= threshold);
      }

      // Find which section is currently in view
      for (let i = sidebarItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(sidebarItems[i].section);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(sidebarItems[i].section);
            break;
          }
        }
      }
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // On mobile (≤480px), account for header height
      const isMobileView = typeof window !== 'undefined' && window.innerWidth <= 480;
      const header = document.querySelector('.landing-header');
      const headerHeight = header ? header.offsetHeight : 0;
      const offset = isMobileView ? headerHeight + 16 : 0;
      const target = Math.max(element.offsetTop - offset, 0);
      window.scrollTo({ top: target, behavior: 'smooth' });
    }
  };

  // Get the index of the active section
  const activeIndex = sidebarItems.findIndex(item => item.section === activeSection);

  // Calculate positions for each icon
  const getIconPosition = (index) => {
    const groupSpacing = 40;
    
    if (activeIndex === -1) {
      // Initial state
      const targetPosition = -150;
      return {
        y: targetPosition + (index * 48),
        opacity: index > 5 ? 0 : 1,
        scale: 1,
      };
    }
    
    const distanceFromActive = index - activeIndex;
    const targetPosition = sidebarItems[activeIndex].activeY; // Use custom active position
    const basePosition = targetPosition + 200; // Starting position for icons below active
    
    if (distanceFromActive === 0) {
      // Active icon - use custom position
      return {
        y: targetPosition,
        opacity: 1,
        scale: 1.15,
      };
    } else if (distanceFromActive < 0) {
      // Icons above (already passed)
      const absDistance = Math.abs(distanceFromActive);
      return {
        y: targetPosition + (distanceFromActive * groupSpacing),
        opacity: Math.max(0, 1 - absDistance * 0.4),
        scale: Math.max(0.7, 1 - absDistance * 0.15),
      };
    } else {
      // Icons below (upcoming)
      return {
        y: basePosition + ((distanceFromActive - 1) * groupSpacing),
        opacity: Math.max(0.3, 1 - (distanceFromActive - 1) * 0.15),
        scale: Math.max(0.85, 1 - (distanceFromActive - 1) * 0.05),
      };
    }
  };

  // Pick correct item set
  const finalDisplayItems = isMobile ? mobileSidebarItems : sidebarItems;

  // Preload all icons on component mount
  useEffect(() => {
    sidebarItems.forEach(item => {
      if (item.icon) {
        const img = new Image();
        img.src = item.icon;
      }
    });
  }, []);

  return (
    <aside
      className={`landing-sidebar ${sidebarVisible ? 'visible' : ''} ${scrollDirection === 'down' ? 'scroll-down' : 'scroll-up'}`}
    >
      {/* Vertical gradient line */}
      <div className="sidebar-line"></div>

      {/* Navigation icons */}
      <nav className="sidebar-nav">
        {finalDisplayItems.map((item, index) => {
          if (item.hidden) {
            return (
              <div
                key={item.id}
                className="sidebar-nav-item"
                style={{ visibility: 'hidden', pointerEvents: 'none' }}
              >
                <div className="icon-wrapper"></div>
              </div>
            );
          }

          const isActive = activeSection === item.section;
          const position = isMobile ? {} : getIconPosition(index);
          const distanceFromActive = isMobile ? 0 : index - activeIndex;
          const isNearActive = isMobile ? true : Math.abs(distanceFromActive) <= 2;
          
          return (
            <motion.button
              key={item.id}
              className={`sidebar-nav-item ${isActive ? 'active' : ''} ${isNearActive ? 'near-active' : ''}`}
              onClick={() => handleScrollToSection(item.section)}
              aria-label={item.label}
              initial={false}
              animate={isMobile ? {} : {
                top: position.y,
                opacity: position.opacity,
                scale: position.scale,
              }}
              transition={isMobile ? { duration: 0.15 } : {
                type: 'spring',
                stiffness: 300,
                damping: 30,
                mass: 0.8,
              }}
              style={{
                zIndex: isActive ? 10 : 1,
                pointerEvents: isMobile ? 'auto' : (position.opacity < 0.2 ? 'none' : 'auto'),
              }}
            >
              <div className="icon-wrapper">
                <img src={item.icon} alt={item.label} loading="eager" fetchpriority="high" />
              </div>
              <span className="nav-label">{item.label}</span>
            </motion.button>
          );
        })}
      </nav>
    </aside>
  );
};

export default LandingSidebar;
