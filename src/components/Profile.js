import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    // Fetch user profile data from the backend
    const fetchProfileData = async () => {
      try {
        const response = await axios.get('/api/profile'); // Replace '/api/profile' with your actual API endpoint
        setProfileData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProfileData();
  }, []);

  const renderGallery = () => {
    if (!profileData.gallery || profileData.gallery.length === 0) {
      return <p>No gallery images</p>;
    }

    return (
      <div className="gallery">
        {profileData.gallery.map((image) => (
          <img
            key={image.id}
            src={image.image_url}
            alt="Gallery"
            className="gallery-image"
          />
        ))}
      </div>
    );
  };

  if (!profileData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-section">
      <div className="profile-header">
        <img src={profileData.profile_picture} alt="Profile img" className="profile-picture" />
        <div className="profile-info">
          <h2>{profileData.user.username}</h2>
          <p>{`${profileData.location}, ${profileData.dob}`}</p>
        </div>
      </div>
      <div className="profile-details">
        <div className="profile-subsection">
          <h3>About</h3>
          <p>{profileData.about}</p>
        </div>
        <div className="profile-subsection">
          <h3>Basics</h3>
          <p>{profileData.basics.name}</p>
        </div>
        <div className="profile-subsection">
          <h3>Passion</h3>
          <p>{profileData.passion.name}</p>
        </div>
        <div className="profile-subsection">
          <h3>Gallery</h3>
          {renderGallery()}
        </div>
      </div>
    </div>
  );
};

export default Profile;
