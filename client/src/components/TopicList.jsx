// client/src/components/TopicList.js
import React from 'react';
import { Link } from 'react-router-dom';
//import './styles/TopicList.css';

const TopicList = ({ topics, setSelectedTopicId }) => {
  return (
    <div className="topic-list">
      <h3>Topics</h3>
      {topics.length === 0 ? (
        <p>No topics found in this category.</p>
      ) : (
        <ul>
          {topics.map(topic => (
            <li key={topic._id} onClick={() => setSelectedTopicId(topic._id)}>
              <div className="topic-header">
                <h4>{topic.title}</h4>
                <span className="author">{topic.authorId.username}</span>
              </div>
              <p className="preview">{topic.content.substring(0, 100)}...</p>
              <div className="topic-footer">
                <span>Views: {topic.views}</span>
                {topic.isPinned && <span className="pinned">Pinned</span>}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TopicList;