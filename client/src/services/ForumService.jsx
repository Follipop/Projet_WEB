// client/src/services/ForumService.js
const API_URL = 'http://localhost:5000/api/forum';
const token = localStorage.getItem('token');

const ForumService = {
  getCategories: async () => {
    const response = await fetch(`${API_URL}/categories`);
    if (!response.ok) throw new Error('Failed to fetch categories');
    return await response.json();
  },

  getTopicsByCategory: async (categoryId) => {
    const response = await fetch(`${API_URL}/topics/${categoryId}`);
    if (!response.ok) throw new Error('Failed to fetch topics');
    return await response.json();
  },

  getTopicWithComments: async (topicId) => {
    const response = await fetch(`${API_URL}/topic/${topicId}`);
    if (!response.ok) throw new Error('Failed to fetch topic');
    return await response.json();
  },

  createTopic: async (title, content, categoryId) => {
    console.log("API CALL → createTopic", { title, content, categoryId });
    const response = await fetch(`${API_URL}/topics`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'x-auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({ title, content, categoryId })
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.msg || 'Failed to create topic');
    }
    
    return await response.json();
  },

  addComment: async (topicId, content) => {
    const response = await fetch(`${API_URL}/comments`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'x-auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({ topicId, content })
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.msg || 'Failed to add comment');
    }
    
    return await response.json();
  },

  deleteComment: async (commentId) => {
    const response = await fetch(`${API_URL}/comments/${commentId}`, {
      method: 'DELETE',
      headers: { 
        'Content-Type': 'application/json',
        'x-auth-token': localStorage.getItem('token')
      }
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.msg || 'Failed to delete comment');
    }
    
    return await response.json();
  },

  getForumStats: async () => {
    const response = await fetch(`${API_URL}/stats`);
    if (!response.ok) throw new Error('Failed to fetch stats');
    return await response.json();
  }
};

export default ForumService;