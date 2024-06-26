import React from 'react';
import './Card.css';
import tail from '../assets/ar_tail.png';

function Card({ title, subtitle }) {
  return (
    <div className="card_container">
      <div className="card" style={{ position: 'relative' }}>
        <div className="card_pic"></div>
        <div className="card_desc">
          <div className="card_text" style={{ direction: 'ltr' }}>
            <div >{title}</div>
            <div>{subtitle}</div>
          </div>
          <div className="card_tail">
            <img src={tail} alt="tail" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
