import React, { useState } from "react";
import axios from "axios";
import Button from "../components/Button";
import "../styles/Register.scss";

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    address: "",
    city: "",
    stateId: "",
    zip: "",
    birthday: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:7048/api/auth/register", formData);
      alert("Registration successful!");
    } catch (error) {
      alert("Registration failed!");
    }
  };

  return (
    <div className="register-page">
      <div className="register-card">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleInputChange}
          />
          <select name="stateId" value={formData.stateId} onChange={handleInputChange}>
            <option value="">Select State</option>
            {/* Add state options here */}
          </select>
          <input
            type="text"
            name="zip"
            placeholder="Zip Code"
            value={formData.zip}
            onChange={handleInputChange}
          />
          <input
            type="date"
            name="birthday"
            value={formData.birthday}
            onChange={handleInputChange}
          />
          <Button label="Register" type="submit" onClick={() => {}} className="primaryButton" />
        </form>
      </div>
    </div>
  );
};

export default Register;
