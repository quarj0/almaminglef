import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserProfile = ({ userId }) => {
  const [profileViews, setProfileViews] = useState([]);
  const [viewedProfiles, setViewedProfiles] = useState([]);

  useEffect(() => {
    const fetchProfileViews = async () => {
      try {
        const response = await axios.get(`/api/profile-views/${userId}/`);
        setProfileViews(response.data.viewed_by);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchViewedProfiles = async () => {
      try {
        const response = await axios.get(`/api/viewed-profiles/${userId}/`);
        setViewedProfiles(response.data.profiles_viewed);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProfileViews();
    fetchViewedProfiles();
  }, [userId]);

  return (
    <div>
      <h2 className="profile-views-heading">Profiles that Viewed Me</h2>
      <ul className="profile-views-list">
        {profileViews.map((profile) => (
          <li key={profile.id} className="profile-views-item">
            <Link to={`/profile/${profile.id}`} className="profile-link">
              <img src={profile.profilePicture} alt="Profile" className="profile-picture" />
              <p className="profile-username">{profile.username}</p>
              <p className="profile-university">{profile.university}</p>
              <p className="profile-age">{profile.age}</p>
            </Link>
          </li>
        ))}
      </ul>

      <h2 className="viewed-profiles-heading">Profiles I Viewed</h2>
      <ul className="viewed-profiles-list">
        {viewedProfiles.map((profile) => (
          <li key={profile.id} className="viewed-profiles-item">
            <Link to={`/profile/${profile.id}`} className="profile-link">
              <img src={profile.profilePicture} alt="Profile" className="profile-picture" />
              <p className="profile-username">{profile.username}</p>
              <p className="profile-university">{profile.university}</p>
              <p className="profile-age">{profile.age}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;
