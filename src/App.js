import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./components/Homepage";
import LoginPage from "./components/LoginPage";
import ForgotPassword from "./components/ResetPasswd";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Chat from "./components/Chat";
import Wallet from "./components/Wallet";
import Search from "./components/Search";
import Views from "./components/Views";
import Settings from "./components/Settings";
import Favorite from "./components/Favorite";


function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Homepage />} />
                    <Route path="/register" element={<Homepage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/forget-password" element={<ForgotPassword />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/chat" element={<Chat />} />
                    <Route path="/favorite" element={<Favorite />} />
                    <Route path="/find-mate" element={<Search />} />
                    <Route path="/views" element={<Views />} />
                    <Route path="/wallet" element={<Wallet />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
            </Router>
        </div>
    );
    }

export default App;
