// client/src/components/PrivateMessagesPage.js
import React, { useState, useEffect } from 'react';
import MessageService from '../services/MessageService';
//import './styles/PrivateMessagesPage.css';

const PrivateMessagesPage = ({ currentUser }) => {
  const [conversations, setConversations] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const fetchConversations = async () => {
      try {
        const data = await MessageService.getConversations(currentUser._id);
        setConversations(data);
      } catch (error) {
        console.error('Error fetching conversations:', error);
      }
    };
    
    fetchConversations();
  }, [currentUser]);

  const handleSelectConversation = async (userId) => {
    try {
      const conversationMessages = await MessageService.getMessages(userId);
      setSelectedConversation(userId);
      setMessages(conversationMessages);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const handleSendMessage = async () => {
    if (!newMessage.trim() || !selectedConversation) return;
    
    try {
      const sentMessage = await MessageService.sendMessage(
        selectedConversation,
        newMessage
      );
      setMessages(prev => [...prev, sentMessage]);
      setNewMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="private-messages-page">
      <h2>Private Messages</h2>
      
      <div className="messages-container">
        <div className="conversations-list">
          <h3>Conversations</h3>
          {conversations.length === 0 ? (
            <p>No conversations yet.</p>
          ) : (
            <ul>
              {conversations.map(conv => (
                <li 
                  key={conv._id} 
                  onClick={() => handleSelectConversation(conv._id)}
                  className={selectedConversation === conv._id ? 'active' : ''}
                >
                  <img 
                    src={conv.user.profilePicture || '/default-avatar.png'} 
                    alt={conv.user.username}
                    className="conversation-avatar"
                  />
                  <span className="conversation-name">{conv.user.username}</span>
                  {conv.unreadCount > 0 && (
                    <span className="unread-count">{conv.unreadCount}</span>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
        
        <div className="messages-view">
          {selectedConversation ? (
            <>
              <div className="messages-list">
                {messages.map(msg => (
                  <div 
                    key={msg._id} 
                    className={`message ${msg.senderId._id === currentUser._id ? 'sent' : 'received'}`}
                  >
                    <img 
                      src={msg.senderId.profilePicture || '/default-avatar.png'} 
                      alt={msg.senderId.username}
                      className="message-avatar"
                    />
                    <div className="message-content">
                      <div className="message-header">
                        <span className="message-sender">{msg.senderId.username}</span>
                        <span className="message-time">
                          {new Date(msg.createdAt).toLocaleString()}
                        </span>
                      </div>
                      <div className="message-text">{msg.content}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="message-input">
                <textarea
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message here..."
                />
                <button onClick={handleSendMessage}>Send</button>
              </div>
            </>
          ) : (
            <div className="no-conversation">
              <p>Select a conversation to view messages</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PrivateMessagesPage;