import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/Header.scss";

const Header: React.FC = () => {
  const isAuthenticated = false; // Replace with actual authentication state logic
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user session or token
    alert("Logged out successfully!");
    navigate("/login");
  };

  return (
    <header className="header">
      <nav className="nav">
        <ul className="menu">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
              Home
            </NavLink>
          </li>
          {!isAuthenticated ? (
            <li>
              <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "")}>
                Login/Register
              </NavLink>
            </li>
          ) : (
            <>
              <li>
                <NavLink to="/goals" className={({ isActive }) => (isActive ? "active" : "")}>
                  Goals
                </NavLink>
              </li>
              <li>
                <NavLink to="/calendar" className={({ isActive }) => (isActive ? "active" : "")}>
                  Calendar
                </NavLink>
              </li>
              <li>
                <NavLink to="/to-do-list" className={({ isActive }) => (isActive ? "active" : "")}>
                  Get To Do List
                </NavLink>
              </li>
              <li>
                <NavLink to="/kanban" className={({ isActive }) => (isActive ? "active" : "")}>
                  Kanban Board
                </NavLink>
              </li>
              <li>
                <NavLink to="/patterns" className={({ isActive }) => (isActive ? "active" : "")}>
                  Patterns
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
                  About Us
                </NavLink>
              </li>
              <li>
                <button className="logout-button" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
