import React, { useState } from 'react';

const PrivateMessages = ({ currentUser }) => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'user2', text: 'Hi there!', timestamp: '2023-05-01' },
    { id: 2, sender: currentUser.id, text: 'Hello! How are you?', timestamp: '2023-05-02' },
    { id: 3, sender: 'user2', text: 'I\'m good, thanks!', timestamp: '2023-05-03' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        sender: currentUser.id,
        text: newMessage,
        timestamp: new Date().toISOString().split('T')[0],
      };
      setMessages([...messages, message]);
      setNewMessage('');
    }
  };

  return (
    <div className="private-messages">
      <div className="conversation">
        {messages.map(msg => (
          <div 
            key={msg.id} 
            className={`message ${msg.sender === currentUser.id ? 'sent' : 'received'}`}
          >
            <p>{msg.text}</p>
            <span className="timestamp">{msg.timestamp}</span>
          </div>
        ))}
      </div>
      
      <form onSubmit={handleSend} className="message-form">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default PrivateMessages;