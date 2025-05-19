// client/src/components/CategoryList.js
import React from 'react';
//import './styles/CategoryList.css';

const CategoryList = ({ categories, setSelectedCategoryId }) => {
  return (
    <div className="category-list">
      <h3>Categories</h3>
      <ul>
        {categories.map(category => (
          <li key={category._id} onClick={() => setSelectedCategoryId(category._id)}>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;