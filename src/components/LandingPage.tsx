import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import "../styles/LandingPage.scss";

const LandingPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="landing-page">
            <div className="hero-section">
                <h1>Welcome to <span className="highlight">Goals to Reality</span></h1>
                <p className="tagline">Transforming aspirations into achievements, one step at a time.</p>
                <div className="button-group">
                    <Button
                        onClick={() => navigate("/login")}
                        label="Login"
                        type="button"
                        className="primary-button"
                    />
                    <Button
                        onClick={() => navigate("/register")}
                        label="Register"
                        type="button"
                        className="secondary-button"
                    />
                </div>
            </div>
        </div>
    );
};

export default LandingPage;


