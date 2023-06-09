import React from 'react';
import Profile from './Profile';
import Chat from './Chat';
import Wallet from './Wallet';
import LookThrough from './LookThrough';
import Help from './Help';
import Views from './Views';
import Settings from './Settings';
import Favorite from './Favorite';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-section profile-section">
        <Profile />
      </div>
      <div className="dashboard-section chat-section">
        <Chat />
      </div>
      <div className="dashboard-section wallet-section">
        <Wallet />
      </div>
      <div className="dashboard-section look-through-section">
        <LookThrough />
      </div>
      <div className="dashboard-section help-section">
        <Help />
      </div>
      <div className="dashboard-section views-section">
        <Views />
      </div>
      <div className="dashboard-section settings-section">
        <Settings />
      </div>
      <div className="dashboard-section favorite-section">
        <Favorite />
      </div>
    </div>
  );
};

export default Dashboard;
