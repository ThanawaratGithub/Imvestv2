import React from 'react';
import PropTypes from 'prop-types';
import './ArticleCard.css';

const ArticlePage = ({ title, author, date, views, sections }) => {
  return (
    <div className="article-container">
      <h1 className="article-title">{title}</h1>
      <div className="article-info">
        <span className="article-author">{author}</span>
        <span className="article-date">{date}</span>
        <span className="article-views">{views} views</span>
      </div>
      <div className="article-content">
        {sections.map((section, index) => (
          <div key={index} className="article-section">
            <h2 className="section-title">{section.title}</h2>
            <p className="section-text">{section.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

ArticlePage.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  views: PropTypes.number.isRequired,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired
};

export default ArticlePage;
