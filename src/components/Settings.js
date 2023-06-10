import React, { useState } from "react";
import "../styles/Settings.css";

const Settings = () => {
  const [soundNotifications, setSoundNotifications] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState({
    all: false,
    newChat: false,
    newProfileView: false,
    receivedLike: false,
    favoritesOnline: false,
    profileUpdates: false,
    favoritedMe: false,
    newCoins: false,
    newMatch: false,
    seasonalOffers: false,
  });
  const [pushNotifications, setPushNotifications] = useState({
    all: false,
    newMessages: false,
    viewedMe: false,
    flirtedWithMe: false,
    favoritedMe: false,
    newCoinsAdded: false,
    newMatch: false,
    seasonalOffers: false,
  });

  const handleSoundNotificationsToggle = () => {
    setSoundNotifications((prevState) => !prevState);
  };

  const handleEmailNotificationsToggle = (option) => {
    setEmailNotifications((prevState) => ({
      ...prevState,
      [option]: !prevState[option],
    }));
  };

  const handlePushNotificationsToggle = (option) => {
    setPushNotifications((prevState) => ({
      ...prevState,
      [option]: !prevState[option],
    }));
  };

  const handleEmailAllToggle = () => {
    setEmailNotifications((prevState) => {
      const newState = { ...prevState };
      const allValue = !prevState.all;
      Object.keys(newState).forEach((key) => {
        newState[key] = allValue;
      });
      return newState;
    });
  };

  const handlePushAllToggle = () => {
    setPushNotifications((prevState) => {
      const newState = { ...prevState };
      const allValue = !prevState.all;
      Object.keys(newState).forEach((key) => {
        newState[key] = allValue;
      });
      return newState;
    });
  };

  const handleDeleteAccount = () => {
    // Implement the functionality to delete the user account
    // Call the backend API and handle the response accordingly
    // You can display a confirmation dialog before deleting the account
    console.log("Deleting account...");
  };

  const handleChangePassword = () => {
    // Implement the functionality to change the user's password
    // Call the backend API and handle the response accordingly
    // You can display a form to input the current and new passwords
    console.log("Changing password...");
  };

  return (
    <div className="settings">
      <div className="section">
        <h2 className="account-header">Account</h2>
        <div className="toggle-switch-container">
          <label className="toggle-switch-label">
            Sound in Messages
            <label className="toggle-switch">
              <input
                type="checkbox"
                className="toggle-switch-input"
                checked={soundNotifications}
                onChange={handleSoundNotificationsToggle}
              />
              <span className="toggle-switch-slider"></span>
            </label>
          </label>
        </div>
        <div className="settings-buttons">
          <button className="settings-button" onClick={handleDeleteAccount}>
            Delete Account
          </button>
          <button className="settings-button" onClick={handleChangePassword}>
            Change Password
          </button>
        </div>
      </div>
      <div className="section">
        <div className="settings-block notifications-block">
          <div className="email-notification-header">Email Notifications</div>
          <div className="toggle-switch-container">
            <label className="toggle-switch-label">
              All
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  className="toggle-switch-input"
                  checked={emailNotifications.all}
                  onChange={handleEmailAllToggle}
                />
                <span className="toggle-switch-slider"></span>
              </label>
            </label>
          </div>
          <div className="toggle-switch-container">
            <label className="toggle-switch-label">
              New Chat
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  className="toggle-switch-input"
                  checked={emailNotifications.newChat}
                  onChange={() => handleEmailNotificationsToggle("newChat")}
                />
                <span className="toggle-switch-slider"></span>
              </label>
            </label>
          </div>
          <div className="toggle-switch-container">
            <label className="toggle-switch-label">
              New Profile View
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  className="toggle-switch-input"
                  checked={emailNotifications.newProfileView}
                  onChange={() =>
                    handleEmailNotificationsToggle("newProfileView")
                  }
                />
                <span className="toggle-switch-slider"></span>
              </label>
            </label>
          </div>
          <div className="toggle-switch-container">
            <label className="toggle-switch-label">
              Received Like
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  className="toggle-switch-input"
                  checked={emailNotifications.receivedLike}
                  onChange={() =>
                    handleEmailNotificationsToggle("receivedLike")
                  }
                />
                <span className="toggle-switch-slider"></span>
              </label>
            </label>
          </div>
          <div className="toggle-switch-container">
            <label className="toggle-switch-label">
              Favorites Online
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  className="toggle-switch-input"
                  checked={emailNotifications.favoritesOnline}
                  onChange={() =>
                    handleEmailNotificationsToggle("favoritesOnline")
                  }
                />
                <span className="toggle-switch-slider"></span>
              </label>
            </label>
          </div>
          <div className="toggle-switch-container">
            <label className="toggle-switch-label">
              Profile Update
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  className="toggle-switch-input"
                  checked={emailNotifications.profileUpdates}
                  onChange={() =>
                    handleEmailNotificationsToggle("profileUpdates")
                  }
                />
                <span className="toggle-switch-slider"></span>
              </label>
            </label>
          </div>
          <div className="toggle-switch-container">
            <label className="toggle-switch-label">
              Favorited Me
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  className="toggle-switch-input"
                  checked={emailNotifications.favoritedMe}
                  onChange={() => handleEmailNotificationsToggle("favoritedMe")}
                />
                <span className="toggle-switch-slider"></span>
              </label>
            </label>
          </div>
          <div className="toggle-switch-container">
            <label className="toggle-switch-label">
              New Coins
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  className="toggle-switch-input"
                  checked={emailNotifications.newCoins}
                  onChange={() => handleEmailNotificationsToggle("newCoins")}
                />
                <span className="toggle-switch-slider"></span>
              </label>
            </label>
          </div>
          <div className="toggle-switch-container">
            <label className="toggle-switch-label">
              New Match
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  className="toggle-switch-input"
                  checked={emailNotifications.newMatch}
                  onChange={() => handleEmailNotificationsToggle("newMatch")}
                />
                <span className="toggle-switch-slider"></span>
              </label>
            </label>
          </div>
          <div className="toggle-switch-container">
            <label className="toggle-switch-label">
              Seasonal Offers
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  className="toggle-switch-input"
                  checked={emailNotifications.seasonalOffers}
                  onChange={() =>
                    handleEmailNotificationsToggle("seasonalOffers")
                  }
                />
                <span className="toggle-switch-slider"></span>
              </label>
            </label>
          </div>
        </div>
        <div className="settings-block notifications-block">

        <div className="email-notification-header">Push Notifications</div>
        <div className="toggle-switch-container">
          <label className="toggle-switch-label">
            All
            <label className="toggle-switch">
              <input
                type="checkbox"
                className="toggle-switch-input"
                checked={pushNotifications.all}
                onChange={handlePushAllToggle}
              />
              <span className="toggle-switch-slider"></span>
            </label>
          </label>
        </div>
        <div className="toggle-switch-container">
          <label className="toggle-switch-label">
            New Messages
            <label className="toggle-switch">
              <input
                type="checkbox"
                className="toggle-switch-input"
                checked={pushNotifications.newMessages}
                onChange={() => handlePushNotificationsToggle("newMessages")}
              />
              <span className="toggle-switch-slider"></span>
            </label>
          </label>
        </div>
        <div className="toggle-switch-container">
          <label className="toggle-switch-label">
            Viewed Me
            <label className="toggle-switch">
              <input
                type="checkbox"
                className="toggle-switch-input"
                checked={pushNotifications.viewedMe}
                onChange={() => handlePushNotificationsToggle("viewedMe")}
              />
              <span className="toggle-switch-slider"></span>
            </label>
          </label>
        </div>
        <div className="toggle-switch-container">
          <label className="toggle-switch-label">
            Flirted With Me
            <label className="toggle-switch">
              <input
                type="checkbox"
                className="toggle-switch-input"
                checked={pushNotifications.flirtedWithMe}
                onChange={() => handlePushNotificationsToggle("flirtedWithMe")}
              />
              <span className="toggle-switch-slider"></span>
            </label>
          </label>
        </div>
        <div className="toggle-switch-container">
          <label className="toggle-switch-label">
            Favorited Me
            <label className="toggle-switch">
              <input
                type="checkbox"
                className="toggle-switch-input"
                checked={pushNotifications.favoritedMe}
                onChange={() => handlePushNotificationsToggle("favoritedMe")}
              />
              <span className="toggle-switch-slider"></span>
            </label>
          </label>
        </div>
        <div className="toggle-switch-container">
          <label className="toggle-switch-label">
            New Coins Added
            <label className="toggle-switch">
              <input
                type="checkbox"
                className="toggle-switch-input"
                checked={pushNotifications.newCoinsAdded}
                onChange={() => handlePushNotificationsToggle("newCoinsAdded")}
              />
              <span className="toggle-switch-slider"></span>
            </label>
          </label>
        </div>
        <div className="toggle-switch-container">
          <label className="toggle-switch-label">
            New Match
            <label className="toggle-switch">
              <input
                type="checkbox"
                className="toggle-switch-input"
                checked={pushNotifications.newMatch}
                onChange={() => handlePushNotificationsToggle("newMatch")}
              />
              <span className="toggle-switch-slider"></span>
            </label>
          </label>
        </div>
        <div className="toggle-switch-container">
          <label className="toggle-switch-label">
            Seasonal Offers
            <label className="toggle-switch">
              <input
                type="checkbox"
                className="toggle-switch-input"
                checked={pushNotifications.seasonalOffers}
                onChange={() => handlePushNotificationsToggle("seasonalOffers")}
              />
              <span className="toggle-switch-slider"></span>
            </label>
          </label>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
