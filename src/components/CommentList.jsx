// src/components/CommentList.jsx
import React, { useState } from "react";

const CommentList = ({ topicId, forumData, currentUser, onAddComment, onDeleteComment }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  // Trouver les commentaires du sujet
  React.useEffect(() => {
    forumData.categories.forEach((category) => {
      const topic = category.topics.find((t) => t.id === topicId);
      if (topic) setComments(topic.comments);
    });
  }, [topicId, forumData]);

  // Gérer l'ajout d'un commentaire
  const handleAddComment = (e) => {
    e.preventDefault();
    if (!currentUser || !newComment.trim()) return;

    const newCommentData = {
      id: comments.length + 1,
      userId: currentUser.id,
      user: currentUser.name,
      content: newComment,
    };

    onAddComment(topicId, newCommentData);
    setNewComment("");
  };

  return (
    <div>
      <h2>Commentaires</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <strong>{comment.user}:</strong> {comment.content}
            {currentUser && currentUser.id === comment.userId && (
              <button onClick={() => onDeleteComment(topicId, comment.id)}>Supprimer</button>
            )}
          </li>
        ))}
      </ul>

      {/* Formulaire pour poster un commentaire */}
      {currentUser && (
        <form onSubmit={handleAddComment}>
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Ajouter un commentaire..."
            rows={3}
          />
          <button type="submit">Poster</button>
        </form>
      )}
    </div>
  );
};

export default CommentList;