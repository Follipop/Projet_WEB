const API_URL = 'http://localhost:5000/api/users';
const token = localStorage.getItem('token');

const UserService = {
  getUserProfile: async (userId) => {
    const response = await fetch(`${API_URL}/${userId}`, {
      headers: { 
        'Content-Type': 'application/json',
        'x-auth-token': token
      }
    });
    
    if (!response.ok) throw new Error('Failed to fetch user profile');
    return await response.json();
  },

  updateProfile: async (userId, updatedData) => {
    const response = await fetch(`${API_URL}/${userId}`, {
      method: 'PUT',
      headers: { 
        'Content-Type': 'application/json',
        'x-auth-token': token
      },
      body: JSON.stringify(updatedData)
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.msg || 'Failed to update profile');
    }
    
    const data = await response.json();
    localStorage.setItem('user', JSON.stringify(data));
    return data;
  }
};

export default UserService;