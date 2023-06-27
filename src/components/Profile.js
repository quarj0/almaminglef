import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCamera } from "react-icons/fa";

import Passion from "./passionModal";
import "../styles/ProfilePage.css";
import profile from "../assets/user-profile.png";

const Profile = ({ userId }) => {
  const [profileData, setProfileData] = useState(null);
  const [, setSelectedFile] = useState(null);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

 

  useEffect(() => {
    if (userId) {
      axios
        .get(`api/users/${userId}`)
        .then((response) => {
          setProfileData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [userId]);

  if (!profileData) {
    // Render a dummy profile with placeholder data
    return (
      <>
        <div className="container">
        <div className="cols">
          <div className="card mb-3 profile-card">
            <div className="card-body">
              <div className="profile-view">
                <div className="profile-container">
                  <div className="profile-image-container">
                    <img
                      src={profile}
                      className="profile-image"
                      alt="profile"
                    />
                    <label htmlFor="file-input">
                      <FaCamera className="camera-icon" />
                    </label>
                    <input
                      id="file-input"
                      type="file"
                      onChange={handleFileSelect}
                      style={{ display: "none" }}
                    />
                  </div>
                </div>
                <div className="profile-card">
                  <h5 className="card-title">Username</h5>
                  <p className="card-text">
                    <small className="text-body-secondary center">Age Program</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3 profile-card">
            <div className="card-body">
              <h2 className="text-body-secondary fw-bold card-title">About me</h2>
              <p className="card-text text-body-secondary text-sm-start fw-light">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                N/A
              </p>
            </div>
          </div>

        <div className="card mb-3 profile-gallery">
            <div className="card-body">
              <h2 className="text-body-secondary  gallery-card-title">Gallery</h2>
              <div className="gallery">
                <div className="gallery-item">
                 
                </div>
            </div>
          </div>
        </div>

          <div className="card mb-3 profile-card">
            <div className="card-body">
              <h2 className="text-body-secondary fw-bold card-title">Basic Info</h2>
              <ul className="list-group list-group-flush">
                <li className="list-group-item text-body-secondary">
                  University N/A
                </li>
                <li className="list-group-item text-body-secondary">
                  Level N/A
                </li>
                <li className="list-group-item text-body-secondary">
                  Height N/A
                </li>
                <li className="list-group-item text-body-secondary">
                  Weight N/A
                </li>
                <li className="list-group-item text-body-secondary">
                  Body Type N/A
                </li>
                <li className="list-group-item text-body-secondary">
                  Living Status N/A
                </li>
              </ul>
            </div>
          </div>

          <div className="card mb-3 profile-card">
            <div className="card-body">
              <h2 className="text-body-secondary fw-bold card-title">Passion</h2>
              <Passion />
            </div>
          </div>
        </div>
        </div>
      </>
    );
  }

  // Render the actual profile with real data
  const profilePictureSrc =
    profileData.profilePictureUrl || "/default-profile-picture.png";
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
    <div className="card mb-3">
      <img src={profilePictureSrc} className="card-img-top" alt="profile" />
      <div className="card-body">
        <h5 className="card-title">{profileData.username}</h5>
        <p className="card-text">{profileData.age}</p>
        <p className="card-text">
          <small className="text-body-secondary">{program}</small>
        </p>

        <div className="profile-card">
          <div className="card-body">
            <h2 className="text-body-secondary fw-bold">Gallery</h2>
            <div className="container-fluid">
              <ul>
                {galleryImages.map((imageUrl) => (
                  <li key={imageUrl}>
                    <img src={imageUrl} alt="Gallery" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h2>Basic Info</h2>
            <ul className="list-group list-group-flush">
              <li className="list-group-item text-body-secondary">
                University {universityName}
              </li>
              <li className="list-group-item text-body-secondary">
                Level {level}
              </li>
              <li className="list-group-item text-body-secondary">
                Height {height}
              </li>
              <li className="list-group-item text-body-secondary">
                Weight {weight}
              </li>
              <li className="list-group-item text-body-secondary">
                BodyType {bodyType}
              </li>
              <li className="list-group-item text-body-secondary">
                Living Status {livingStatus}
              </li>
            </ul>
          </div>
        </div>

        <div className="profile-card card">
          <h2 className="text-body-secondary fw-bold">About me</h2>
          <p>{bio}</p>
        </div>

        <div className="card">
          <div className="card-body">
            <h2 className="card-title">Passion</h2>
            <p className="card-text">{profileData.passion || "N/A"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
