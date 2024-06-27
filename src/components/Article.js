import React from 'react';
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
          <div key={index}>
            <h2 className="section-title">{section.title}</h2>
            <p className="section-text">{section.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticlePage;