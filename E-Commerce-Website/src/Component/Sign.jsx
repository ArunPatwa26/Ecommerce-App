import React, { useState } from "react";
import "../App.css";

const Sign = () => {
  const [fullname, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset success and error messages
    setError("");
    setSuccess("");

    // Basic validation
    if (!fullname || !email || !password || !confirmPassword || !address) {
      setError("Please fill in all fields.");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Password strength validation
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    // Confirm password match
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Store signup data in localStorage with login status
    const userData = {
      fullname,
      email,
      password,
      address,
      isLoggedIn: true, // Set the user as logged in after signup
    };

    try {
      localStorage.setItem("userData", JSON.stringify(userData));
      console.log("Signup data stored successfully:", userData);

      // Reset form after successfully storing the data
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setAddress("");
      setError("");

      // Display success message
      setSuccess("Signup successful! Redirecting to home page...");

      // Add a delay for smooth navigation
      setTimeout(() => {
        window.location.href = "/"; // Navigate to the homepage or profile page
      }, 1000);
    } catch (err) {
      console.error("Error storing signup data in localStorage:", err);
      setError("Error saving your data. Please try again.");
    }
  };

  return (
    <div className="form-page">
      <h2>Signup</h2>

      {/* Show error message */}
      {error && <p className="error">{error}</p>}

      {/* Show success message */}
      {success && <p className="success">{success}</p>}

      <form onSubmit={handleSubmit}>
        <div className="d-column">
          <label htmlFor="fullname">Full Name:</label>
          <input
            type="text"
            id="fullname"
            value={fullname}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
        <div className="d-column">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="d-column">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Signup</button>
      </form>
    </div>
  );
};

export default Sign;
