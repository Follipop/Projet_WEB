// client/src/components/CommentForm.js
import React, { useState } from 'react';
//import './styles/CommentForm.css';

const CommentForm = ({ onSubmit }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
      onSubmit(content);
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your comment here..."
        required
      />
      <div className="form-actions">
        <button type="submit">Submit</button>
        <button type="button" onClick={() => setContent('')}>Cancel</button>
      </div>
    </form>
  );
};

export default CommentForm;