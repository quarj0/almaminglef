import { Fragment, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Homepage from "./components/Homepage";
import LoginPage from "./components/LoginPage";
import ForgotPassword from "./components/ResetPasswd";
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";
import Chat from "./components/Chat";
import Search from "./components/Search";
import Views from "./components/Views";
import Settings from "./components/Settings";
import Favorite from "./components/Favorite";
import DeleteAccount from "./components/DeleteAccountModal";
import { ToastContainer } from "react-toastify";

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleDeleteAccount = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Router>
      <Fragment>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/register" element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/session/forget-password" element={<ForgotPassword />} />
          <Route path="/session/account" element={<Sidebar />} />
          <Route path="/session/profile" element={<Profile />} />
          <Route path="/session/chat/list" element={<Chat />} />
          <Route path="/session/favorite" element={<Favorite />} />
          <Route path="/session/find-mate" element={<Search />} />
          <Route path="/session/views" element={<Views />} />
          <Route path="/session/settings" element={<Settings />} />
        </Routes>
        <ToastContainer />

        <Link to="/session/delete-account">
          <button onClick={handleDeleteAccount}>Delete Account</button>
        </Link>
        <DeleteAccount showModal={showModal} onClose={handleCloseModal} />
      </Fragment>
    </Router>
  );
}

export default App;
