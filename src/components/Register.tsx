import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "../components/Button";
import "../styles/Register.scss";
import { useNavigate } from "react-router-dom";
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

  const [states, setStates] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await axios.get("https://localhost:7048/api/States");
        console.log(response.data); // Log to confirm structure
        setStates(response.data); // Adjust here if response.data has a nested structure
        
      } catch (error) {
        console.error("Error fetching states", error);
      }
    };
    fetchStates();
  }, []);
  
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post("https://localhost:7048/api/Auth/register", formData);
      // Assuming the backend returns a token upon successful registration
      const token = response.data.token;
      localStorage.setItem("token", token);
      setSuccessMessage(response.data.message || "Registration successful!");
      setErrorMessage("");
      setFormData({
        username: "",
        email: "",
        password: "",
        address: "",
        city: "",
        stateId: "",
        zip: "",
        birthday: "",
      });
      navigate('/home');
    } catch (error: any) {
      setErrorMessage(error.response?.data?.message || "Registration failed!");
      setSuccessMessage("");
    }
  };

  return (
    <div className="register-page">
      <div className="register-card">
        <h2>Register</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
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
            {states.map((state: any) => (
            <option key={state.id} value={state.id}>
            {state.stateName}
            </option>
                ))}
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