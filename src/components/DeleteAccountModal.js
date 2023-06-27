import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function DeleteAccountModal({ showModal, onClose }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleDeleteAccount = () => {
    // Send a request to your Django backend to delete the account
    axios
      .post("/delete-account/", { password })
      .then((response) => {
        // Account deleted successfully
        toast("Account Deleted Successfuly!");
        // TODO: Handle any necessary clean-up or redirection
      })
      .catch((error) => {
        // Error occurred during account deletion
        toast("Incorrect password. Please try again.");
        setError("Incorrect password. Please try again.");
        console.log(error);
      });
  };

  return (
    <div classNameName={`modal ${showModal ? "show" : ""}`}>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Confirm Account Deletion
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>
                Warning: Deleting your account is irreversible and all
                associated data will be permanently lost.
              </p>
              <p>Are you sure you want to proceed?</p>
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
              {error && <p className="error">{error}</p>}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={onClose}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleDeleteAccount}
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteAccountModal;
