// client/src/components/CommentList.jsx
import React, { useState } from 'react';
import CommentForm from './CommentForm';
import '../styles/CommentList.css';

const CommentList = ({ 
  topicId, 
  comments, 
  currentUser, 
  onAddComment, 
  onDeleteComment 
}) => {
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(null);

  const handleAddComment = (content) => {
    onAddComment(topicId, content);
    setShowCommentForm(false);
  };

  const handleDeleteClick = (commentId) => {
    setShowDeleteConfirm(commentId);
  };

  const confirmDelete = (commentId) => {
    onDeleteComment(commentId);
    setShowDeleteConfirm(null);
  };

  return (
    <div className="comment-list">
      <h3>Discussion</h3>
      
      {comments.map(comment => (
        <div key={comment._id} className="comment">
          <div className="comment-header">
            <img 
              src={comment.authorId.profilePicture || '/default-avatar.png'} 
              alt={comment.authorId.username}
              className="comment-avatar"
            />
            <span className="comment-author">{comment.authorId.username}</span>
            <span className="comment-date">
              {new Date(comment.createdAt).toLocaleString()}
            </span>
            {currentUser && currentUser._id === comment.authorId._id && (
              <div className="comment-actions">
                {showDeleteConfirm === comment._id ? (
                  <>
                    <button 
                      onClick={() => confirmDelete(comment._id)}
                      className="confirm-delete"
                    >
                      Confirmer
                    </button>
                    <button 
                      onClick={() => setShowDeleteConfirm(null)}
                      className="cancel-delete"
                    >
                      Annuler
                    </button>
                  </>
                ) : (
                  <button 
                    onClick={() => handleDeleteClick(comment._id)}
                    className="delete-comment"
                  >
                    Supprimer
                  </button>
                )}
              </div>
            )}
          </div>
          <div className="comment-content">{comment.content}</div>
        </div>
      ))}
      
      {currentUser ? (
        showCommentForm ? (
          <CommentForm onSubmit={handleAddComment} />
        ) : (
          <button 
            onClick={() => setShowCommentForm(true)}
            className="add-comment-btn"
          >
            Ajouter un commentaire
          </button>
        )
      ) : (
        <p>Connectez-vous pour commenter.</p>
      )}
      
      <button 
        onClick={() => setShowCommentForm(true)}
        className="add-comment-btn"
      >
        Ajouter un commentaire
      </button>
    </div>
  );
};

export default CommentList;