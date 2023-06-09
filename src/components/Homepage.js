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

import "../styles/Homepage.css";

const topUniversities = [
  "University of Cape Coast",
  "University of Ghana",
  "Kwame Nkrumah University of Science and Technology",
  "University for Development Studies",
  "University of Health and Allied Science",
  "University of Education, Winneba",
  "Ashesi University",
  "Central University",
  "Ghana Institute of Management and Public Administration (GIMPA)",
  "Valley View University",
  "University of Professional Studies, Accra (UPSA)",
  "Presbyterian University College",
  "Accra Technical University",
  "Kumasi Technical University",
  "University for Development Studies - Tamale Campus",
];

function Homepage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [university, setUniversity] = useState("");
  const [location, setLocation] = useState("");
  const [dobDay, setDobDay] = useState("");
  const [dobMonth, setDobMonth] = useState("");
  const [dobYear, setDobYear] = useState("");
  const [gender, setGender] = useState("");
  const [otp, setOtp] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegister = async (event) => {
    event.preventDefault();

    const dob = `${dobYear}-${dobMonth}-${dobDay}`;

    // Make API request to register user
    try {
      const response = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
          university,
          location,
          dob,
          gender,
        }),
      });

      if (response.ok) {
        // Registration successful, show success message and ask for OTP
        setErrorMessage("");
        setIsRegistered(true);
      } else {
        const data = await response.json();
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error("An error occurred during registration:", error);
      setErrorMessage(
        "An error occurred during registration. Please try again later."
      );
    }
  };

  const handleVerifyOTP = async (event) => {
    event.preventDefault();

    // Make API request to verify OTP
    try {
      const response = await fetch("api/verify-otp/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, otp }),
      });

      if (response.ok) {
        // OTP verification successful, redirect to login page
        setErrorMessage("");
        // Redirect to login page
        window.location.href = "/login";
      } else {
        const data = await response.json();
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error("An error occurred during OTP verification:", error);
      setErrorMessage(
        "An error occurred during OTP verification. Please try again later."
      );
    }
  };

  if (isRegistered) {
    return (
      <div className="otp-verification">
        <h1>OTP Verification</h1>
        <p className="otp-description">
          A verification code has been sent to your email. Please enter the code
          below to complete the registration process.
        </p>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <form className="otp-form" onSubmit={handleVerifyOTP}>
          <div className="form-group">
            <label htmlFor="otp">OTP</label>
            <input
              type="text"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              style={{ backgroundColor: "transparent" }}
            />
          </div>
          <button type="submit" className="verify-button">
            Verify
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="homepage">
      <h1 className="title">AlmaMingle</h1>
      <p className="description">
        Find your perfect match! Join our dating community today.
      </p>
      <p className="description">Let's get started!</p>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form className="registration-form" onSubmit={handleRegister}>
        <div className="form-column">
          <div className="form-group">
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="username"
              style={{ backgroundColor: "transparent" }}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="email"
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
              placeholder="password"
              style={{ backgroundColor: "transparent" }}
            />
          </div>
          <div className="form-group">
            <select
              id="university"
              value={university}
              onChange={(e) => setUniversity(e.target.value)}
              required
              placeholder="university"
              style={{ backgroundColor: "transparent" }}
            >
              {/* <option value=""></option> */}
              {topUniversities.map((uni) => (
                <option key={uni} value={uni}>
                  {uni}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="form-column">
          <div className="form-group">
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
              placeholder="location"
              style={{ backgroundColor: "transparent" }}
            />
          </div>
          <div className="form-group">
            <div className="dob-fields">
              <input
                type="number"
                min="1"
                max="31"
                placeholder="Day"
                value={dobDay}
                onChange={(e) => setDobDay(e.target.value)}
                required
                style={{ backgroundColor: "transparent" }}
              />
              <input
                type="number"
                min="1"
                max="12"
                placeholder="Month"
                value={dobMonth}
                onChange={(e) => setDobMonth(e.target.value)}
                required
                style={{ backgroundColor: "transparent" }}
              />
              <input
                type="number"
                min="1900"
                max={new Date().getFullYear()}
                placeholder="Year"
                value={dobYear}
                onChange={(e) => setDobYear(e.target.value)}
                required
                style={{ backgroundColor: "transparent" }}
              />
            </div>
          </div>
          <div className="form-group">
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
              placeholder="Gender"
              style={{ backgroundColor: "transparent" }}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="form-group">
            <button type="submit" className="register-button">
              Register
            </button>
            <p className="terms">
              By clicking Register, you agree to our <a href={'javascript.void(0)'}>Terms</a>{" "}
              and that you have read our <a href="javascript.void(0)">Privacy Policy</a>.
            </p>
            <br />
            <p className="login-link">
              Already have an account? <a href="/login">Login</a>
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
        <hr className="tips-hr" />
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
        <hr className="fav-hr" />

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
        <hr className="fav-hr" />

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

export default Homepage;
