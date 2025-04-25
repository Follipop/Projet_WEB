// src/pages/HomePage.jsx
import React from "react";
import Stats from "../components/Stats";
import CategoryList from "../components/CategoryList";
import TopicList from "../components/TopicList";
import CommentList from "../components/CommentList";

const HomePage = ({
  forumData,
  currentUser,
  selectedCategoryId,
  setSelectedCategoryId,
  selectedTopicId,
  setSelectedTopicId,
  onAddComment,
  onDeleteComment,
}) => {
  return (
    <div>
      {!selectedCategoryId && (
        <CategoryList
          forumData={forumData}
          setSelectedCategoryId={setSelectedCategoryId}
        />
      )}
      {selectedCategoryId && !selectedTopicId && (
        <TopicList
          categoryId={selectedCategoryId}
          forumData={forumData}
          setSelectedTopicId={setSelectedTopicId}
        />
      )}
      {selectedTopicId && (
        <CommentList
          topicId={selectedTopicId}
          forumData={forumData}
          currentUser={currentUser}
          onAddComment={onAddComment}
          onDeleteComment={onDeleteComment}
        />
      )}
      <hr />
      <Stats />
    </div>
  );
};

export default HomePage;