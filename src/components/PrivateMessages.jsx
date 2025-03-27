import React, { useState } from 'react';

const PrivateMessages = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Alice', content: 'Salut!' },
    { id: 2, sender: 'Bob', content: 'Bonjour!' }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { id: messages.length + 1, sender: 'Vous', content: newMessage }]);
    setNewMessage('');
  };

  return (
    <div>
      <h2>Messages Privés</h2>
      <ul>
        {messages.map((msg) => (
          <li key={msg.id}>
            <strong>{msg.sender}:</strong> {msg.content}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSend}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default PrivateMessages;