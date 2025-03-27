import React from "react";

const TopicList = ({ categoryId, forumData, setSelectedTopicId }) => {
  const category = forumData.categories.find((cat) => cat.id === categoryId);

  if (!category) return <p>Aucune catégorie trouvée.</p>;

  return (
    <div>
      <h2>Sujets de {category.name}</h2>
      <ul>
        {category.topics.map((topic) => (
          <li key={topic.id} onClick={() => setSelectedTopicId(topic.id)}>
            {topic.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopicList;