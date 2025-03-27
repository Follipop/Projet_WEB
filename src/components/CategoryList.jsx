import React from "react";

const CategoryList = ({ forumData, setSelectedCategoryId }) => {
  return (
    <div>
      <h2>Catégories</h2>
      <ul>
        {forumData.categories.map((category) => (
          <li key={category.id} onClick={() => setSelectedCategoryId(category.id)}>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;