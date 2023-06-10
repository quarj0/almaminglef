import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [potentialMatches, setPotentialMatches] = useState([]);

  useEffect(() => {
    // Fetch potential matches from the backend
    const fetchPotentialMatches = async () => {
      try {
        const response = await axios.get('/api/potential-matches'); // Replace '/api/potential-matches' with your actual API endpoint
        setPotentialMatches(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPotentialMatches();
  }, []);

  const handleLike = async (matchId) => {
    try {
      await axios.post(`/api/like/${matchId}`); // Replace '/api/like/:matchId' with your actual API endpoint for liking a match
      // Optionally, update the potential matches list after a successful like
      // fetchPotentialMatches();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDislike = async (matchId) => {
    try {
      await axios.post(`/api/dislike/${matchId}`); // Replace '/api/dislike/:matchId' with your actual API endpoint for disliking a match
      // Optionally, update the potential matches list after a successful dislike
      // fetchPotentialMatches();
    } catch (error) {
      console.log(error);
    }
  };

  if (potentialMatches.length === 0) {
    return <div>No potential matches found</div>;
  }

  return (
    <div className="look-through-section">
      <h2>Find match</h2>
      <div className="potential-matches">
        {potentialMatches.map((match) => (
          <div key={match.id} className="match-card">
            <img src={match.profile_picture} alt="Match Profile" className="profile-picture" />
            <h3>{match.username}</h3>
            <p>{match.location}</p>
            <div className="match-actions">
              <button onClick={() => handleDislike(match.id)}>Dislike</button>
              <button onClick={() => handleLike(match.id)}>Like</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
