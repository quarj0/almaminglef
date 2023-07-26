import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


import "../styles/passion.css";

const Passion = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPassions, setSelectedPassions] = useState([]);
  const [, setSavedPassions] = useState([]);

  // Load saved passions from local storage on component mount
  useEffect(() => {
    const savedPassions = localStorage.getItem("selectedPassions");
    if (savedPassions) {
      setSelectedPassions(JSON.parse(savedPassions));
    }
  }, []);

  // Save selected passions to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("selectedPassions", JSON.stringify(selectedPassions));
  }, [selectedPassions]);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAddPassion = (passion) => {
    if (!selectedPassions.includes(passion)) {
      setSelectedPassions([...selectedPassions, passion]);
    }
  };

  const handleRemovePassion = (passion) => {
    const updatedPassions = selectedPassions.filter((p) => p !== passion);
    setSelectedPassions(updatedPassions);
  };

  const availablePassions = [
    "Passion 1",
    "Passion 2",
    "Passion 3",
    "Passion 4",
    "Passion 5",
    "Passion 6",
    "Passion 7",
    "Passion 8",
    "Passion 9",
    "Passion 10",
    // Add more passions as needed
  ];

  return (
    <div>
      <div className="selected-passions">
        {selectedPassions.map((passion, index) => (
          <span key={index} className="selected-passion">
            {passion}
            <button
              className="remove-passion"
              onClick={() => handleRemovePassion(passion)}
            >
              X
            </button>
          </span>
        ))}
      </div>

      <button
        type="button"
        className="btn btn-primary"
        onClick={handleShowModal}
      >
        Add Passion
      </button>

      <div
        className={`modal ${showModal ? "show" : ""}`}
        style={{ display: showModal ? "block" : "none" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-body-secondary center">My Passions</h5>
              <button
                type="button"
                className="btn-close"
                onClick={handleCloseModal}
              ></button>
            </div>
            <div className="modal-body">
              <p className="card-text text-body-secondary text-sm-start fw-light">
                Passions make it easier to find people that share the same
                interests as you. Adding 3-5 to your profile will help you make
                better and quicker connections.
              </p>
              <div className="passion-list">
                {availablePassions.map((passion, index) => (
                  <div
                    key={index}
                    className={`passion-item ${
                      selectedPassions.includes(passion) ? "highlighted" : ""
                    }`}
                    onClick={() => handleAddPassion(passion)}
                  >
                    {passion}
                  </div>
                ))}
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Passion;
