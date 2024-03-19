import React from 'react';
import './FadingEdgeDiv.css';

const FadingEdgeDiv = ({ children }) => {
  return (
    <div className="fade-edge">
      {children}
    </div>
  );
};

export default FadingEdgeDiv;