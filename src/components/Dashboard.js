import React, { useState } from "react";
import Profile from "./Profile";
import Chat from "./Chat";
import Wallet from "./Wallet";
import Search from "./Search";
import Views from "./Views";
import Settings from "./Settings";
import Favorite from "./Favorite";

import "../styles/Dashboard.css";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`dashboard ${isOpen ? "open" : ""}`}>
      <div id="dashboard">
        <div id="menu-items">
        <div className="hamburger" onClick={toggleSidebar}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="dashboard-section profile-section fixed">
          <Profile />
        </div>
        <div className="dashboard-section chat-section">
          <Chat />
        </div>
        <div className="dashboard-section look-through-section">
          <Search />
        </div>
        <div className="dashboard-section views-section">
          <Views />
        </div>
        <div className="dashboard-section favorite-section">
          <Favorite />
        </div>
        <div className="dashboard-section wallet-section">
          <Wallet />
        </div>
        <div className="dashboard-section settings-section fixed">
          <Settings />
        </div>
      </div>
        </div>
    </div>
  );
};

export default Dashboard;
