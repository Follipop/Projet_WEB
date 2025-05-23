import React, { useState, useEffect } from 'react';
import ForumService from '../services/ForumService';
import '../styles/Stats.css';

const Stats = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    onlineUsers: 0,
    totalTopics: 0,
    totalComments: 0
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await ForumService.getForumStats();
        setStats(data);
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };
    
    fetchStats();
    
    const interval = setInterval(fetchStats, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="stats">
      <h3>Forum Statistics</h3>
      <div className="stats-grid">
        <div className="stat-item">
          <span className="stat-value">{stats.totalUsers}</span>
          <span className="stat-label"> Total Users</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">{stats.onlineUsers}</span>
          <span className="stat-label"> Online Now</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">{stats.totalTopics}</span>
          <span className="stat-label"> Topics</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">{stats.totalComments}</span>
          <span className="stat-label"> Comments</span>
        </div>
      </div>
    </div>
  );
};

export default Stats;