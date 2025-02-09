import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../components/LandingPage";
import Login from "../components/Login";
import Register from "../components/Register";
import Home from "../components/Home";
import PrivateRoute from "../utils/PrivateRoute";
import Header from "../components/Header";

const AppRoutes: React.FC = () => {
    return (
            
            <Routes>
            {/* Public routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Private routes */}
            <Route
                path="/home"
                element={
                <PrivateRoute>
                    <Home />
                </PrivateRoute>
            }/>
            </Routes>

    );
};

export default AppRoutes;

