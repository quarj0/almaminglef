import React, { useState } from 'react';

const Settings = () => {
  const [soundNotifications, setSoundNotifications] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState({
    all: true,
    newChat: true,
    newProfileView: true,
    receivedLike: true,
    favoritesOnline: true,
    profileUpdates: true,
    favoritedMe: true,
    newCoins: true,
    newMatch: true,
    seasonalOffers: true,
  });
  const [pushNotifications, setPushNotifications] = useState({
    all: true,
    newMessages: true,
    viewedMe: true,
    flirtedWithMe: true,
    favoritedMe: true,
    newCoinsAdded: true,
    newMatch: true,
    seasonalOffers: true,
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

  const handleDeleteAccount = () => {
    // Implement the functionality to delete the user account
    // Call the backend API and handle the response accordingly
    // You can display a confirmation dialog before deleting the account
    console.log('Deleting account...');
  };

  const handleChangePassword = () => {
    // Implement the functionality to change the user's password
    // Call the backend API and handle the response accordingly
    // You can display a form to input the current and new passwords
    console.log('Changing password...');
  };

  return (
    <div className="settings">
      <div className="section">
        <h2>Account</h2>
        <div className="toggle-switch-container">
          <label className="toggle-switch-label">
            Sound in Messages:
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
        <h2>Notifications</h2>
        <h3>Email Notifications</h3>
        <div className="toggle-switch-container">
          <label className="toggle-switch-label">
            All:
            <label className="toggle-switch">
              <input
                type="checkbox"
                className="toggle-switch-input"
                checked={emailNotifications.all}
                onChange={() => handleEmailNotificationsToggle('all')}
              />
              <span className="toggle-switch-slider"></span>
            </label>
          </label>
        </div>
        <div className="toggle-switch-container">
          <label className="toggle-switch-label">
            New Chat:
            <label className="toggle-switch">
              <input
                type="checkbox"
                className="toggle-switch-input"
                checked={emailNotifications.newChat}
                onChange={() => handleEmailNotificationsToggle('newChat')}
              />
              <span className="toggle-switch-slider"></span>
            </label>
          </label>
        </div>
        {/* Add other email notification options */}
        <h3>Push Notifications</h3>
        <div className="toggle-switch-container">
          <label className="toggle-switch-label">
            All:
            <label className="toggle-switch">
              <input
                type="checkbox"
                className="toggle-switch-input"
                checked={pushNotifications.all}
                onChange={() => handlePushNotificationsToggle('all')}
              />
              <span className="toggle-switch-slider"></span>
            </label>
          </label>
        </div>
        <div className="toggle-switch-container">
          <label className="toggle-switch-label">
            New Messages:
            <label className="toggle-switch">
              <input
                type="checkbox"
                className="toggle-switch-input"
                checked={pushNotifications.newMessages}
                onChange={() => handlePushNotificationsToggle('newMessages')}
              />
              <span className="toggle-switch-slider"></span>
            </label>
          </label>
        </div>
        {/* Add other push notification options */}
      </div>
    </div>
  );
};

export default Settings;
