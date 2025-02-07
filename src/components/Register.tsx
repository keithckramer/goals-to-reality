import React, { useState } from "react";
import axios from "axios";
import "../styles/Register.scss";
import Button from "../components/Button";

const Register: React.FC = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        address: "",
        city: "",
        stateID: "",
        zip: "",
        birthday: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:7048/api/auth/register", formData);
            alert("Registration successful!");
        } catch (error) {
            console.error("Registration failed:", error);
            alert("Registration failed!");
        }
    };

    return (
        <div className="register-page">
            <form onSubmit={handleSubmit} className="register-form">
                <h2>Register</h2>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                    required
                />
                <select name="stateID" value={formData.stateID} onChange={handleChange} required>
                    <option value="">Select State</option>
                    {/* Add state options here */}
                </select>
                <input
                    type="text"
                    name="zip"
                    placeholder="Zip"
                    value={formData.zip}
                    onChange={handleChange}
                    required
                />
                <input
                    type="date"
                    name="birthday"
                    value={formData.birthday}
                    onChange={handleChange}
                    required
                />
                <Button type="submit" label="Register" className="primary-button" onClick={() => {}} />
            </form>
        </div>
    );
};

export default Register;

