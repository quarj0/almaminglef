import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faLock,
  faEnvelope,
  faSchool,
  faCalendarAlt,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "../styles/LoginPage.css";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();

    // Make API request to login user
    try {
      const response = await fetch("http://127.0.0.1:8000/almamingle/v1/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (response.ok) {
        // Login successful, redirect to dashboard or homepage
        setErrorMessage("");
        // Redirect to dashboard or homepage
        window.location.href = "/dashboard";
      } else {
        const data = await response.json();
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error("An error occurred during login:", error);
      setErrorMessage(
        "An error occurred during login. Please try again later."
      );
    }
  };

  return (
    <div className="homepage">
      <h1 className="title">AlmaMingle</h1>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <form className="login-form" onSubmit={handleLogin}>
        <div className="login-body">
          <div className="form-group">
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Username"
              style={{ backgroundColor: "transparent" }}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
              style={{ backgroundColor: "transparent" }}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="register-button">
              Login
            </button>
            <div className="forget-password">
              <p className="forget-password-text">
                <a href="/forget-password"> Forget Password?</a>
              </p>
            </div>
            <p className="login-link">
              Don't have an account? <a href="/register">Register</a>
            </p>
          </div>
        </div>
      </form>

      <section className="about">
        <h2 className="about-title">About</h2>
        <div className="searching-tip-line">
          <hr />
        </div>
        <p className="about-description">
          Luvmee is a dating app that helps you find your perfect match.
        </p>
        <p className="about-description">
          Begin your love story at Luvmee by chatting with people all over top
          universities via our online chat. Our latest live chat technology lets
          you talk with beautiful people instantly, completely safe and in the
          comfort of your own home. Simply click the “Register” button and start
          your experience. Send your first message for free now
        </p>
      </section>
      <section className="searching-tips">
        <h2 className="searching-tips-title">Searching Tips</h2>
        <hr />
        <div className="searching-tips-items">
          <div className="searching-tips-item">
            <div className="searching-tips-icon">
              <FontAwesomeIcon
                className="faMapMarkerAlt"
                icon={faMapMarkerAlt}
              />
            </div>
            <div className="searching-tips-content">
              <h3 className="searching-tips-subtitle">Location</h3>
              <p className="searching-tips-description">
                Filter your search location to your area or your next
                destination.
              </p>
            </div>
          </div>

          <div className="searching-tips-item">
            <div className="searching-tips-icon">
              <FontAwesomeIcon className="faCalendarAlt" icon={faCalendarAlt} />
            </div>
            <div className="searching-tips-content">
              <h3 className="searching-tips-subtitle">Age</h3>
              <p className="searching-tips-description">
                Be in control of your search by filtering your search age to
                match your preference.
              </p>
            </div>
          </div>

          <div className="searching-tips-item">
            <div className="searching-tips-icon">
              <FontAwesomeIcon className="faSchool" icon={faSchool} />
            </div>
            <div className="searching-tips-content">
              <h3 className="searching-tips-subtitle">University</h3>
              <p className="searching-tips-description">
                Get to know people from your school or other schools. Start your
                love story at Luvmee, the best dating site for students.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="favorite">
        <h3 className="favorite-title">
          <FontAwesomeIcon className="faHeart" icon={faHeart} /> Favorite
        </h3>
        <hr/>
        <p className="favorite-description">
          Add people to your favorite list to keep track of your matches. Let
          them know you are interested by sending them a message. You can view
          your favorite list by clicking the <FontAwesomeIcon icon={faHeart} />{" "}
          icon on the top right corner.
        </p>
      </section>
      <section className="Safe-secure">
        <h3 className="Safe-secure-title">
          <FontAwesomeIcon className="faLock" icon={faLock} /> Safe & Secure
        </h3>
        <hr/>
        <p className="Safe-secure-description">
          We are committed to protecting your privacy. Your personal information
          is kept safe and secure. We want to make sure you have a safe
          experience on Luvmee, to help singles feel comfortable when they are
          getting to know each other. and make the site as safe as possible for
          everyone.
        </p>
      </section>

      <section className="contact">
        <h3 className="contact-title">
          <FontAwesomeIcon className="faEnvelope" icon={faEnvelope} /> Contact
        </h3>
        <p className="contact-description">
          If you have any questions or concerns, please contact us at{" "}
          <a href="mailto:guidemelearn.info@gmail.com">
            guidemelearn.info@gmail.com
          </a>
        </p>
      </section>

      <br />
      <p className="footer">&copy; 2021 Luvmee - All Rights Reserved</p>
    </div>
  );
}

export default LoginPage;
