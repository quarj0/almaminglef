import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faSearch,
  faUserCircle,
  faHeartCirclePlus,
  faQuestion,
  faCoins,
  faComments,
  faEdit,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Chat from "../pages/Chat";
import Favorites from "../pages/Favorite";
import Profile from "../pages/Profile";
import Search from "./Search";
import Settings from "./Settings";

import "../styles/Sidebar.css";

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const [userId, setUserId] = useState(null);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu); // toggle the state variable when the hamburger icon is clicked
  };

  return (
    <div className={`sidebar ${showMenu ? "show-menu" : ""}`}>
      <div className="sidebar-header">
        <button className="menu-button" onClick={handleToggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <h3 className="logo">Dashboard</h3>
      </div>
      <ul className={showMenu ? "show-menu" : ""}>
        <li
          className={activeSection === "profile" ? "active" : ""}
          onClick={() => {
            setActiveSection("profile");
            setUserId(userId);
          }}
        >
          <Link to={`/session/profile/`}> {/*/session/profile/${userId} is how it's supposed to be, but later. */}
            <span className="icon">
              <FontAwesomeIcon className="faUser" icon={faUserCircle} />
            </span>
            {activeSection === "profile" && (
              <span className="name">Profile</span>
            )}
          </Link>
        </li>
        <li
          className={activeSection === "chat" ? "active" : ""}
          onClick={() => setActiveSection("chat")}
        >
          <Link to="session/chat/list">
            <span className="icon">
              <FontAwesomeIcon className="faMessage" icon={faComments} />
            </span>
            {activeSection === "chat" && <span className="name">Chat</span>}
          </Link>
        </li>

        <li
          className={activeSection === "favorites" ? "active" : ""}
          onClick={() => setActiveSection("favorites")}
        >
          <Link to="/session/favorites">
            <span className="icon">
              <FontAwesomeIcon
                className="faHeartCirclePlus"
                icon={faHeartCirclePlus}
              />
            </span>
            {activeSection === "favorites" && (
              <span className="name">Favorites</span>
            )}
          </Link>
        </li>

        <li
          className={activeSection === "search" ? "active" : ""}
          onClick={() => setActiveSection("search")}
        >
          <Link to="/session/search">
            <span className="icon">
              <FontAwesomeIcon className="faSearch" icon={faSearch} />
            </span>
            {activeSection === "search" && <span className="name">Search</span>}
          </Link>
        </li>

        <li
          className={activeSection === "wallet" ? "active" : ""}
          onClick={() => setActiveSection("wallet")}
        >
          <Link to="/session/wallet">
            <span className="icon">
              <FontAwesomeIcon className="faWallet" icon={faCoins} />
            </span>
            {activeSection === "wallet" && <span className="name">Wallet</span>}
          </Link>
        </li>

        <li
          className={activeSection === "settings" ? "active" : ""}
          onClick={() => setActiveSection("settings")}
        >
          <Link to="/session/settings">
            <span className="icon">
              <FontAwesomeIcon className="faEdit" icon={faEdit} />
            </span>
            {activeSection === "settings" && (
              <span className="name">Settings</span>
            )}
          </Link>
        </li>

        <li
          className={activeSection === "help" ? "active" : ""}
          onClick={() => setActiveSection("help")}
        >
          <Link to="#help">
            <span className="icon">
              <FontAwesomeIcon className="faQuestion" icon={faQuestion} />
            </span>
            {activeSection === "help" && <span className="name">Help</span>}
          </Link>
        </li>

        <li
          className={activeSection === "logout" ? "active" : ""}
          onClick={() => setActiveSection("logout")}
        >
          <Link to="/login">
            <span className="icon">
              <FontAwesomeIcon className="faSignoutAlt" icon={faSignOutAlt} />
            </span>
            {activeSection === "logout" && (
              <span className="name">Log out</span>
            )}
          </Link>
        </li>
      </ul>

      <div className="content-area">
        {activeSection === "chat" && (
          <div className="chat-area">
            <h2>Chat</h2>
            <Chat />
          </div>
        )}
        {activeSection === "favorites" && (
          <div className="favorites-area">
            <h2>Favorites</h2>
            <Favorites />
          </div>
        )}
        {activeSection === "profile" && (
          <div className="profile-area">
            <h2>Profile</h2>
            <Profile />
          </div>
        )}
        {activeSection === "search" && (
          <div className="search-area">
            <h2>Search</h2>
            <Search />
          </div>
        )}

        {activeSection === "settings" && (
          <div className="settings-area">
            <h2>Settings</h2>
            <Settings />
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;

