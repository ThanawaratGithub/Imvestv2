// HorizontalScrollMenu.js
import React, { useRef, useState } from 'react';
import './HorizontalScrollMenu.css'; // Your CSS file for styling

const HorizontalScrollMenu = ({ items }) => {
  const menuRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - menuRef.current.offsetLeft);
    setScrollLeft(menuRef.current.scrollLeft);
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  const onMouseLeave = () => {
    setIsDragging(false);
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - menuRef.current.offsetLeft;
    const walk = (x - startX) * 2; // the *2 is the speed of the drag
    menuRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      ref={menuRef}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
      className="scroll-menu-container"
    >
      <div className="scroll-menu">
        {items.map((item, index) => (
          <div key={index} className="menu-item">
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScrollMenu;
