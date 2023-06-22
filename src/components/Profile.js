import React, { useState, useEffect } from "react";
import axios from "axios";
import '../styles/ProfilePage.css';

const Profile = ({ userId }) => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    if (userId){
    axios.get(`http://127.0.0.1:8000/almamingle/v1/users/${userId}`)
      .then(response => {
        setProfileData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    }
  }, [userId]);

  if (!profileData) {
    return (
      <div className="profile-page-container">
      Loading...
    </div>
    );
  }

  const profilePictureSrc = profileData.profilePictureUrl || "/default-profile-picture.png";
  const height = profileData.height || "N/A";
  const weight = profileData.weight || "N/A";
  const bodyType = profileData.bodyType || "N/A";
  const program = profileData.program || "N/A";
  const universityName = profileData.universityName || "N/A";
  const level = profileData.level || "N/A";
  const livingStatus = profileData.livingStatus || "N/A";
  const bio = profileData.bio || "N/A";
  const galleryImages = profileData.galleryImages || [];

  return (
    <div className="profile-page-container">
      <div className="profile-card">
        <img src={profilePictureSrc} alt="Profile" />
        <h1>{profileData.username}</h1>
        <h2>{universityName}</h2>
        <h3>{profileData.age} , {program}</h3>
      </div>
      <div className="profile-card">
        <h2>Basic Info</h2>
        <ul>
          <li>Height: {height}</li>
          <li>Weight: {weight}</li>
          <li>Body Type: {bodyType}</li>
          <li>Program: {program}</li>
          <li>University: {universityName}</li>
          <li>Level: {level}</li>
          <li>Living Status: {livingStatus}</li>
        </ul>
      </div>
      <div className="profile-card">
        <h2>About</h2>
        <p>{bio}</p>
      </div>
      <div className="profile-card">
        <h2>Gallery</h2>
        <ul>
          {galleryImages.map(imageUrl => (
            <li key={imageUrl}>
              <img src={imageUrl} alt="Gallery" />
            </li>
          ))}
        </ul>
      </div>
      <div className="profile-card">
        <h2>Passion</h2>
        <p>{profileData.passion || "N/A"}</p>
      </div>
    </div>
  );
};

export default Profile;