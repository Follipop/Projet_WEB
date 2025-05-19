// client/src/services/MessageService.js
const API_URL = 'http://localhost:5173/api/messages';
const token = localStorage.getItem('token');

const MessageService = {
  getConversations: async (userId) => {
    const response = await fetch(`${API_URL}`, {
      headers: { 
        'Content-Type': 'application/json',
        'x-auth-token': token
      }
    });
    
    if (!response.ok) throw new Error('Failed to fetch conversations');
    return await response.json();
  },

  getMessages: async (userId) => {
    const response = await fetch(`${API_URL}/${userId}`, {
      headers: { 
        'Content-Type': 'application/json',
        'x-auth-token': token
      }
    });
    
    if (!response.ok) throw new Error('Failed to fetch messages');
    return await response.json();
  },

  sendMessage: async (receiverId, content) => {
    const response = await fetch(`${API_URL}`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'x-auth-token': token
      },
      body: JSON.stringify({ receiverId, content })
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.msg || 'Failed to send message');
    }
    
    return await response.json();
  }
};

export default MessageService;