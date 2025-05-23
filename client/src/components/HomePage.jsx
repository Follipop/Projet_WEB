import React, { useState, useEffect } from 'react';
import CategoryList from './CategoryList';
import TopicList from './TopicList';
import CommentList from './CommentList';
import CreateTopicForm from './CreateTopicForm'; // Ajouté
import ForumService from '../services/ForumService';
import '../styles/HomePage.css';

const HomePage = ({
  selectedCategoryId,
  selectedTopicId,
  currentUser,
  setSelectedCategoryId,
  setSelectedTopicId
}) => {
  const [forumData, setForumData] = useState({
    categories: [],
    topics: [],
    comments: []
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categories = await ForumService.getCategories();
        setForumData(prev => ({ ...prev, categories }));
        
        if (selectedCategoryId) {
          const topics = await ForumService.getTopicsByCategory(selectedCategoryId);
          setForumData(prev => ({ ...prev, topics }));
        }
        
        if (selectedTopicId) {
          const { topic, comments } = await ForumService.getTopicWithComments(selectedTopicId);
          setForumData(prev => ({ ...prev, comments }));
        }
      } catch (error) {
        console.error('Error fetching forum data:', error);
      }
    };
    
    fetchData();
  }, [selectedCategoryId, selectedTopicId]);

  const handleAddComment = async (topicId, content) => {
    try {
      const newComment = await ForumService.addComment(topicId, content);
      setForumData(prev => ({
        ...prev,
        comments: [...prev.comments, newComment]
      }));
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  const handleDeleteComment = async (commentId) => {
    try {
      await ForumService.deleteComment(commentId);
      setForumData(prev => ({
        ...prev,
        comments: prev.comments.filter(comment => comment._id !== commentId)
      }));
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };

  const handleTopicCreated = (newTopic) => {
    console.log("New topic created:", newTopic);
    setForumData(prev => ({
      ...prev,
      topics: [newTopic, ...prev.topics]
    }));
  };

  return (
    <div className="home-page">
      <div className="forum-container">
        <div className="sidebar">
          <CategoryList 
            categories={forumData.categories}
            setSelectedCategoryId={setSelectedCategoryId}
          />
        </div>
        
        <div className="main-forum">
          {/* Ajout du formulaire de création */}
          {!selectedTopicId && (
            <CreateTopicForm 
              categories={forumData.categories}
              currentUser={currentUser}
              onTopicCreated={handleTopicCreated}
            />
          )}

          {selectedTopicId ? (
            <CommentList 
              topicId={selectedTopicId}
              comments={forumData.comments}
              currentUser={currentUser}
              onAddComment={handleAddComment}
              onDeleteComment={handleDeleteComment}
            />
          ) : (
            <TopicList 
              topics={forumData.topics}
              setSelectedTopicId={setSelectedTopicId}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;