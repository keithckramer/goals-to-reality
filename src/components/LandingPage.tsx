import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import "../styles/LandingPage.scss";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <div className="hero">
        <h1>Welcome to Goals to Reality</h1>
        <p>Turn your dreams into actionable goals with our platform.</p>
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



