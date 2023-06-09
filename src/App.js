import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./components/Homepage";
import LoginPage from "./components/LoginPage";
import ForgotPassword from "./components/ResetPasswd"

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Homepage />} />
                    <Route path="/register" element={<Homepage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/forget-password" element={<ForgotPassword />} />
                </Routes>
            </Router>
        </div>
    );
    }

export default App;
