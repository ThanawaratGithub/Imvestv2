// BackToTopButton.js
import React, { useState, useEffect } from 'react';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to a given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 1900) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top coordinate to 0 and make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div style={{ display: isVisible ? 'inline' : 'none' }}>
      <button
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: '1000',
          width: '150px', // Circle diameter
          height: '150px', // Circle diameter
          borderRadius: '50%', // Makes it round
          backgroundColor: '#F2F2F2', // Background color
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: 'none', // Removes default button styling
          cursor: 'pointer', // Changes mouse cursor on hover
          fontFamily: 'LINE Seed Sans TH'
        }}
      >
        กลับสู่ด้านบน
      </button>
    </div>
  );
};

export default BackToTopButton;
