import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:7048/api/auth/login", {
                email,
                password,
            });
            toast.success("Login successful!");
            localStorage.setItem("token", response.data.token); // Store JWT token
        } catch (error: any) {
            toast.error(error.response?.data?.message || "Login failed! Check your credentials.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
