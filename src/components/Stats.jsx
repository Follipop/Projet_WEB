import React from 'react';

const Stats = () => {
  const stats = {
    onlineUsers: 123,
    totalTopics: 456,
    totalComments: 789,
    totalMembers: 1000
  };

  return (
    <div>
      <h2>Statistiques</h2>
      <p>Utilisateurs en ligne: {stats.onlineUsers}</p>
      <p>Sujets par catégorie: {stats.totalTopics}</p>
      <p>Messages sous un sujet: {stats.totalComments}</p>
      <p>Membres enregistrés: {stats.totalMembers}</p>
    </div>
  );
};

export default Stats;