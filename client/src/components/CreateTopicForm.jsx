import React, { useState } from 'react';
import ForumService from '../services/ForumService';
import '../styles/CreateTopicForm.css';

const CreateTopicForm = ({ categories, currentUser, onTopicCreated }) => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    categoryId: ''
  });

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    console.log("Submitting:", formData.title, formData.content, formData.categoryId);
    const newTopic = await ForumService.createTopic(
      formData.title,
      formData.content,
      formData.categoryId
    );
    onTopicCreated(newTopic);
    setFormData({ title: '', content: '', categoryId: '' });
  } catch (error) {
    console.error('Error creating topic:', error);
  }
  console.log("Form submitted");
};


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (!currentUser) {
    return <p>Connectez-vous pour créer un sujet.</p>;
  }

  return (
    <div className="create-topic-form">
      <h3>Créer un nouveau sujet</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Catégorie</label>
          <select
            name="categoryId"
            value={formData.categoryId}
            onChange={handleChange}
            required
          >
            <option value="">Sélectionnez une catégorie</option>
            {categories.map(category => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Titre du sujet</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Contenu</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Publier le sujet</button>
      </form>
    </div>
  );
};

export default CreateTopicForm;