import React from 'react';
import CategoryList from './CategoryList';
import TopicList from './TopicList';
import CommentList from './CommentList';

const MainContent = ({ currentPage }) => {
  return (
    <div>
      {currentPage === 'home' && <p>Bienvenue sur notre forum en ligne!</p>}
      {currentPage === 'categories' && <CategoryList />}
      {currentPage === 'topics' && <TopicList />}
      {currentPage === 'comments' && <CommentList />}
    </div>
  );
};

export default MainContent;