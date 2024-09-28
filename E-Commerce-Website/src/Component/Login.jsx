import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate for redirection

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    // Get stored user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem("userData"));

    // Check if the stored data exists and matches the input email and password
    if (!storedUser || storedUser.email !== email || storedUser.password !== password) {
      setError("Invalid email or password.");
      return;
    }

    // If credentials are correct, update isLoggedIn to true
    const updatedUser = { ...storedUser, isLoggedIn: true };
    localStorage.setItem("userData", JSON.stringify(updatedUser));

    console.log("Login successful", { email });

    // Redirect to /home page after successful login
    navigate("/");

    // Reset form
    setEmail("");
    setPassword("");
    setError("");
  };

  return (
    <div className="form-page">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="d-column">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="d-column">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <span><Link to="sign">Register here</Link></span>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
