import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../components/LandingPage";
import Login from "../components/Login";
import Register from "../components/Register";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "../utils/PrivateRoute";
import OnboardingPage from "../pages/OnBoarding";

const AppRoutes: React.FC = () => {
    return (
            
            <Routes>
            {/* Public routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/onboarding" element={<OnboardingPage />} />

            {/* Private routes */}
            <Route
                path="/dashboard"
                element={
                <PrivateRoute>
                    <Dashboard />
                </PrivateRoute>
            }/>
            </Routes>

    );
};

export default AppRoutes;

