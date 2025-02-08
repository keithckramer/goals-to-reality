import React, { useState } from "react";
import axios from "axios";
import "../styles/Login.scss";
import Button from "../components/Button";

const Login: React.FC = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [formData, setFormData] = useState({
      email: "",
      password: "",
    });

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
        try {
          const response = await axios.post("https://localhost:7048/api/Auth/login", formData);
          setSuccessMessage(response.data.message || "Registration successful!");
          setErrorMessage("");
          setFormData({
            email: "",
            password: "",
          });
        } catch (error: any) {
          setErrorMessage(error.response?.data?.message || "Registration failed!");
          setSuccessMessage("");
        }
      };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
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
          <Button label="Login" type="submit" onClick={() => {}} className="primaryButton" />
        </form>
      </div>
    </div>
  );
};

export default Login;
