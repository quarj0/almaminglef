import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Favorite.css";

const Favorites = ({ userId }) => {
  const [favorites, setFavorites] = useState([]);
  const [addedBy, setAddedBy] = useState([]);
  const [showUserCards, setShowUserCards] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await axios.get(`/api/favorites/${userId}/`);
        setFavorites(response.data.favorites);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchAddedBy = async () => {
      try {
        const response = await axios.get(`/api/added-by/${userId}/`);
        setAddedBy(response.data.added_by);
      } catch (error) {
        console.log(error);
      }
    };

    fetchFavorites();
    fetchAddedBy();
  }, [userId]);

  const handleAddFavorite = async () => {
    try {
      const response = await axios.get(`/api/users/`);
      setUsers(response.data);
      setShowUserCards(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="favorites-container-wrapper">
      <div className="favorites-container">
        <div className="favorite-buttons-container">
          <div className="add-me-favorite-btn favorite-card">Add Me as Favorite</div>
          <div className="add-favorite-btn favorite-card">Add Favorite</div>
        </div>

        <h2>My Favorites</h2>
        {favorites.length > 0 ? (
          <ul className="favorites-list">
            {favorites.map((favorite) => (
              <li key={favorite.id} className="favorite-item">{favorite.username}</li>
            ))}
          </ul>
        ) : (
          <p>No favorites yet.</p>
        )}

        <h2>Added Me as Favorite</h2>
        {addedBy.length > 0 ? (
          <ul className="added-by-list">
            {addedBy.map((user) => (
              <li key={user.id} className="added-by-item">{user.username}</li>
            ))}
          </ul>
        ) : (
          <p>No one added you as their favorite yet.</p>
        )}

        {!showUserCards && (
          <button className="add-favorite-btn" onClick={handleAddFavorite}>Add Favorite</button>
        )}

        {showUserCards && (
          <div className="add-favorite-container">
            <h2>Add Favorite</h2>
            {users.length > 0 ? (
              <div className="user-cards">
                {users.map((user) => (
                  <div key={user.id} className="user-card">
                    <img src={user.profilePicture} alt="Profile" className="profile-picture" />
                    <p className="username">{user.username}</p>
                    <p className="university">{user.university}</p>
                    <p className="age">{user.age}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p>No users found.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
